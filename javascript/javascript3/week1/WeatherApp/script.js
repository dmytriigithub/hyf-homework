const list = document.querySelector('ul'),
      btnOk = document.querySelector('.ok'),
      btnCurrentPosition = document.querySelector('.currentPosition');

let input = document.querySelector('input'),
    latitude,
    longitude;
    


btnOk.addEventListener('click', wether);
btnCurrentPosition.addEventListener('click', currentWeather);

getCurrentPosition();

function wether() {
  document.querySelectorAll('li').forEach(e => e.remove());
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=76c4b16687e0ac5de5dc1c832829b706&units=metric`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);

    function createWeatherElement(data) {
      const listElement = document.createElement('li');
      listElement.innerHTML = data;
      list.appendChild(listElement);
      listElement.style.listStyle = 'none';
    }

    createWeatherElement(`${new Date((data.dt) * 1000).toDateString()}`);
    createWeatherElement(`${data.name}`);
    createWeatherElement(`Temperature: ${data.main.temp.toFixed(0)} °C`);
    createWeatherElement(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`);
    createWeatherElement(`Wind speed: ${data.wind.speed.toFixed(0)} m/sec`);
    createWeatherElement(`Cloudy: ${data.clouds.all}%`);
    createWeatherElement(`Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleString()}`);
    createWeatherElement(`Sunset: ${new Date(data.sys.sunset * 1000).toLocaleString()}`);
    createWeatherElement(`<iframe src="https://maps.google.com/maps?q=${data.coord.lat},${data.coord.lon}&z=10&output=embed"></iframe>`);

  })
  .catch(error => {
    console.log(error);
  });
}


function currentWeather() {
  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=8&appid=76c4b16687e0ac5de5dc1c832829b706`)
  .then(response => response.json())
  .then((data) => {
    input.value = data[0].name;
    wether();
  })
  .catch(error => {
    console.log(error);
  });
}


function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
  latitude  = position.coords.latitude;
  longitude = position.coords.longitude;
  });
}