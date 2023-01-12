console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    // your code here
    const list = document.querySelector('ul');
    products.forEach(element => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<h2>${element.name}</h2>
        <span>price: ${element.price}</span><br /><span>Rating: ${element.rating}</span>`  ;
        list.appendChild(listElement);
    });
}

renderProducts(products); // This should create the ul and the li's with the individual products details