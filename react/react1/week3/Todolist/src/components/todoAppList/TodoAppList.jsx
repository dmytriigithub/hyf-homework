import TodoAppListItem from "../todoAppListItem/TodoAppListItem";
import item from "../item/Item";

import './TodoAppList.css';
import Item from "../item/Item";

const TodoAppList = ({todos, onDelete, onToggleComplete, onEdit, onUpdate}) => {
    const elements = todos.map(item => {
        const {id, description, ...itemProps} = item;
        return (
            <TodoAppListItem 
                key={id}
                id={id}
                description={description}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleComplete={() => onToggleComplete(id)}
                onEdit={() => onEdit(id)}
                onUpdate={(id, description) => onUpdate(id, description)}/>
        )
    })
  
    return (
        
        <Item>
            {elements}
        </Item>
             
    
    )
}

export default TodoAppList;
