
// Declare variables

let display = document.querySelector("#display"); // Calculator screen where result is displayed
let equals = document.querySelector(".calculate"); // Equals button
let numbers = document.getElementsByClassName("btn-number"); // List of numbers
let operations = document.getElementsByClassName("operation"); // List of operations
let clearButton = document.querySelector(".clear"); // Clear button
let plusMinus = document.querySelector(".plus-minus"); // Plus-minus button
let percentage = document.querySelector(".percentage"); // Percentage buttons
let currentNumber = "";
let oldNumber = "";
let result;
let operator;



// When number or decimal button is clicked. 
function setNumber () {
    // If display text is zero
    if (display.textContent === "0") {
        if (this.textContent === ".") {
            currentNumber += this.textContent;
        } else {
            currentNumber = this.textContent;  
        }  
    // If the button is decimal   
    } else if (this.textContent === ".") {
        if (display.textContent.includes(".")) {
            currentNumber;;
        } else if ((display.textContent === "") || (display.textContent = result)){
            currentNumber === ""; 
        } else if (currentNumber === "") {
            currentNumber = "0.";
        } else {
            currentNumber += this.textContent;
        }
    // To add a calculation to the result
    } else if (display.textContent = result) {
            currentNumber = this.textContent;
            result = "";
    } else {
        currentNumber += this.textContent;
    }

    display.textContent = currentNumber.slice(0, 10); 
}


// When operator button is clicked. 
function moveNumber () {

    // If operator is clicked after the second number, show the result and continue calculation
    if (!(currentNumber === "") && !(operator === undefined)) {
        getResult();
        oldNumber = result;
    // Else pass current number to oldNumber
    } else {
        oldNumber = currentNumber;
        currentNumber = "";
    }
    operator = this.textContent;
}


// When Equals button is clicked, calculate result
function getResult () {
    oldNumber = Number(oldNumber);
    currentNumber = Number(currentNumber); 

    switch (operator) {
        case "+":
            result = oldNumber + currentNumber;
            break;
        case "-":
            result = oldNumber - currentNumber;
            break;
        case "*":
            result = oldNumber * currentNumber;
            break;
        case "/":
            result = oldNumber / currentNumber;
            break;
        default:
            result = currentNumber;
    }

    if (result === NaN) {
        display.textContent = "Error!"; 
    }

    // Check if the result is a whole number or has decimal places. 
    if (result % 1 !== 0) { // If it is a decimal number...
        display.textContent = result.toFixed(2); // .. then fix decimal places to 2 digits
        if (display.textContent.slice(-1) === "0") { // And in case its last digit is 0
            display.textContent = result.toFixed(1); // .. then don't show it
        }
    } else {
        display.textContent = result;
    }

    oldNumber = 0;
    currentNumber = result; 
    operator = undefined; 
}


// When Clear button is clicked. 
function clear () {
    oldNumber = "";
    currentNumber = "";
    display.textContent = "";
    operator = undefined; 
}


// When +/- button is clicked
function setOppositeSign () {
    display.textContent = Number(display.textContent) * (-1);
    currentNumber = display.textContent; 
}


// When percentage button is clicked 
function calculatePercentage () {
    display.textContent = display.textContent / 100; 
}


// CLICK EVENTS //


// Add click event to numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = setNumber;
}

// Add click event to operations
for (let i = 0; i < operations.length; i++) {
    operations[i].onclick = moveNumber;
}

// Add click event to equal sign
equals.onclick = getResult;

// Add click to Clear button
clearButton.onclick = clear;

// Add click to +/- button
plusMinus.onclick = setOppositeSign; 

// Add click to percentage button
percentage.onclick = calculatePercentage;

