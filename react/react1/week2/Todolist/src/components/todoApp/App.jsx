import { Component } from 'react';

import TodoAppList from '../todoAppList/todoAppList'
import TodoForm from '../todoForm/todoForm';
import TodoTimer from '../todoTimer/todoTimer';
import './App.css'

import todos from '../../todos';


class App extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      todos:todos
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({todos}) => {
      return {
        todos: todos.filter(item => item.id !== id)
      }
    })
  }

  addItem = (description) => {
    const newItem = {
        description,
        complete: false,
        id: this.maxId++
    }
    this.setState(({todos}) => {
        const newArr = [...todos, newItem];
        return {
            todos: newArr
        }
    });
  }

  onToggleComplete = (id) => {
    this.setState(({todos}) => ({
      todos: todos.map(item => {
        if(item.id === id) {
          return {...item, complete: !item.complete}
        }
        return item;
      })
    }))
  }

  render(){
    return (
      <div className="app">
        <TodoTimer/>
        <TodoForm onAdd={this.addItem}/>
        <TodoAppList 
          todos={this.state.todos} 
          onDelete={this.deleteItem} 
          onToggleComplete={this.onToggleComplete}/>
      </div>
    )
  }
}

export default App;
