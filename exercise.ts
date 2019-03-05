console.log('--------EXERCISE-------'); 

type BankAccount = { money: number, deposite: (val: number) => void };

let bankAccount: BankAccount = {
    money: 15000,
    deposite(value: number): void {
        this.money += value;
    }
};

let shubham: {name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: 'shubham dhage',
    bankAccount: bankAccount,
    hobbies: ['sports', 'music']
};

shubham.bankAccount.deposite(1000);

console.log(shubham.bankAccount);

// -Exercise 2- //
const double = value => value * 2;
console.log(double(10));

const greet = (name:string = 'max') => {
   console.log(`hello ${name}`)
}
greet();
greet('shubham')

// spread
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));// -3

// spread
const newArray = [55, 20];  // 55,20,-3,33,38,5
newArray.push(...numbers);
console.log(newArray);

//destructuring
const testResult = [26.60, 4.3, 55.05]
const [a, b, c] = testResult;
console.log(a,b,c);

// objects dest.
const scientist = {firstname: 'will', secondname: 'smith'};
const {firstname, secondname} = scientist;
console.log(firstname, secondname);


// TypeScript classes

class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    honk(){
        console.log('Tooooot');
    }

    accelerate(speed: number){
        this.acceleration += speed;
    }
}

const car = new Car('Audi');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// TypeScript classes
class BaseObject {
    width = 0;
    height = 0;
}

class Rectangle extends BaseObject {
    calcSize(){
        return this.width * this.height;
    }
}

const rectange = new Rectangle();
rectange.width = 10;
rectange.height = 20;
console.log(rectange.calcSize());


// TypeScript classes
class Person {
    private _firstname: string = "";

    get firstname() {
        return this._firstname;  // it looks like method but its a property
    }

    set firstname(value: string){
        if (value > this._firstname){
            this._firstname = value;
        } else {
            this._firstname = "";
        }
    }
}

const person = new Person();
console.log(person.firstname);
person.firstname = ('mb');
console.log(person.firstname);
person.firstname = ('maximil');
console.log(person.firstname);

console.log('--------EXERCISE-------'); 




