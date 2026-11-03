// Switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else statements.

let day = 3;
let dayName;

switch (day)
{
    case 1:
        dayName =  "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}
console.log("Day: ",dayName);

// Switch Case with Expression (mordern way)

let fruit = "apple";
let category ="";

switch (fruit)
{
    case "apple":
    case "pear":
        category = "Pome Fruits";
        break;
    case "banana":
    case "mango":
        category = "Tropical Fruits";
        break;
    case "orange":
    case "lemon":
        category = "Citrus Fruits";
        break;
    default:
        category = "Unknown Category";
        break;
}
console.log(`${fruit} is a ${category}.`);

// practical Example: HTTP Status Codes
function getStatusMessage(code)
{
    switch (code)
    {
        case 200:
            return "OK";
        case 201:
            return "Created";
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            return "Unknown Status Code";
    }
}
console.log(getStatusMessage(404)); // Output: Not Found
console.log(getStatusMessage(403)); // Output: Forbidden
