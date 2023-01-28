const gifBox = document.querySelector('.gif'),
      searchOfGifs = document.querySelector('.search'),
      numberOfGifs = document.querySelector('.numbers'),
      btnSearch = document.querySelector('button');

let limit;

btnSearch.addEventListener('click', showGifs);

function showGifs(){
  document.querySelectorAll('img').forEach(e => e.remove());
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=actK3NsA6i2lmJWEIORKQLiYnsZd4hgB&limit=${limit}&q=${searchOfGifs.value}`)
  .then(response => response.json())
  .then(data => {

    data.data.forEach(element => {
      const gif = document.createElement('img');
      gif.src = element.images.downsized.url;
      gifBox.appendChild(gif);
    });

  })
  .catch(error => {
    console.log(error);
  });

}

numberOfGifs.oninput = function(e) {
  limit = numberOfGifs.value;
  showGifs();
};