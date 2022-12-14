
let name = null;
let toDoList = {};
let timer = 15;

function getReply(command){
    const command_1 = 'Hello my name is ';
          command_2 = 'What is my name';
          command_3 = 'Add fishing to my todo';
          command_4 = 'Add singing in the shower to my todo';
          command_5 = 'Remove fishing from my todo';
          command_6 = 'What is on my todo?';
          command_7 = 'What day is it today?';
          command_8 = 'What is ';
          command_9 = 'Set a timer for 15 seconds';

    if (command.slice(command_1.length) === name){
        return `We have one more ${name}`;
    }else if (command.includes(command_1)){
        name = command.slice(command_1.length);
        return `Nice to meet you ${name}`;    
    }

    if (name === null){
        return `We don't know you`;
    }else if(command.includes(command_2)){
        return `Your name is ${name}`;
    }
    
   if (command.includes(command_3)){
        toDoList[1] =  'fishing';
    }

    if (command.includes(command_3)){
        toDoList[1] =  'fishing';
        return `${toDoList[1]} added to your todo`;
    }

    if (command.includes(command_4)){
        toDoList[2] =  'singing in the shower';
        return `${toDoList[2]} added to your todo`;
    }

    if (command.includes(command_4)){
        toDoList[2] =  'singing in the shower';
        return `${toDoList[2]} added to your todo`;
    }

    if (command.includes(command_5)){
        delete toDoList[1];
        return `Removed fishing from your todo`;
    }

    if (command.includes(command_6)){
        return `you have ${(Object.values(toDoList).length)} todos - ${Object.values(toDoList)} in the shower`;
    }
    
    if (command.includes(command_7)){
        return `${new Date().toDateString()}`;
    }

    if (command.includes(command_8)){
        let a = (command.slice(command_8.length)).split(' ');
        if (a.includes('+')){
            const result = Number(a[0]) + Number(a[a.length - 1]);
            return result;
        }else if (a.includes('*')){
            const result = Number(a[0]) * Number(a[a.length - 1]);
            return result;
        }else if (a.includes('-')){
            const result = Number(a[0]) - Number(a[a.length - 1]);
            return result;
        }else if (a.includes('/')){
            const result = Number(a[0]) / Number(a[a.length - 1]);
            return result;
        }else{
            return 'Wrong command';
        }
    }

    if (command.includes(command_9)){
        startTimer();
    }else {
        return `Wrong command`;
    }
    
}

function startTimer() {
    const countdownTimer = setInterval(() => {
        console.log(timer);
        timer -= 1;
        if (timer <= 0) {
            clearTimeout(countdownTimer);
            console.log(`Timer done`);
        }
            
    }, 1000);
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); // " Fx you have 2 todos - fishing and singing in the shower"
console.log(getReply("What day is it today?")); // " E.g. if today is 30/8/2019 then it should respond with 30. of August 2019"
console.log(getReply("What is 3 + 3")); //  6
console.log(getReply("What is 4 * 12")); //  48
console.log(getReply("What is 5 - 3")); //  2
console.log(getReply("What is 24 % 12")); //  Wrong command
console.log(getReply("Set a timer for 15 seconds")); //  15
console.log(getReply("Sorry")); //  Wrong command