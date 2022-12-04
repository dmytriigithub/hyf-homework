function calculatorOfTaxPercentage(a) {
    const tax8 = 0.08,
          tax15 = 0.15,
          tax30 = 0.3,
          tax50 = 0.5;

    if (a > 0 & a < 50000) {
        return `Your income is ${a}kr and you have to pay 8% of tax percentage it is ${a * tax8}kr`;
    }else if (a >= 50000 & a < 100000) {
        return `Your income is ${a}kr and you have to pay 15% of tax percentage it is ${a * tax15}kr`;
    }else if (a >= 100000 & a < 300000) {
        return `Your income is ${a}kr and you have to pay 30% of tax percentage it is ${a * tax30}kr`;
    }else if (a >= 300000) {
        return `Your income is ${a}kr and you have to pay 50% of tax percentage it is ${a * tax50}kr`;
    } else {
        return `You should find a job`;
    }   
}

console.log(calculatorOfTaxPercentage(134567890));