function addition() {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let sum = Number(firstNum) + Number(secondNum); 
    let result = document.getElementById("result");
    result.innerText = "The sum of your numbers is: " + sum;
    // const inputs = document.getElementsByTagName("input");
    // for (let i = 0; i < inputs.length; i++ ) {
    //     inputs[i].value = " ";  
    // }

}

function subtraction() {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let subtraction = Number(firstNum) - Number(secondNum); 
    let result = document.getElementById("result");
    result.innerText = "The subtraction of your numbers is: " + subtraction; 
}

function multiplication() {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let multiplication = Number(firstNum) * Number(secondNum); 
    let result = document.getElementById("result");
    result.innerText = "The multiplication of your numbers is: " + multiplication; 
}

function division() {
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let division = Number(firstNum) / Number(secondNum); 
    let result = document.getElementById("result");
    result.innerText = "The division of your numbers is: " + division; 
}
