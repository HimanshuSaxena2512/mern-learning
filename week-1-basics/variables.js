// Variables

// 1. LET - reassignable variable (use this most of the time)

let name = "Alex";                  // String (text)
let age = 25;                       // Number (integer)
let isStudent = true;               // Boolean (true or false)
let skills = null;                  // Null (no value)
let city;                           // Undefined (no value assigned)

// 2. Const - non-reassignable variable (use this for constants/defaults)

const PI = 3.14;
const BIRTH_YEAR = 1998;

//3. Var - old way (avoid in modern JS)
// var oldstyle = "don't use"

// Reassigning Let (allowed)
name ="Alex Chen";
age =26;

// Reassigning Const (Error - Uncomment to see)
// PI = 3.14159; // Type Error: Assignment to constant variable.


// console.log() - print to console and use for debugging, also it's case sensitive.

console.log("=== Variables ===");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Skills:", skills);
console.log("City:", city);
console.log("PI:", PI);
console.log("Birth Year:", BIRTH_YEAR);