let time = 0,
    pressL = 0,
    pressS = 0;

const buttonStart = document.querySelector('.start'),
      buttonRestart = document.querySelector('.restart'),
      input = document.querySelector('input'),
      scoreS = document.querySelector('.scoreS'),
      scoreL = document.querySelector('.scoreL'),
      wrap = document.querySelector('.wrapper'),
      konfetti = document.querySelector('#my-canvas'),
      clock = document.createElement('div'),
      message = wrap.appendChild(clock);

clock.classList.add('timer');

function buttonsFoGame(e) {
    if (e.code === 'KeyS') {
        pressS += 1;    
    } else if (e.code === 'KeyL') {
        pressL += 1;    
    } else {
        alert('You pressed wrong button');
    }
    scoreS.innerHTML = pressS;
    scoreL.innerHTML = pressL;
}


function startGame(){
    buttonStart.addEventListener('click', () => {
        time = +input.value;
        if (input.value == '') {
            alert(`You don't set time of game`);
            return;
        } else if (!input.value.match(/[0-9]/)) {
            alert(`You have to input number`);
            return;
        }
        document.addEventListener('keyup', buttonsFoGame);
        startTimer();

        setTimeout(function(){
            document.removeEventListener('keyup', buttonsFoGame);
        }, time * 1000);
    });
}
 
startGame();

function restart(){
    buttonRestart.addEventListener('click', function() {
        pressL = 0;
        pressS = 0;
        scoreS.innerHTML = null;
        scoreL.innerHTML = null;
        input.value = null;
        message.innerHTML = null;
        konfetti.classList.remove('activePressS');
        konfetti.classList.remove('activePressL');
    });
}

restart();

function startTimer() {
    
    let timer = input.value;
    const countdownTimer = setInterval(() => {
        
        
        message.innerHTML = timer - 1;
        timer -= 1;
        if (timer <= 0) {
            clearTimeout(countdownTimer);
            if (pressL > pressS) {
                message.innerHTML = `Player "L" WIN`;
                konfetti.classList.add('activePressL');
            } else if (pressL < pressS){
                message.innerHTML =`Player "S" WIN`;
                konfetti.classList.add('activePressS');
            } else if (pressL === 0 && pressS === 0) {
                message.innerHTML = `Keys were  not pressed. Try again`;
            } else {
                message.innerHTML = `DRAW`;
            }
        }
            
    }, 1000);
}

function focus(){
        alert(`Too early`);
}

function falseStart() { 
    document.addEventListener('keydown', focus); 
  
    input.addEventListener('focus', function(){
        document.removeEventListener('keydown', focus);
    });
}

falseStart();

const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
