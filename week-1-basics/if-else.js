// If-Else Statements
let score = 85;
let age = 17;
let hasLicence =  true;

// basic if statement
if (score >=60)
{
    console.log("Passed!");
}

// if-else statement
if (age >= 18)
{
    console.log("Adult");
}
else
{
    console.log("Minor");
}

// if-else-if statement
if (score >= 90)
{
    console.log("Grade: A");
}
else if (score >= 80)
{
    console.log("Grade: B");
}
else if (score >= 70)
{
    console.log("Grade: C");
}
else if (score >= 60)
{
    console.log("Grade: D");
}
else
{
    console.log("Grade: F");
}


// Logical Operators in Conditional Statements

if (age >= 18 && hasLicence)
{
    console.log("Can Drive.");
}
else if (age <= 18 && !hasLicence)
{
    console.log("Can Learn to Drive.");
}
else
{
    console.log("Too Young to Drive");
}


// Truthy and Falsy Values
let userName = "";
let userAge = 0;
let userScore = null;

if (userName)
{
    console.log("Name: ", userName);
}
else
{
    console.log("No Name Provided");        //runs (empty string is falsy)
}

// Ternary Operator (inline if-else)
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// nested ternary operator (avoid overuse)

let category = age < 13 ? "Child" : age <20 ? "Teenager" : "Adult";
console.log("Category:", category);

