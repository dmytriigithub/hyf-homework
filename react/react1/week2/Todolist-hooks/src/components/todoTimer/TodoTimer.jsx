import { useState, useEffect } from 'react';


const TodoTimer = () => {

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, [timer]);
   
  
    return (
        <div className="todo-timer">
            <h3>You have used {timer} seconds on this website</h3> 
        </div>
        
    )
}

export default TodoTimer;