let numberArray = [];
let number;

while (number != "stop") {
    number = prompt('You are asked to make an array of numbers. Please enter a number. When you feel it is enough, write "STOP" in the last input box.').toLowerCase(); 
    if (isNaN(Number(number)) && (number != "stop")) {
        alert("You must enter a number!");
    };
    if (!(isNaN(Number(number)))) {
        numberArray.push(number);   
    }
}

numberArray = numberArray.map(Number);

alert("The original array is " + numberArray.join(" , "));

numberArray.sort((a, b) => a - b);

alert("The sorted array is " + numberArray.join(" , ")); 


                //// ANOTHER VERSION //// 


// let numberArray = []; 
// let numberOne = Number(prompt("Please enter a number of your choice to add it to an array"));
// let numberTwo = Number(prompt("Please enter another number of your choice"));
// let numberThree = Number(prompt("And another"));
// let numberFour = Number(prompt("And the last one"));


// numberArray.push(numberOne, numberTwo, numberThree, numberFour); 


// let notNumbers = isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree) || isNaN(numberFour);

// if (notNumbers) {
//     alert("You must enter a number!")
// } else {
//     alert("The original array is " + numberArray.join(" , "));
// }

// numberArray.sort((a, b) => a - b);


// if (!notNumbers) {
//     alert("The sorted array is " + numberArray.join(" , ")); 
// }