var myName3 = 'shubham';
var myAge3 = 28;
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
console.log(controlMe(false)); // 33
// Block scope
var variable = 10;
function reset() {
    var variable = null;
    console.log(variable); // null
}
reset();
console.log(variable); // 10
// Arrow Functions
console.log('ARROW FUNCTION');
var addNumber = function (value1, value2) { return value1 + value2; }; // one line arrow function
console.log(addNumber(5, 10));
var addMultiply = function (value1, value2) {
    return value1 * value2;
};
console.log(addMultiply(5, 10));
// one arguments  // no arguments - const hellooo = () => {}
var hellooo = function (str) { return console.log(str); };
hellooo('sss');
// Default PARAMETER
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start); // 10
    while (start > 0) {
        start--;
    }
    console.log(start);
};
countdown(); // 0 rather than undefined because we set the parameter to 10
// Rest and Spread
var array5 = [55, 66, 90, 100, 22];
console.log(Math.max.apply(Math, array5)); // spread operator
function makearray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makearray(1, 2, 3, 6));
function makearray2(x, y) {
    var z = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        z[_i - 2] = arguments[_i];
    }
    console.log(x, ' ', y); // hey hello
    console.log(z); // array
    console.log(z[0]); // whatsup
    console.log(z.length); // 2
}
makearray2('hey', 'hello', 'whatsup', 'im fine too');
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("My name is " + info[0] + " and I am " + info[1] + " years old!");
}
printInfo('shubham', 22);
// Destructuring Arrays
var hobbies5 = ['sports', 'badminton', 'jogging'];
var x = hobbies5[0], y = hobbies5[1], z = hobbies5[2];
console.log(x, y, z);
// Destructuring Objects
var obj50 = { name1: 'shubham dhage', age1: 10 };
var a = obj50.name1, b = obj50.age1;
console.log(a, b);
