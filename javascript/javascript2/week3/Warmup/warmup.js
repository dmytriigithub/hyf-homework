//----------------------------------------------------------1

// setTimeout(function() {
//     alert(`Called after 2.5 seconds`);
// }, 2500);

//----------------------------------------------------------2

function lateLogOut(delay, stringToLog) {
    setTimeout(function() {
        console.log(` String "${stringToLog}" logged after ${delay} seconds`);
    }, delay * 1000);
}

// lateLogOut(5, 'World');
// lateLogOut(3, 'Hello');

//----------------------------------------------------------3

const btnClickMe = document.querySelector('.string');

btnClickMe.addEventListener('click', () => {
    setTimeout(function() {
        console.log(`Called after 5 seconds`);
    }, 5000);
});

//----------------------------------------------------------4

function earthLogger() {
    console.log('Earth');
}

function saturnLogger() {
    console.log('Saturn');
}

function planetLogFunction(func) {
    func();
}

// planetLogFunction(earthLogger);
// planetLogFunction(saturnLogger);

//----------------------------------------------------------5

function getMyGeo() {
    const btnGeo = document.querySelector('.location'),
          text = document.createElement('p'),
          body = document.querySelector('body');

    btnGeo.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude  = position.coords.latitude,
                  longitude = position.coords.longitude;

                  body.appendChild(text).innerHTML = `This is the latitude - ${latitude}<br/>This is the longitude - ${longitude}`;

        });
    });
}

getMyGeo();

//----------------------------------------------------------7

function runAfterDelay(delay, callback) {
    setTimeout(function() {callback();}, delay * 1000);
}

runAfterDelay(2, function() {
    console.log(`should be logged after 2 second`);
});

//----------------------------------------------------------8
function doubleClick() {
    const body = document.querySelector('body'); 
    document.body.style.height = '100vh';

    body.addEventListener('dblclick', () => {
        alert('double click');
    });
}

doubleClick();

//----------------------------------------------------------9

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke = function () {
        console.log('Funny joke');
    };

    logBadJoke = function () {
        console.log('Bad joke');
    };
    
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    }else {
        logBadJoke() ;
    }

    
}

jokeCreator(true);
jokeCreator(false);
