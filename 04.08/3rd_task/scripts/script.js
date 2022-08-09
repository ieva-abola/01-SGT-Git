// Create an array with elements from input, only numbers are allowed.

let numberArray = [];
let number;

do {
    number = prompt('You are asked to make an array of five numbers. Please enter any number of your choice.').toLowerCase(); 
    if (isNaN(Number(number))) {
        alert("You must enter a number!");
    };
    if (!(isNaN(Number(number)))) {
        numberArray.push(number);   
    }
} while (numberArray.length < 5);


// Convert strings to numbers 

numberArray = numberArray.map(Number);


// Print out elements which are negative, using loop

let negativeNumbers = []; 

for (let i = 0; i < numberArray.length; i++) {
    if(numberArray[i] < 0) {
        negativeNumbers.push(numberArray[i]);
    } 
}

if (negativeNumbers.length == 0) {
    alert("There are no negative numbers in your array.")
} else if (negativeNumbers.length == 1) { 
    alert("Negative number is: " + negativeNumbers.join(" , ")); 
} else {
    alert("Negative numbers are: " + negativeNumbers.join(" , ")); 

}


// Print out elements which are odd (uneven)

let oddNumbers = [];

for (i = 0; i < numberArray.length; i++) {
    if(numberArray[i] % 2 == 1 || numberArray[i] % 2 == (-1)) {
        oddNumbers.push(numberArray[i]);
    } 
}

if (oddNumbers.length == 0) {
    alert("There are no odd numbers in your array.")
} else if (oddNumbers.length == 1) {
    alert("Odd number is: " + oddNumbers.join(" , ")); 
}
else {
    alert("Odd numbers are: " + oddNumbers.join(" , ")); 
}


// Compute how many elements are odd

if (oddNumbers.length == 1) {
    alert("In your array is " + oddNumbers.length + " odd number.")
} else {
    alert("In your array are " + oddNumbers.length + " odd numbers.")
}


// Verify if there are multiple elements with the same value


for (i = 0; i < numberArray.length; i++) {
    if ((numberArray.indexOf(numberArray[i])) != (numberArray.lastIndexOf(numberArray[i]))) {
        alert("You have duplicate numbers!");
        break;
    }
};

// Print out each second element.

let everySecondNumber = [];

for (i = 0; i < numberArray.length; i++) {
    if(i % 2 == 1) {
        everySecondNumber.push(numberArray[i]);
    } 
}

alert("Every second number in your array is " + everySecondNumber.join(" , ")); 

// Compute average value of the array.

let sum = 0;
for (i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
}

let averageValue = sum / numberArray.length;

alert("Average value of the array is: " + averageValue); 

// Establish how many elements are smaller than the average value.

let smallerThanAverage = [];

for (i = 0; i < numberArray.length; i++) {
    if(numberArray[i] < averageValue) {
        smallerThanAverage.push(numberArray[i]);
    } 
}

alert("In your array you have " + smallerThanAverage.length + " numbers smaller than the average.")