

function hoist(name) {

    if (name) {

        let num;
        console.log("num:", num) // undefined 
        console.log("type:", type); // refernce error : type is not defined 
        console.log("obj", obj); // undefined


        let type;
        var obj = "car";

    }

    console.log(obj)
    console.log(type)

}

hoist("ali");