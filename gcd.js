function gcd(a, b) {


    if (b == 0) {
        return a;
    }

    var aprime = a % b;

    return gcd(b, aprime)



}


console.log("gcd", gcd(3918848, 1653264))