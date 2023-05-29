// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);
var mem = {}
function readLine(line) {
    console.log(fib(parseInt(line, 10), mem));
    process.exit();
}

function fib(n, mem) {



    if (n <= 0) {
        return null;
    } else if (n === 1) {
        return BigInt(0);
    } else if (n === 2) {
        return BigInt(1);
    } else if (n in mem) {
        return mem[n];
    }
    var result = fibonacci(n - 1, mem) + fibonacci(n - 2, mem);
    mem[n] = result;


    return result;

}

module.exports = fib;
