const Logger = require('./log');

class Calculator {
    constructor() {
    this.id = Math.floor(Math.random() * Math.floor(10000));
    this.logger = new Logger;
    }

    add(num1, num2) {
    const value = num1 + num2
    this.logger.log(`Calculator:${this.id}`, value);
    return value;
    }

    take(num1, num2) {
        const value = num1 - num2
        this.logger.log(`Calculator:${this.id}`, value);
        return value;
    }

    divide(num1, num2) {
        const value = num1 / num2
        this.logger.log(`Calculator:${this.id}`, value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.logger.log(`Calculator:${this.id}`, value);
        return value;

    }}
    
    module.exports = Calculator