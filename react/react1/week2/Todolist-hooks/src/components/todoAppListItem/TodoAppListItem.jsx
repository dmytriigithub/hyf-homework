import './TodoAppListItem.css'


const TodoAppListItem = (props) => {


    const {description, onDelete, onToggleComplete, complete} = props

    return (
        <li>
            <div className='todo-list-item'>
                <h3 className={!complete ? 'description' : 'description complete'}>{description}</h3>
                <input type="checkbox" name="check" value="checked" onChange={onToggleComplete} checked={complete}/>
                <button className='btn-delete' onClick={onDelete}>Delete</button>
            </div>
        </li>
    )
}
export default TodoAppListItem;