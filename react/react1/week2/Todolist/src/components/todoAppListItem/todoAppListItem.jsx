import './todoAppListItem.css'


const TodoAppListItem = (props) => {


    const {description, onDelete, onToggleComplete, complete} =props

    let className = 'description';
    let checked = false
    if (complete) {
        className += ' complete';
        checked = true

    }

    return (
        <li>
            <div className='todo-list-item'>
                <h3 className={className}>{description}</h3>
                <input type="checkbox" name="check" value="checked" onChange={onToggleComplete} checked={checked}/>
                <button className='btn-delete' onClick={onDelete}>Delete</button>
            </div>
        </li>
    )
}
export default TodoAppListItem;