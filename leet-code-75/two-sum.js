
function twoSum(array, target) {


    var lookup = {};
    var result = [];
    var i;

    for (i = 0; i < array.length; i++) {


        if (array[i] + lookup[target - array[i]] == target) {

            result.push([array[i], lookup[target - array[i]]])
        }

        else {

            lookup[array[i]] = array[i]

        }
    }
    return result;
}


const array = [1, 5, 8, 2, 4, 7, 3];

console.log(twoSum(array, 5))