
//using brute force 

function checkDuplicateBruteforce(arr) {
    var i;
    var j;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {

            if (i != j && arr[i] == arr[j]) {
                return true;
            }

        }

    }
    return false
}
// check if value duplicate already exists in objects and skip those number who are already in object
function checkDuplicateByObject(arr) {


    const store = {}

    for (var i = 0; i < arr.length; i++) {


        if (arr[i] in store == true) {
            continue;

        } else {

            for (var j = i + 1; j < arr.length; j++) {

                if (arr[i] == arr[j]) {
                    store[arr[i]] = arr[i];
                    return true;

                }
            }

        }


    }
    return false;


}
// convert array to object and compare length of object keys and array... return true if not same 
function checkDuplicateByTypeConversion(arr) {

    const obj = {}
    for (i = 0; i < arr.length; i++) {

        obj[arr[i]] = arr[i]
    }
    if (arr.length != Object.keys(obj).length) {
        return true;
    } else {
        return false;
    }

}

// use object to track duplicate
function checkDuplicateSingleLoop(arr) {

    var dup = {}
    for (var i = 0; i < arr.length; i++) {

        if (dup[arr[i]] == arr[i]) {

            return true;
        } else {
            dup[arr[i]] = arr[i]
        }



    }
    return false

}
const array = [0, 7, 0, 4, 5, 1, 9]
console.log("array", array)

console.log("brute force : ", checkDuplicateBruteforce(array))
console.log("using object to store previous data : ", checkDuplicateByObject(array))
console.log(" convert into object and compare length : ", checkDuplicateByTypeConversion(array))
console.log("fastest way using single loop : ", checkDuplicateSingleLoop(array))
