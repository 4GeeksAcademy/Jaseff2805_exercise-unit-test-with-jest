const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


// Conversation Ratios Exercise
let oneEurols = {
    "JPY": 156.5, //Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Poun
}

const fromDollarToYen = (dollar) => {
    const resultado = (dollar / oneEurols.USD) * oneEurols.JPY
    return Math.round(resultado * 100) / 100
}
console.log(fromDollarToYen(25))

const fromEuroToDollar = (euro) => {
    const resultado = euro * oneEurols.USD
    return Math.round(resultado * 100) / 100
}
console.log(fromEuroToDollar(25))

const fromYenToPound = (yen) => {
    const resultado = (yen / oneEurols.JPY) * oneEurols.GBP  
    return Math.round(resultado * 100) / 100
}
console.log(fromYenToPound(8000))

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};


