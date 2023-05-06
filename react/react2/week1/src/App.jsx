import { useState, createContext, useEffect} from "react";
import List from "./components/list/List";
import SearchForm from "./components/searchForm/SearchForm";
import Spinner from "./components/spinner/Spinner";

export const AppContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        if (response.status === 422) {
          throw new Error('User not found', setError('User not found'));
        } else if (response.status === 403) {
          throw new Error('Server error', setError('You have exceeded the limit of fetching. Wait about a minute and try again'));
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        setResults(data.items);
        setError(null);
      } catch (error) {
          console.error("Error fetching github users:", error);
          setResults(null);
          setLoading(false);
      }
    }
    if (query !== "") {
      fetchData()
    } else {
      setResults([])
      setError(null)
    }
  }, [query]);


  return (
    <div>
      <AppContext.Provider value={{ query, setQuery, results }}>
        <main>
          <SearchForm />
          {loading ? <Spinner/> : null}
          {results ? <List /> : !error ? setError("Failed to fetch. Something went wrong.") : null}
          {error && <div className="error">{error}</div>}
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
