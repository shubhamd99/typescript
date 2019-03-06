// Decorator is just a function
function logged(constructerFn: Function){
    console.log(constructerFn);
}

@logged
class Person {
    constructor(){
        console.log('Hi');
    }
}

// Factory
function logging(value: boolean){
    return value ? logged : null;
}

@logging(true) // executing logging function // if false then car not shown
class Car {

}

//Advanced
function printable(constructorFn: Function){ // parent class
    constructorFn.prototype.print = function(){ // print method allows the object to print itself
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = 'green plant';
}

const plant = new Plant();
(<any>plant).print(); // we have to add <any> so it knows that print function exists


// Method Decorators
// Property Decorator - can be added to property

function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

function overwritable(value: boolean){
    return function(target: any, propName: string): any{
        const newDescriptor: PropertyDescriptor = {
            writable: value;
        };
        return newDescriptor;
    }
}

class Project{

    @overwritable(false)  // false - we see empty object, no value can set to property.
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false) // false -  not editable, its shows 1000 not 2000
    calcBudget(){
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();

project.calcBudget = function(){
    console.log(2000);
}
project.calcBudget();
console.log(project);


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number){
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string){  // constructor is a special type of method
        this.name = name;
    }

    printStudentsNumber(mode: string, @printInfo printAll: boolean){
        if(printAll){
            console.log(10000);
        } else {
            console.log(1000);
        }
    }
}

const course = new Course('Super Course');
course.printStudentsNumber('anything', true);
course.printStudentsNumber('anything', false);