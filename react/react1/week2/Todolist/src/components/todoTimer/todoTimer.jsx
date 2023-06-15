import { Component } from 'react';


class TodoTimer extends Component {
    state = {
        timer: 0
    }


    timerNumber = () => {
        
        setInterval(() => {
            this.setState({
                timer: this.state.timer++
            })
         
        }, 1000)
        
    }
   
    componentDidMount() {
        this.timerNumber()
    }

    componentWillUnmount() {
        clearInterval(this.timerNumber)
    }
   

    render(){
        const {timer} = this.state
        return (
            <div className="todo-timer">
                <h3>You have used {timer} seconds on this website</h3> 
            </div>
            
        )
    }
}

export default TodoTimer;