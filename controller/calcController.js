
const Calculator = require('../libraries/calcLibrary');

const Logger = require('../libraries/log');

let myLog = new Logger()
let myCalc = new Calculator(myLog);


const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    }
 


const takeNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.take(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}
 

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.divide(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}
 


const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.multiply(number1, number2)
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}


module.exports = {
multiplyNumbers, divideNumbers,  takeNumbers, addNumbers
}

// console.log(myCalc);