import './TodoListItem.css'

const TodoListItem = ({description, deadline}) => {

    return (
        <li className="list-item">
            <h3>{description} - {deadline}</h3>
        </li>
    )
}

export default TodoListItem;