import TodoList from '../TodoList/TodoList';
import './TodoApp.css'

function TodoApp() {

  const todo = [
    {description: "Get out of bed", deadline: "Wed Sep 13 2017", id: 1},
    {description: "Brush teeth", deadline: "Thu Sep 14 2017", id: 2},
    {description: "Eat breakfast", deadline: "Fri Sep 15 2017", id: 3}
  ];


  return (
    <div className="app">
      <TodoList todo={todo}/>
    </div>
  )
}

export default TodoApp
