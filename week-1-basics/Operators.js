// Arithmetic Operators

let a = 10;
let b = 3;
console.log("\n==== Arithmetic Operators ====");
console.log("Addition: a + b =",a+b);                       // 13
console.log("Subtraction: a - b =",a-b);                    // 7
console.log("Multiplication: a * b =",a*b);                 // 30
console.log("Division: a / b =",a/b);                       // 3.3333333333333335
console.log("Modulus: a % b =",a%b);                        // 1 (remainder of division)
console.log("Exponentiation: a ** b =",a**b);               // 1000 (10 raised to the power of 3)

// Increment and Decrement Operators

let count =5;
console.log("\n==== Increment and Decrement Operators ====");
console.log("count++ =",count++);                           // 5 (returns the value before incrementing)
console.log("++count =",++count);                           // 7 (increments first, then returns the value)

// Assignment Operators

let x= 10;
x += 5;                        // x=x+5-> 15
x -= 3;                        // x=x-3-> 12
x *= 2;                        // x=x*2-> 24
x /= 4;                        // x=x/4-> 6
console.log("\n==== Assignment Operators ====");
console.log("Final X:",x);

// Comparison Operators (returns boolean values)
console.log("\n==== Comparison Operators ====");
console.log("5 == 5:",5 == '5');                    // true (loose equality - Avoid and type coercion)
console.log("5 === 5:",5 === '5');                  // false (strict equality -use this and No type coercion)
console.log("5 != 5:",5 != '5');                    // false (loose inequality)
console.log("5 !== 5:",5 !== '5');                  // true (strict inequality)
console.log("5 > 3:",5 > 3);                        // true
console.log("5 >= 5:",5 >= 5);                      // true
console.log("3 < 2:",3 < 2);                        // false
console.log("3 <= 3:",3 <= 3);                      // true

// Logical Operators
console.log("\n==== Logical Operators ====");
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID:",isAdult && hasID);  // false (AND)
console.log("isAdult || hasID:",isAdult || hasID);  // true (OR)
console.log("!isAdult:",!isAdult);                  // false (NOT)

// Short-circuit evaluation
console.log("\n==== Short-circuit Evaluation ====");
console.log("true || console.log('run')");       // true (stops,doesn't run log)
console.log("false && console.log('run')");      // false (stops,doesn't run log)

// Ternary Operator (Conditional Operator)
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log("\nTernary:",status);               // adult

