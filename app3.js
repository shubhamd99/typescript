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
// Objects inside the Classes
console.log('------CLASSES------');
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 'maxi');
console.log(person);
person.printAge();
person.setType('shubham');
// Inheritence
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = 'max';
    function Max(username) {
        var _this = _super.call(this, 'maxxx', username) || this;
        _this.age = 31; // Inheritence Wrap
        return _this;
        // but private class can't be accessed here only in parent
    }
    return Max;
}(Person));
var max = new Max('Anna');
console.log(max); // it shows max rather than Anna, because it override it.
// Getters and Setters
console.log('-----Getters and Setters------');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this.species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'green plant';
console.log(plant.species);
//Static properties
console.log('-----Static properties-----');
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calPref = function (daimeter) {
        return this.PI * daimeter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calPref(10));
// Abstract Classes - you have to inherit always
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'dark';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Projects');
console.log(newProject);
// Private constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the one and only');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne(' teh one one');
var right = OnlyOne.getInstance();
console.log(right.name);
