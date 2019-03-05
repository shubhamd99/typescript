var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('--------EXERCISE-------');
var bankAccount = {
    money: 15000,
    deposite: function (value) {
        this.money += value;
    }
};
var shubham = {
    name: 'shubham dhage',
    bankAccount: bankAccount,
    hobbies: ['sports', 'music']
};
shubham.bankAccount.deposite(1000);
console.log(shubham.bankAccount);
// -Exercise 2- //
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = 'max'; }
    console.log("hello " + name);
};
greet();
greet('shubham');
// spread
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers)); // -3
// spread
var newArray = [55, 20]; // 55,20,-3,33,38,5
newArray.push.apply(// 55,20,-3,33,38,5
newArray, numbers);
console.log(newArray);
//destructuring
var testResult = [26.60, 4.3, 55.05];
var a = testResult[0], b = testResult[1], c = testResult[2];
console.log(a, b, c);
// objects dest.
var scientist = { firstname: 'will', secondname: 'smith' };
var firstname = scientist.firstname, secondname = scientist.secondname;
console.log(firstname, secondname);
// TypeScript classes
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Tooooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('Audi');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// TypeScript classes
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.height = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(BaseObject));
var rectange = new Rectangle();
rectange.width = 10;
rectange.height = 20;
console.log(rectange.calcSize());
// TypeScript classes
var Person = /** @class */ (function () {
    function Person() {
        this._firstname = "";
    }
    Object.defineProperty(Person.prototype, "firstname", {
        get: function () {
            return this._firstname; // it looks like method but its a property
        },
        set: function (value) {
            if (value > this._firstname) {
                this._firstname = value;
            }
            else {
                this._firstname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstname);
person.firstname = ('mb');
console.log(person.firstname);
person.firstname = ('maximil');
console.log(person.firstname);
console.log('--------EXERCISE-------');
