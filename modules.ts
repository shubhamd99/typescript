// Module loader in compulsary in module
// npm install systemjs --save
// replace with this in index.html <script></script>
// src="node_modules/systemjs/dist/system.js"

/*
inside the body tag place this:
<body>
<script>
  SystemJS.config({
      baseURL: '/',
      defaultJSExtensions: true
  });
  SystemJS.import('app.js');
</script>
*/

// App.ts
import { PI, calculateCircumference } from './math/circle';
import rectange from './math/rectange';

console.log(PI);
console.log(calculateCircumference(10);
console.log(rectange(80,20));


// math/circle.ts
export const PI = 3.14;

export function calculateCircumference(diameter: number){
    return diameter * PI;
}

// math/rectange.ts
export default function calculateRectangle(length: number, width: number){  
    return length * width;
    // use default when you have to export only one thing
}
