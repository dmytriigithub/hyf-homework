import './TodoAppListItem.css'
import { useState } from 'react';


const TodoAppListItem = (props) => {

    const {description, onDelete, onToggleComplete, complete, isEdit, onEdit, onUpdate, id, deadline} = props;
    const [descr, setDescr] = useState(description)
    
    const onValueChange = (e) => {
        setDescr(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(description)
        if(descr){
           return onUpdate(id, descr);
        }
        alert('You have to write todo description')
        onEdit();

    }

    const edit = <input className='description' name='descr'onChange={onValueChange} value={descr}/>;
    const updated = <span>{descr}</span>;
 
    
    return (
        <li>
            <div className='todo-list-item'>
                <form className="formItem" onSubmit = {onSubmit}>
                    <h5 className={!complete ? 'description' : 'description complete'}>{isEdit ? edit :  updated} | {deadline}</h5>
                    <input className='checkbox' type="checkbox" name="check" value="checked" onChange={onToggleComplete} checked={complete}/>
                    <button className='btn-delete' onClick={onDelete}>Delete</button>
                    <button type={!isEdit ? 'text' : 'submit'} className='btn-edit' onClick={onEdit}>{isEdit ? 'Update' : 'Edit'}</button>
                </form>
            </div>
        </li>
    )
}
export default TodoAppListItem;