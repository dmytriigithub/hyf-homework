import TodoAppListItem from "../todoAppListItem/TodoAppListItem";

import './TodoAppList.css';

const TodoAppList = ({todos, onDelete, onToggleComplete}) => {
    const elements = todos.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TodoAppListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleComplete={() => onToggleComplete(id)}/>
        )
    })
  
    return (
        <div className="todo-list">
            <h1 className={!elements.length ? 'empty-list': 'empty-list hide'}>"No items..."</h1>
            <ul className="list">
                {elements}
            </ul>
        </div>
        
    )
}

export default TodoAppList;
