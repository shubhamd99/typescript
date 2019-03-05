let myName3: string = 'shubham';
let myAge3: number = 28;

function controlMe(isTrue: boolean){
    let result: number;
    if (isTrue){
        result = 12;
    }
    result = 33;
    return result
}

console.log(controlMe(false));  // 33

// Block scope
let variable = 10;
function reset(){
   let variable = null;
   console.log(variable) // null
}
reset();
console.log(variable) // 10


// Arrow Functions
console.log('ARROW FUNCTION')

const addNumber = ( value1: number, value2: number ) => value1 + value2;  // one line arrow function
console.log(addNumber(5,10));

const addMultiply = ( value1: number, value2: number ) => {
    return value1 * value2
  }  
console.log(addMultiply(5,10));

// one arguments  // no arguments - const hellooo = () => {}
const hellooo = str => console.log(str);
hellooo('sss')

// Default PARAMETER

const countdown = (start: number = 10): void =>{
    console.log(start) // 10
while(start > 0) {
    start--;
}
console.log(start);
};
countdown(); // 0 rather than undefined because we set the parameter to 10


// Rest and Spread
const array5 = [55,66,90,100,22];
console.log(Math.max(...array5)); // spread operator

function makearray(...args: number[]){
    return args;
}

console.log(makearray(1,2,3,6));

function makearray2(x, y, ...z){
    console.log(x,' ',y); // hey hello

    console.log(z); // array
    console.log(z[0]); // whatsup
    console.log(z.length); // 2
}

makearray2('hey','hello','whatsup','im fine too');


function printInfo(...info: [string, number]) {
    console.log(`My name is ${info[0]} and I am ${info[1]} years old!`);  // template literals
}

printInfo('shubham', 22);


// Destructuring Arrays
const hobbies5 = ['sports','badminton','jogging'];
const [x,y,z] = hobbies5
console.log(x,y,z);

// Destructuring Objects

const obj50 = {name1:'shubham dhage', age1: 10};
const {name1 : a, age1 : b} = obj50;
console.log(a,b)
