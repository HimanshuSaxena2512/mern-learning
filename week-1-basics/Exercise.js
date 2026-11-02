// TODO 1: Declare variables for your info
// const myName = ?
// const myAge = ?
// const isLearning = ?

const my_name = "Himanshu Saxena";
const my_age = 28;
const isLearning =  true;

// TODO 2: Calculate your birth year
// const currentYear = 2026;
// const birthYear = ?

const currentYear = 2026;
const birthyear = currentYear - my_age;

// TODO 3: Check if you can vote (age >= 18)
// const canVote = ?

const canVote = my_age >= 18;

// TODO 4: Use template literal to create intro
// const intro = `...`

const intro =`Hi, My Name is ${my_name}. I am ${my_age} years old.;`

// TODO 5: Log everything
//console.log("=== MY INFO ===");
// console.log(intro);
// console.log("Birth year:", birthYear);
// console.log("Can vote:", canVote);

console.log("=== MY INFO ===");
console.log(intro);
console.log("Birth Year:", birthyear);
console.log("Can vote:", canVote);
