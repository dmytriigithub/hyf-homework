import { useState } from 'react';

import TodoAppList from '../todoAppList/TodoAppList'
import TodoForm from '../todoForm/TodoForm';
import TodoTimer from '../todoTimer/TodoTimer';
import './App.css'

import todos from '../../todos';


const App = () => {

  const [todo, setTodo] = useState(todos);
  const [maxId, setMaxId] = useState(4);

  const deleteItem = (id) => {
    const updatedTodo = todo.filter(item => item.id !== id);
    setTodo(updatedTodo);
  }

  const addItem = (description) => {
    const newItem = {
      description,
      complete: false,
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

  
  return (
    <div className="app">
      <TodoTimer/>
      <TodoForm onAdd={addItem}/>
      <TodoAppList 
        todos={todo} 
        onDelete={deleteItem} 
        onToggleComplete={onToggleComplete}/>
    </div>
  )
  
}

export default App;
