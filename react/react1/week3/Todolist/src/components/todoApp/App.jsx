import { useState, useEffect} from 'react';

import TodoAppList from '../todoAppList/todoAppList'
import TodoForm from '../todoForm/TodoForm';
import TodoTimer from '../todoTimer/TodoTimer';
import './App.css';


const App = () => {

  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);
  const [maxId, setMaxId] = useState(4);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
    .then(resp => resp.json())
    .then(data => {
      setTodo(data);
      setError(null);
    })
    .catch(error => {
      console.error("Error fetching todolist:", error);
      setError("Failed to fetch todolist. Please try again later.");
      setTodo(null);
    });
  }, []);

  const deleteItem = (id) => {
    const updatedTodo = todo.filter(item => item.id !== id);
    setTodo(updatedTodo);
  }

  const addItem = (description, deadline) => {
    const newItem = {
      description,
      deadline,
      complete: false,
      isEdit: false,
      id: maxId
    }
    const updatedTodoList = [...todo, newItem];
    setTodo(updatedTodoList);
    setMaxId(prevMaxId => prevMaxId + 1);
  }

  const onToggleComplete = (id) => {
    const updatedTodoList = todo.map(item => {
      if(item.id === id) {
        return {...item, complete: !item.complete}
      }
      return item;
    });
    setTodo(updatedTodoList);
  }

  const editItem = (id) => {
    const updatedTodoList = todo.map(item => {
      if(item.id === id) {
        return {...item, isEdit: !item.isEdit}
      }
      return item;
    });
    setTodo(updatedTodoList);
  }

  const updateItem = (id, description) => {
    const updatedTodoList = todo.map(item => {
      if(item.id === id) {
        return {...item, description}
      }
      return item;    
    });
    setTodo(updatedTodoList);
  }

  
  return (
    <div className="app">
      <TodoTimer/>
      <TodoForm onAdd={addItem}/>
      {error && <div className="error">{error}</div>}
      {todo && <TodoAppList 
        
        todos={todo} 
        onDelete={deleteItem} 
        onToggleComplete={onToggleComplete}
        onEdit={editItem}
        onUpdate={updateItem}/>}
      
        
    </div>
  )
  
}

export default App;
