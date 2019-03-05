// Better Generic
function betterGeneric(data) {
    return data;
}
console.log(betterGeneric('Max').length);
console.log(betterGeneric(27)); // length not work , because it is generic. and number also dont have length
console.log(betterGeneric({ name: 'Max', age: 27 }));
// Built in generics
var testResults = [1.99, 2.99, 30];
testResults.push(-2.99);
// testResults.push('monday'); gives error
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['shubham', 21, true, 'jack']);
printAll(['shubham', 'jack']);
// Generic Types
function betterEcho(data) {
    return data;
}
var echo = betterEcho; // anything between : and = is type assignment
console.log(echo('something'));
// Generic Class and more than generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multipleValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multipleValue = '20';
console.log(simpleMath.calculate());
// Excercise
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 10);
numberMap.setItem('banana', 20);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('apples', '10');
stringMap.setItem('banana', '20');
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
