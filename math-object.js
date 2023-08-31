/*
    ! Match Object
    In JavaScript the math object provides a lots of methods to work with numbers. 

*/

const PI=Math.PI;
console.log(PI);

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3 rounding down
console.log(Math.ceil(PI)); // 4 rounding up
console.log(Math.min(-5,3,20,4,5,10)); // -5, returns the minimum value
console.log(Math.min(-5,3,20,4,5,10)); // 20, returns the max value

const randNum=Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// let us create random number betwen 0 to 10
const num=Math.floor(Math.random()*11); // creates random number between 0 and 10
console.log(num);

// Absolute value
console.log(Math.abs(-10)); // 10

// Square value
console.log(Math.sqrt(2)); // 1.41421356

// Power
console.log(Math.pow(3,2)); // 9

console.log(Math.E);     // 2.718

// Logarithm
// Returns the natural logarithm with base E of X, Math.log(x)
console.log(Math.log(2));   // 0.6931471805599453
console.log(Math.log(10));  // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)