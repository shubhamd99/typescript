// Objects inside the Classes
console.log('------CLASSES------')

class Person {
    name: string; // public
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type:string){
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('Max', 'maxi');
console.log(person);
person.printAge();
person.setType('shubham');

// Inheritence

class Max extends Person {
    // name = 'max';
  constructor(username: string){
      super('maxxx', username);
      this.age = 31; // Inheritence Wrap
     // but private class can't be accessed here only in parent

  }
}

const max = new Max('Anna');
console.log(max); // it shows max rather than Anna, because it override it.



// Getters and Setters
console.log('-----Getters and Setters------')

class Plant {
    private _species: string = "Default";

    get species(){
        return this._species
    }

    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }else{
            this.species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species);

plant.species = 'green plant';
console.log(plant.species);


//Static properties
console.log('-----Static properties-----')

class Helpers{
    static PI: number = 3.14;
    static calPref(daimeter: number): number {
        return this.PI * daimeter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calPref(10));

// Abstract Classes - you have to inherit always
abstract class Project {
    projectName: string = 'dark';
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }

}

class ITProject extends Project {
    changeName(name:string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);

newProject.changeName('Super IT Projects');
console.log(newProject);

// Private constructor

class OnlyOne {
    private static instance: OnlyOne;
    public name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('the one and only');
        }
        return OnlyOne.instance;
    }
}

let wrong = new OnlyOne(' teh one one');
let right = OnlyOne.getInstance();
console.log(right.name);
