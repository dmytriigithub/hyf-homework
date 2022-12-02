let boughtCandyPrices = [];
let candyTablePrices = {
    'sweet' : 0.5,
    'chocolate' : 0.7,
    'toffee' : 1.1,
    'chewing-gum' : 0.03
};

function addCandy(candyType, weight) {
    if (candyTablePrices.hasOwnProperty(candyType)) {
        boughtCandyPrices.push(candyTablePrices[candyType] * weight);
        return boughtCandyPrices;
    }
    return `Try igen`;
}

console.log(addCandy("sweet", 20)); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
console.log(addCandy("toffee", 10));
console.log(addCandy("chocolate", 30));
console.log(addCandy("choco", 30));
console.log(addCandy("", 30));
console.log(boughtCandyPrices);




let amountToSpend = Math.random() * 100;

function canBuyMoreCandy(){
    let sum = 0;
    for (i = 0; i < boughtCandyPrices.length; i++){
        sum = sum += boughtCandyPrices[i];
    }
    console.log(`You have spent ${sum}, your money ${amountToSpend}`);
    if (sum >= amountToSpend){
        return `Enough candy for you!`;
    }
    return `You can buy more, so please do!`;
}

console.log(canBuyMoreCandy());