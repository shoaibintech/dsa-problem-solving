// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// JavaScript Best Practices
// Avoid Global Variables
// Minimize the use of global variables.

// This includes all data types, objects, and functions.

// Global variables and functions can be overwritten by other scripts.

// Use local variables instead, and learn how to use closures.



// JavaScript for...in Loop
// The JavaScript for...in statement loops through the properties of an object.

// Syntax
// for (let variable in object) {
//   // code to be executed
// }


// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()


// Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters:

// A Counter Example
// // Define object
// const obj = {counter : 0};

// // Define setters and getters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });


// Adding a Property to a Constructor
// You cannot add a new property to an object constructor the same way you add a new property to an existing object:

// Example
// Person.nationality = "English";

// Adding Properties and Methods to Objects
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.

// Sometimes you want to add new properties (or methods) to an object constructor.

// Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors:
// Example
// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";


// functions 
// The JavaScript call() Method
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.
//The call() method takes arguments separately.

//The apply() method takes arguments as an array.


// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// The example below creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

// Example
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);



// avaScript Closures
// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.



// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
//   add();
//   add();
//   add();

// deep copying vs. shallow copying.
//  A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
//  A shallow copy means that certain (sub-)values are still connected to the original variable.

// Primitive data types
// Primitive data types include the following:

// Number — e.g. 1
// String — e.g. 'Hello'
// Boolean — e.g. true
// undefined
// null
// When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once. That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy. Let’s see an example:

// const a = 5
// let b = a // this is the copy
// b = 6
// console.log(b) // 6
// console.log(a) // 5


// Composite data types — Objects and Arrays
// Technically, arrays are also objects, so they behave in the same way. I will go through both of them in detail later.

// Here it gets more interesting. These values are actually stored just once when instantiated, 
// and assigning a variable just creates a pointer (reference) to that value.

// Now, if we make a copy b = a , and change some nested value in b, 
// it actually changes a’s nested value as well, since a and b actually point to the same thing. Example:

// const a = {
//   en: 'Hello',
//   de: 'Hallo',
//   es: 'Hola',
//   pt: 'Olà'
// }
// let b = a
// b.pt = 'Oi'
// console.log(b.pt) // Oi
// console.log(a.pt) // Oi

// In the example above, we actually made a shallow copy.
//  This is often times problematic, since we expect the old variable to have the original values, not the changed ones. 
//  When we access it, we sometimes get an error. It might happen that you try to debug it for a while before you find the error,
//  since a lot of developers do not really grasp the concept and do not expect that to be the error.

// how to make deep copy of object
// Spread operator
// Introduced with ES2015, this operator is just great, because it is so short and simple.
//  It ‘spreads’ out all of the values into a new object. You can use it as follows:

// const a = {
//   en: 'Bye',
//   de: 'Tschüss'
// }
// let b = {...a}
// b.de = 'Ciao'
// console.log(b.de) // Ciao
// console.log(a.de) // Tschüss
// You can also use it to merge two objects together, for example const c = {...a, ...b} .

// Making deep copies without thinking
// What if you don’t know how deep the nested structures are?
//  It can be very tedious to manually go through big objects and copy every nested object by hand. 
//  There is a way to copy everything without thinking. You simply stringify your object and parse it right after:

// const a = {
//   foods: {
//     dinner: 'Pasta'
//   }
// }
// let b = JSON.parse(JSON.stringify(a))
// b.foods.dinner = 'Soup'
// console.log(b.foods.dinner) // Soup
// console.log(a.foods.dinner) // Pasta



// "I will finish later!"

// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()



// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code

// JavaScript Promise Object
// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// Promise Syntax
// let myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );


// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object






// JavaScript Async
// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// Async Syntax
// The keyword async before a function makes the function return a promise:

// Example
// async function myFunction() {
//   return "Hello";
// }
// Is the same as:

// function myFunction() {
//   return Promise.resolve("Hello");
// }


