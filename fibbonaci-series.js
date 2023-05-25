function fibonacci(n, mem) {



    if (n <= 0) {
        return null;
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else if (n in mem) {

        return mem[n]
    }
    var result = fibonacci(n - 1, mem) + fibonacci(n - 2, mem);
    mem[n] = result;
    console.log("mem", mem)

    return result;

}

// Print the first 10 Fibonacci numbers
var i = 0;
var mem = {}
//console.log(arr)
console.log("number : ", fibonacci(5, mem));



