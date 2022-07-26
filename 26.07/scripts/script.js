// First Task

let firstNumber = prompt("Please enter a number of your choice:");
let secondNumber = prompt("Please enter another number of your choice:");
let result = Number.parseInt(firstNumber) + Number.parseInt(secondNumber);
alert("Value of addition of your two numbers is: " + result); 
result = Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
alert("Value of subtraction of your two numbers is: " + result); 
result = Number.parseInt(firstNumber) * Number.parseInt(secondNumber);
alert("Value of multiplication of your two numbers is: " + result); 
result = Number.parseInt(firstNumber) / Number.parseInt(secondNumber);
alert("Value of division of your two numbers is: " + result); 

// Second Task

let firstName = prompt("What is your name?");
let lastName = prompt("What is your last name?");
alert("Hello, " + firstName + " " + lastName + "!"); 