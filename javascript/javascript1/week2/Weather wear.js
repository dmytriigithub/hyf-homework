function weatherWear(temperature) {
   

    if (temperature > -15 & temperature < 0) {
        return `The temperature is ${temperature} degrees celsius. You should wear a winter coat`;
    }else if (temperature >= 0 & temperature < 10) {
        return `The temperature is ${temperature} degrees celsius. You should wear a warm coat`;
    }else if (temperature >= 10 & temperature < 15) {
        return `The temperature is ${temperature} degrees celsius. Don't forget your raincoat`;
    }else if (temperature >= 15 & temperature < 20) {
        return `The temperature is ${temperature} degrees celsius. You should wear a sweater`;
    }else if (temperature >= 20 & temperature < 30) {
            return `The temperature is ${temperature} degrees celsius. You should wear shorts and a t-shirt`;
    } else {
        return `The temperature is ${temperature} degrees celsius. Better stay at home`;
    } 
}
const clothesToWear = weatherWear(-18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"