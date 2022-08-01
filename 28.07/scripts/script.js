let firstValue = prompt("Please enter a value of your choice:");
let secondValue = prompt("Please enter another value of your choice:"); 
let operator = prompt("Please enter one of the operators (+, -, *, /):");


let additionResult = Number.parseInt(firstValue) + Number.parseInt(secondValue);
let subtractionResult = Number.parseInt(firstValue) - Number.parseInt(secondValue);
let multiplicationResult = Number.parseInt(firstValue) * Number.parseInt(secondValue);
let divisionResult = Number.parseInt(firstValue) / Number.parseInt(secondValue);


    if (operator == "+") {
        if (additionResult) {
            alert("Result of addition of your two values is: " + additionResult); 
        } else {
            alert("Concatenation of your two values is: " + additionConcat); 
        }
    } else if (operator == "-") {
        if (subtractionResult) {
            alert("Result of subtraction of your two values is: " + subtractionResult);
        } else {
            alert("Error! The value you provided is not a number. Please refresh the page and try again.")
        }
    } else if (operator == "*") {
        if (multiplicationResult) {
            alert("Result of multiplication of your two values is: " + multiplicationResult);
        } else {
            alert("Error! The value you provided is not a number. Please refresh the page and try again.")
        }
    } else if (operator == "/") {
        if (divisionResult) {
            alert("Result of division of your two values is: " + divisionResult);
        } else {
            alert("Error! The value you provided is not a number. Please refresh the page and try again.")
        }
    } else if (operator !== "+" || "-" || "*" || "/") {
        alert("Error! The operator you provided is not one of these : +, -, *, /. Please refresh the page and try again.");
    } else {
        alert("Error!")
    }