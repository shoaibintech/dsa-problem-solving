

function fib(n, mem) {



    if (n <= 0) {
        return null;
    } else if (n === 1) {

        return 0;
    } else if (n === 2) {
        return 1;
    } else if (n in mem) {
        return mem[n];
    }
    var result = fib(n - 1, mem) + fib(n - 2, mem);

    mem[n] = result;


    return result;

}

var mem = {}
console.log("hellos enter number")
console.log(fib(7788, mem))



