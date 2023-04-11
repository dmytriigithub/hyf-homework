import { useState } from 'react';

import './TodoForm.css';

const TodoForm = (props) => {
    const [description, setDescription] = useState('')
    

    const onValueChange = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(description){
            props.onAdd(description);
            setDescription('');
        }
        // props.onAdd('random text');
        // setDescription('');

        
    }

    return (
        <div className="todo-form">
            <form className="form" onSubmit = {onSubmit}>
                <input className="input-add-todo" type="text" placeholder='New todo' name="description" value={description} onChange={onValueChange}/>
                <button type='submit' className='btn-add-todo'>Add todo</button>
            </form>
        </div>
        
    )
    
}

export default TodoForm;