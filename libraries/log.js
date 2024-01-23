class Logger {
    constructor () {
    }
    log(calcId, result) {
        console.log(`[${calcId}]: LOGGED RESULT: ${result}`);
    }
}
module.exports = Logger;
