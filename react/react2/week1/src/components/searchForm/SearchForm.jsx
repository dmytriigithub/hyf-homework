import { useContext } from "react";
import {AppContext} from "../../App"
import './SearchForm.css'

const SearchForm = () => {
  const { query, setQuery} = useContext(AppContext);

  return (
    <form >
      <input
        placeholder="Search for user"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;