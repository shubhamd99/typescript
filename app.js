"use strict";
//Any String
var skills = ["string", "string"]; // Any String
console.log(skills);
// Tupples
var hobbies; // First string then number
hobbies = ["football", 100];
console.log(hobbies.length);
//Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// Any
var car = "carname";
car = { name: 'bmw', model: 'x5' };
console.log(car);
// Function
var Name = "max";
var Age = 23;
function myName() {
    return Name;
}
console.log(myName());
function hello() {
    console.log('Hello World');
}
hello();
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 100)); // NaN
var myName2;
myName2 = hello; // functions as type
myName2();
// let multiply2: (a: number, b:number ) => number
// multiply2 = hello
// console.log(multiply2());  Error
// Object
var obj1 = {
    name: 'shubham',
    age: 55 // Number
};
console.log(obj1);
// obj1 = {} gives error  because name: string and age: number
var obj2 = {
    name: 'shubham',
    age: 55 // Number
};
obj2 = {};
console.log(obj2); // No Error now
/*
obj1 = {
    a: "shubham1",
    b: 60
}
 Also give the error because the 'name' should not be 'a' unlike functions */
/*

let complex: { data: number, output: (all: boolean) => number[] } = {
   // complex is object which has two properties
   // data => array of numbers
   // output => boolean
   data: [30,5.90,60],

   output: function (all:boolean) : number[] {
       return this.data;
   }
}

complex = {}; gives error

*/
/* // Reusable //

type Complex = { data: number, output: (all: boolean) => number[] }
let complex: Complex = {
    .........
}
*/
// Union types
var myRealAgeReal = 27;
myRealAgeReal = '27'; // also in string
console.log(myRealAgeReal);
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never
// never returning anything
function neverReturns() {
    throw new Error('An error');
}
// Nulable
var canBeNull = 12;
// canBeNull = null; // gives error
var canBeNull1 = 12;
canBeNull1 = null; // gives error
var canAlsoBeNull;
canAlsoBeNull = null; // not gives error, because it is my default
//# sourceMappingURL=app.js.map