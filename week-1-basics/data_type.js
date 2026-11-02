// 1. String - Text (use backticks for Template literals)

let FirstName = "Himanshu";
let LastName = "Saxena";
let FullName = `${FirstName} ${LastName}`; // Template literal (backticks)

// 2. Number -  Interger or Decimals

let score = 98;
let temperature = -5.2;
let infinity = Infinity;                // Infinity
let notANumber = NaN;                   // Not a Number

// 3. bigint - Very Large Integer (use 'n' at the end of the number)

let bigIntValue = 1234567890123456789012345678901234567890n;

// 4. Boolean - true or false

let isHappy = true;
let isSad = false;

// 5. Null - no value

let selectedItem = null;

// 6. Undefined - variable declared but not assigned a value

let unassignedVariable;

// 7. Symbol - unique and immutable value

let uniqueId = Symbol('id');

// 8. Object - collection of key-value pairs

let person = {
    name: "Himanshu",
    age: 25,
    isStudent: true
};

console.log("==== Data Types ====");
console.log("String:", FullName);                               // String
console.log("Number:", score);                                  // Number
console.log("BigInt:", bigIntValue);                            // BigInt
console.log("Boolean:", isHappy);                               // Boolean
console.log("Null:", selectedItem);                             // Object (but with a value of null)
console.log("Undefined:", unassignedVariable);                  // Undefined
console.log("Symbol:", uniqueId);                               // Symbol
console.log("Object:", person);                                 // Object


// Special: typeof null === "object" (known JS bug since 1995)

console.log("\nFun Fact: typeof null =", typeof null);          // "object" (this is a known JavaScript quirk)   