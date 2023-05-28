function fibonacci(n, mem) {



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

// Print the first 10 Fibonacci numbers
var i = 0;
var mem = {}
//console.log(arr)
console.log("number : ", fibonacci(1000000, mem));



