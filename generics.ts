// Better Generic

function betterGeneric<T>(data: T){ // Types, we can add any Capital letter
    return data;
}

console.log(betterGeneric('Max').length);
console.log(betterGeneric(27));  // length not work , because it is generic. and number also dont have length
console.log(betterGeneric({name: 'Max', age: 27}));


// Built in generics

const testResults: Array<number> = [1.99,2.99,30];
testResults.push(-2.99);
// testResults.push('monday'); gives error
console.log(testResults);

// Arrays
function printAll<T>(args: T[]){
    args.forEach( (element) => console.log(element) );
}
printAll(['shubham',21,true,'jack']);
printAll<string>(['shubham','jack']);


// Generic Types
function betterEcho<T>(data:T){
    return data;
}

const echo: <T>(data: T) => T = betterEcho;  // anything between : and = is type assignment

console.log(echo<string>('something'));


// Generic Class and more than generic class
class SimpleMath<T extends number, U extends string> {
    baseValue: T;
    multipleValue: T;
    calculate(): number {
        return +this.baseValue * +this.multipleValue;
    }
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue=10;
simpleMath.multipleValue='20';
console.log(simpleMath.calculate());

// Excercise

class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T){
        this.map[key]= item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear(){
        this.map = {}
    }
    printMap(){
        for (let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('banana', 20);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('apples', '10');
stringMap.setItem('banana', '20');
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();

