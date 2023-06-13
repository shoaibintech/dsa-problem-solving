function gcd(a, b) {




    if (b == 0) {
        return a;
    }

    var aprime = a % b;

    return gcd(b, aprime)



}

function lcm(a, b) {

    return (a * b) / gcd(a, b)



}


console.log("gcd", lcm(75, 15))