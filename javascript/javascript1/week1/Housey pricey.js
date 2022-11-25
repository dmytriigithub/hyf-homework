// A house price estimator

const highPeter = 10;
const widePeter = 8;
const deepPeter = 10;
const volumeInMetersPeter = highPeter * widePeter * deepPeter;
const gardenSizeInM2Peter = 100;

housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
console.log(`Peters house costs ${housePricePeter}.`);
if (housePricePeter < 2500000) {
    console.log('Peter is looser');
}
else {
    console.log('Peter is not looser');
}



const houseOfJulia = {
    high: 8,
    wide: 5,
    deep: 11,
    gardenSizeInM2: 70,
    price: 1000000  
};

const volumeInMeters =  houseOfJulia.high * houseOfJulia.wide * houseOfJulia.deep;
housePriceJulia = volumeInMeters * 2.5 * 1000 + houseOfJulia.gardenSizeInM2 * 300;
console.log(`Julias house costs ${housePriceJulia}.`);
if (housePriceJulia < houseOfJulia.price) {
    console.log('Julia is looser');
}
else {
    console.log('Julia is not looser');
}