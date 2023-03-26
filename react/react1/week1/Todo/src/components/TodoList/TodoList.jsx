import TodoListItem from "../TodoListItem/TodoListItem"
import './TodoList.css'

const TodoList = ({todo}) => {
  const elements = todo.map(item => {
    const {id, ...itemProps} = item;
    return (
        <TodoListItem key={id} {...itemProps}/>
    )
  })

    return (
      <ul className="list">
            {elements}
        </ul>
    )
  }

export default TodoList;