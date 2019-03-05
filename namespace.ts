// Namesapce

namespace myMath {
    const PI = 3.14;

    export function calculate(diameter: number){
        return diameter * PI;
    }

    export function calculateRect(width: number, length: number){
        return width * length;
    }
}


console.log(myMath.calculate(10));
console.log(myMath.calculateRect(10,20))



