
// All these conditions have to be fullfill
// when the ts converts into js , the whole interfaces got vanished in javascript file. Developer type
// it tells you what to expect and what to not expect

interface namedPerson {
    firstName: string;
    age?: number; // optional argument
    [propName: string]: any; // its not a array, its just notation when we dont know the type and value. Dynamic Properties
    greet(lastName: string): void;
}

function greet(person: namedPerson) {
    console.log('Hello, ' + person.firstName);
}

function changeName(person: namedPerson) {
    person.firstName = 'anna';
}

const person = {
    firstName: 'Max',
    age: 27,
    hobbies: ['cooking', 'sports'],
    greet(person: namedPerson) {
        console.log('Hi, i am ' + this.firstName + ' ' + lastName);
    }
};

changeName(person);
greet(person);
person.greet('Anything');  // Hi, i am anna anything


// Class

class Person implements namedPerson {
    firstName: string;
    greet(lastName: string): {
        console.log('Hi, i am ' + this.firstName + ' ' + lastName);
    }
}

const myPerson = new Person();
myPerson.firstname = 'Shubham';
greet(myPerson);
myPerson.greet();

// greet({firstName: 'Max', age: 27}) - we cannot assign directly , it checks strictly



// FunctionTypes

interface DoubleValuFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValuFunc;
myDoubleFunc = function(value1: number, value2: number){
    return (value1 + value2) * 2;
};

console.log(myDoubleFunc(10, 20));


// Interface Inheritance

interface AgedPerson extends namedPerson {
    age: number; // now age is required not optional
}

const oldPerson = new AgedPerson = {
    age: 27,
    firstName: 'royal',
    greet(lastName: string) {
        console.log('Hello');
    }
};