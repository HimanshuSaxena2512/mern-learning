// Loops useful for repeating a block of code multiple times

console.log("====For Loop====");
// Basic For Loop
for (let i=0;i<5;i++)
{
    console.log("i = ",i);
}

// loops through an array
let colors = ["red","green","blue"];
for (let i=0;i< colors.length;i++)
{
    console.log(`${i}: ${colors[i]}`)
}

console.log("\n====For...of (Easier for arrays)====");
for(let color of colors)
    {
        console.log(color);
    }

console.log("\n====For...in (for objects)====");
let person = {name:"Alex",age:25,city:"Gwalior"};
for (let key in person)
{
    console.log(`${key}: ${person[key]}`);
}

console.log("\n====While Loop====");
let count = 0;
while (count < 5)
{
    console.log("Count: ",count);
    count++;
}

// Practical: Guessing Game Logic
console.log("\n==== Guess Game ====");
let secret = 7;
let guess = 0;
let attempts = 0;

while (guess !== secret && attempts <3)
{
    // In real code, you'd get input from user
    guess = Math.floor(Math.random() * 10) + 1;     // Simulate Guess
    attempts++
    console.log(`Attempt ${attempts}: Gussed ${guess}`);
}
console.log(guess === secret ? "🎉 Correct!" : "😢 Out of attempts");

console.log("\n=== Do-While (runs at least once) ===");

let input = "";
do
{
    // In real code input =  prompt("Enter 'quit' to exit");
    input = "quit";                 //Simulate
    console.log("You Entered:",input);
}
while (input !== "quit");

console.log("\n=== Break & Continue ===");
// Break - exit loop entirely
for (let i= 0; i < 10; i++)
{
    if (i===5)
        break;
    console.log("Break Test:",i);
}

// Continue - skip to next Iteration
for (let i = 0; i < 5; i++)
{
    if (i === 2)
        continue;
    console.log("\nContinue Test:",i);
}

// Nested Loops With Labels
outer: for (let i = 0; i < 3; i++)
{
    for (let j=0; j<3; j++)
    {
        if (i===1 && j===1)
            break outer;
        console.log(`\ni=${i},j=${j}`);
    }
}

