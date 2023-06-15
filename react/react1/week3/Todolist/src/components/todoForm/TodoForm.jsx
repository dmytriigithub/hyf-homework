import { useState } from 'react';

import './TodoForm.css';

const TodoForm = (props) => {
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    
    const onDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(description && deadline){
            const today = new Date();
            const selectedDate = new Date(deadline);
            if (selectedDate < today) {
                alert("Please select a date in the future.");
                return;
            }
            props.onAdd(description, deadline);
            setDescription('');
            setDeadline('');
        }        
    }

    return (
        <div className="todo-form">
            <form className="form" onSubmit = {onSubmit}>
                <input className="input-add-todo" type="text" placeholder='New todo' name="description" value={description} onChange={onDescriptionChange}/>
                <input className="input-add-deadline" type="date" name="deadline" value={deadline} onChange={onDeadlineChange}/>
                <button type='submit' className='btn-add-todo'>Add todo</button>
            </form>
        </div>
        
    )
    
}

export default TodoForm;