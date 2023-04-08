import { Component } from 'react';


class TodoTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           timer: 0
        }
    }


    timerNumber = () => {
        let i = 0;
        setInterval(() => {
            i += 1;
            this.setState({
                timer: i
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