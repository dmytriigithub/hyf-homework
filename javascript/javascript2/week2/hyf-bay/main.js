console.log("Script loaded");

const listItem = getAvailableProducts();
console.log(listItem);

const list = document.querySelector('ul'),
      searchInput = document.querySelector('.inputProduct'),
      priceInput = document.querySelector('.inputPrice');

function renderProducts(products) {
    // your code here
    
    products.forEach(element => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<h2>${element.name}</h2>
        <p>Price: <span>${element.price}</span></p>
        <p>Rating: <span>${element.rating}</span></p>`;
        list.appendChild(listElement);
    });
}

renderProducts(listItem); // This should create the ul and the li's with the individual products details



//--------------------------------------------------------Searching for products
const listItems = document.querySelectorAll('li');

searchInput.oninput = function() {
    let value = searchInput.value.toLowerCase().trim();

    if (value) {
        
        listItems.forEach(item => {

            if (item.firstChild.innerText.toLowerCase().search(value) == -1) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        });    
    } else {
        listItems.forEach(item => {
            item.classList.remove('hide');
        });
    }
};



//------------------------------------------------------Filter products based on max price
priceInput.oninput = function() {
    let value = priceInput.value.trim();

    if (value) {
        listItems.forEach(item => {
            if ((+(item.children[1].lastChild.innerHTML)) > (+value)) {
                item.classList.add('hide');
            }else {
                item.classList.remove('hide');
            }
        });    
    } else {
        listItems.forEach(item => {
            item.classList.remove('hide');
        });
    }
};

