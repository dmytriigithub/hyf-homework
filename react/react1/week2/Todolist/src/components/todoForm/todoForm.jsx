import { Component } from 'react';

import './todoForm.css';

class TodoForm extends Component {
    state = {
        description: ""
    }
    

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.description){
            this.props.onAdd(this.state.description);
            this.setState({
            description: ''
            })
        }
        // this.props.onAdd('random text');
        // this.setState({
        // description: ''
        // })
        
    }

    render(){
        const {description} = this.state;
        return (
            <div className="todo-form">
                <form className="form" onSubmit = {this.onSubmit}>
                    <input className="input-add-todo" type="text" placeholder='New todo' name="description" value={description} onChange={this.onValueChange}/>
                    <button type='submit' className='btn-add-todo'>Add todo</button>
                </form>
            </div>
            
        )
    }
}

export default TodoForm;