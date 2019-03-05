
//Any String
let skills: any[] = ["string", "string"] // Any String
console.log(skills)


// Tupples
let hobbies: [string, number] // First string then number

hobbies = ["football",100]
console.log(hobbies.length);

//Enum
enum Color {
    Gray,
    Green = 100,
    Red
}

let myColor: Color = Color.Green;
console.log(myColor);


// Any
let car: any = "carname";
car = {name:'bmw', model:'x5'}
console.log(car);


// Function
let Name = "max";
let Age = 23;

function myName(): string {
    return Name; 
}

console.log(myName())

function hello(): void {  // Empty
    console.log('Hello World')
}

hello()

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(5, 100))  // NaN


let myName2;
myName2 = hello;  // functions as type
myName2()


// let multiply2: (a: number, b:number ) => number
// multiply2 = hello
// console.log(multiply2());  Error


// Object

let obj1 = {
    name: 'shubham',   //String
    age: 55  // Number
}
console.log(obj1);

// obj1 = {} gives error  because name: string and age: number

let obj2: {} = {
    name: 'shubham',   //String
    age: 55  // Number
}
obj2 = {}
console.log(obj2);  // No Error now

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

let myRealAgeReal: number | string = 27;
myRealAgeReal = '27' // also in string
console.log(myRealAgeReal)

// check types

let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number")
}

// never
// never returning anything

function neverReturns():never {
    throw new Error('An error');
}


// Nulable
let canBeNull = 12;
// canBeNull = null; // gives error

let canBeNull1: number | null = 12;
canBeNull1 = null; // gives error


let canAlsoBeNull;
canAlsoBeNull = null; // not gives error, because it is my default

