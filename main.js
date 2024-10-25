// 1. Comparison of today_day with 30
let today_day = 23;
let is_greater_than_30 = today_day > 30;
console.log(is_greater_than_30);  // Output: false

// 2a. Write a function called add_three_num that takes three numbers as arguments.
function add_three_num(a, b, c) {
    // b. Return the addition of the three numbers
    return a + b + c;
}
// c. Call the function with three numbers and print the returned value
let results = add_three_num(10, 20, 30);
console.log(results);  // Output: 60


// 3a. Create a variable called nick_name and assign it your nickname.
let nick_name = "fabherbie";

// b. Create a variable called count and assign it the number 40.
let initialcount = 40;

// c. Print both variables using console.log()
console.log("Nickname:", nick_name);
console.log("Count:",count);


// 4a. Create two variables, x and y, and assign them any number of your choice.
let x = 15;
let y = 4;

// b. Perform addition, subtraction, multiplication, division, and modulo operation on these variables.
let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;
let modulo = x % y;

// c. Print the results of each of the operations.
console.log("Addition:", addition);         // Output: 19
console.log("Subtraction:", subtraction);   // Output: 11
console.log("Multiplication:", multiplication); // Output: 60
console.log("Division:", division);         // Output: 3.75
console.log("Modulo:", modulo);             // Output: 3


// 5a. Create two boolean variables, isPublicHoliday and isWeekDay, and assign them appropriate values.
let isPublicHoliday = true;  // Assume it is a public holiday
let isWeekDay = false;       // Assume it is not a weekday (maybe it's a weekend)

// b. Combine them using && (and) and || (or) operators to check if the weekday is a public holiday.
let isHolidayAndWeekday = isPublicHoliday && isWeekDay;  // True if both are true
let isHolidayOrWeekday = isPublicHoliday || isWeekDay;   // True if either is true

// c. Print the result
console.log("Is it a public holiday and a weekday?", isHolidayAndWeekday);  // Output: false
console.log("Is it a public holiday or a weekday?", isHolidayOrWeekday);    // Output: true


// 6a. Create a variable count and assign it an initial value of 0.
let newCount = 0;

// b. Add 10 to the count variable.
newCount += 10;

// c. Multiply 20 by the count variable.
newCount *= 20;

// d. Print the final value of count.
console.log("Final value of newCount:", newCount);  // Output: 200


// 7a. Create a variable with your best meal as a string.
let bestMeal = "rice";

// b. Use template literals to combine it with your name.
let name = "Olayinka";
let message = `${name} loves ${bestMeal}`;

// c. Print the final message.
console.log(message);  // Output: Olayinka loves rice


// 8a. Declare a function named greet that takes a person's name and time of day as an argument.
function greet(name, timeOfDay) {
    // b. Inside the function, print a message like: "Good [day], [name]".
    console.log(`Good ${timeOfDay}, ${name}!`);
}

// c. Call the function and pass any name and time of day to it.
greet("Olayinka", "morning");  // Output: Good morning, Olayinka!


/*
 * This script defines a function called add_three_num that takes three numbers as arguments,
 * adds them together, and returns the result. It then calls this function with three example numbers
 * and prints the returned value to the console.
 */

// 9a. Define a function called add_three_num that takes three numbers as arguments.
function add_three_num(a, b, c) {
    // b. Return the addition of the three numbers
    return a + b + c;
}

// c. Call the function with three numbers and store the result in a variable
let result2 = add_three_num(10, 20, 30);

// d. Print the returned value to the console
console.log(result);  // Output: 60


// 10a. Create a variable without assigning any value (leave it undefined).
let myVariable;  // This variable is currently undefined

// b. Print the variable to see the output.
console.log("Initial value:", myVariable);  // Output: Initial value: undefined

// c. Now, assign null to the same variable and print it again.
myVariable = null;  // Assign null to the variable
console.log("After assigning null:", myVariable);  // Output: After assigning null: null

