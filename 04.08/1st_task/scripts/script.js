
let birthday = prompt("Please enter the date of your birthday: " , "yyyy-mm-dd");
let birthdayDate = new Date(birthday);
let getBirthdayDate = birthdayDate.getDate();
let getBirthdayMonth = birthdayDate.getMonth();

let result;

if ((getBirthdayMonth == 2 && getBirthdayDate >= 21) || (getBirthdayMonth == 3 && getBirthdayDate < 20)) {
    result = "Aries";
} else if ((getBirthdayMonth == 3 && getBirthdayDate >= 20) || (getBirthdayMonth == 4 && getBirthdayDate < 21)) {
    result = "Taurus"
} else if ((getBirthdayMonth == 4 && getBirthdayDate >= 21) || (getBirthdayMonth == 5 && getBirthdayDate < 21)) {
    result = "Gemini";
} else if ((getBirthdayMonth == 5 && getBirthdayDate >= 21) || (getBirthdayMonth == 6 && getBirthdayDate < 23)) {
    result = "Cancer";
} else if ((getBirthdayMonth == 6 && getBirthdayDate >= 23) || (getBirthdayMonth == 7 && getBirthdayDate < 23)) {
    result = "Leo"; 
} else if ((getBirthdayMonth == 7 && getBirthdayDate >= 23) || (getBirthdayMonth == 8 && getBirthdayDate < 23)) {
    result = "Vrigo";
} else if ((getBirthdayMonth == 8 && getBirthdayDate >= 23) || (getBirthdayMonth == 9 && getBirthdayDate < 23)) {
    result = "Libra"; 
} else if ((getBirthdayMonth == 9 && getBirthdayDate >= 23) || (getBirthdayMonth == 10 && getBirthdayDate < 22)) {
    result = "Scorpio";
} else if ((getBirthdayMonth == 10 && getBirthdayDate >= 22) || (getBirthdayMonth == 11 && getBirthdayDate < 22)) {
    result = "Sagittarius";
} else if ((getBirthdayMonth == 11 && getBirthdayDate >= 22) || (getBirthdayMonth == 0 && getBirthdayDate < 20)) {
    result = "Capricorn";
} else if ((getBirthdayMonth == 0 && getBirthdayDate >= 20) || (getBirthdayMonth == 1 && getBirthdayDate < 19)) {
    result = "Aquarius";
} else if ((getBirthdayMonth == 1 && getBirthdayDate >= 19) || (getBirthdayMonth == 2 && getBirthdayDate < 21)) {
    result = "Pisces"; 
} else {
    alert("This is not a valid date!")
}

let shortMonths = ((getBirthdayMonth == 3) || (getBirthdayMonth == 5) || (getBirthdayMonth == 8) || (getBirthdayMonth == 10))


/// This doesn't work. It works if getBirthdayDate > 29 or any other number, but at the moment I change it to 30, it doesn't show the validation alert, but "Your zodiac sign is "+ result. 
if ((shortMonths) && (getBirthdayDate > 30)) {
    alert("This is not a valid date"); 
} else if (result != undefined) {
    alert("Your zodiac sign is " + result)
}







                /// FIRST VERSION /////

// let birthdayMonth = prompt("Enter the month of your birthday: " , "January").toLowerCase();
// let birthdayDate = prompt("Enter the date of your birthday: " , "1");


// if ((birthdayMonth == "march" && birthdayDate >= "21") || (birthdayMonth == "april" && birthdayDate < "20")) {
//     alert("Your zodiac sign is Aries");
// } else if ((birthdayMonth == "april" && birthdayDate >= "20") || (birthdayMonth == "may" && birthdayDate < "21")) {
//     alert("Your zodiac sign is Taurus");
// } else if ((birthdayMonth == "may" && birthdayDate >= "21") || (birthdayMonth == "june" && birthdayDate < "21")) {
//     alert("Your zodiac sign is Gemini");
// } else if ((birthdayMonth == "june" && birthdayDate >= "21") || (birthdayMonth == "july" && birthdayDate < "23")) {
//     alert("Your zodiac sign is Cancer");
// } else if ((birthdayMonth == "july" && birthdayDate >= "23") || (birthdayMonth == "august" && birthdayDate < "23")) {
//     alert("Your zodiac sign is Leo");
// } else if ((birthdayMonth == "august" && birthdayDate >= "23") || (birthdayMonth == "september" && birthdayDate < "23")) {
//     alert("Your zodiac sign is Virgo"); 
// } else if ((birthdayMonth == "september" && birthdayDate >= "23") || (birthdayMonth == "october" && birthdayDate < "23")) {
//     alert("Your zodiac sign is Libra"); 
// } else if ((birthdayMonth == "october" && birthdayDate >= "23") || (birthdayMonth == "november" && birthdayDate < "22")) {
//     alert("Your zodiac sign is Scorpio"); 
// } else if ((birthdayMonth == "november" && birthdayDate >= "22") || (birthdayMonth == "december" && birthdayDate < "22")) {
//     alert("Your zodiac sign is Sagittarius"); 
// } else if ((birthdayMonth == "december" && birthdayDate >= "22") || (birthdayMonth == "january" && birthdayDate < "20")) {
//     alert("Your zodiac sign is Capricorn"); 
// } else if ((birthdayMonth == "january" && birthdayDate >= "20") || (birthdayMonth == "february" && birthdayDate < "19")) {
//     alert("Your zodiac sign is Aquarius"); 
// } else if ((birthdayMonth == "february" && birthdayDate >= "19") || (birthdayMonth == "march" && birthdayDate < "21")) {
//     alert("Your zodiac sign is Pisces");
// } else {
//     alert("Error!")
// }




        // SECOND VERSION



// let birthdayMonth = prompt("Enter the month of your birthday: " , "January");
// let birthdayDate = prompt("Enter the date of your birthday: " , "1");
// let birthday = String(birthdayMonth + " " + birthdayDate); 
// birthday = new Date(birthday); 

// let ariesDate = new Date("March 21 2001");
// let taurusDate = new Date("April 20 2001");
// let geminiDate = new Date("May 21 2001");
// let cancerDate = new Date("June 21 2001");
// let leoDate = new Date("July 23 2001");
// let virgoDate = new Date("August 23 2001");
// let libraDate = new Date("September 23 2001");
// let scorpioDate = new Date("October 23 2001");
// let sagittariusDate = new Date("November 22 2001");
// let capricornDate = new Date("December 22 2001");
// let aquariusDate = new Date("January 20 2001");
// let piscesDate = new Date("February 19 2001");

// let isDateValid = Date.parse(birthday);

//     if ((birthday >= ariesDate) && (birthday < taurusDate)) {
//         alert("Your zodiac sign is Aries"); 
//     } else if ((birthday >= taurusDate) && (birthday < geminiDate)) {
//         alert("Your zodiac sign is Taurus"); 
//     } else if ((birthday >= geminiDate) && (birthday < cancerDate)) {
//         alert("Your zodiac sign is Gemini");
//     } else if ((birthday >= cancerDate) && (birthday < leoDate)) {
//         alert("Your zodiac sign is Cancer");
//     } else if ((birthday >= leoDate) && (birthday < virgoDate)) {
//         alert("Your zodiac sign is Leo");
//     } else if ((birthday >= virgoDate) && (birthday < libraDate)) {
//         alert("Your zodiac sign is Virgo");
//     } else if ((birthday >= libraDate) && (birthday < scorpioDate)) {
//         alert("Your zodiac sign is Libra");
//     } else if ((birthday >= scorpioDate) && (birthday < sagittariusDate)) {
//         alert("Your zodiac sign is Scorpio");
//     } else if ((birthday >= sagittariusDate) && (birthday < capricornDate)) {
//         alert("Your zodiac sign is Sagittarius");
//     } else if ((birthday >= capricornDate) || (birthday < aquariusDate)) { /// Check this 
//         alert("Your zodiac sign is Capricorn");
//     } else if ((birthday >= aquariusDate) && (birthday < piscesDate)) {
//         alert("Your zodiac sign is Aquarius");
//     } else if ((birthday >= piscesDate) && (birthday < ariesDate)) {
//         alert("Your zodiac sign is Pisces");
//     } else {
//         if (isNaN(isDateValid) || typeof birthdayMonth !== "string" || typeof birthdayDate != "number") {
//             alert("This is not a valid date");
//     }
// }






                // THIRD VERSION


// let birthday = prompt("Please enter the date of your birthday: " , "yyyy-mm-dd");
// let birthdayDate = new Date(birthday);
// let getBirthdayDate = birthdayDate.getDate();
// let getBirthdayMonth = birthdayDate.getMonth();


// let isDateValid = Date.parse(birthday);
// let result;                

// if ((getBirthdayMonth == "2" && getBirthdayDate >= "21") || (getBirthdayMonth == "3" && getBirthdayDate < "20")) {
//     result = "Aries";
// } else if ((getBirthdayMonth == "3" && getBirthdayDate >= "20") || (getBirthdayMonth == "4" && getBirthdayDate < "21")) {
//     result = "Taurus";
// } else if ((getBirthdayMonth == "4" && getBirthdayDate >= "21") || (getBirthdayMonth == "5" && getBirthdayDate < "21")) {
//     result = "Gemini";
// } else if ((getBirthdayMonth == "5" && getBirthdayDate >= "21") || (getBirthdayMonth == "6" && getBirthdayDate < "23")) {
//     result = "Cancer";
// } else if ((getBirthdayMonth == "6" && getBirthdayDate >= "23") || (getBirthdayMonth == "7" && getBirthdayDate < "23")) {
//     result = "Leo";
// } else if ((getBirthdayMonth == "7" && getBirthdayDate >= "23") || (getBirthdayMonth == "8" && getBirthdayDate < "23")) {
//     result = "Virgo"; 
// } else if ((getBirthdayMonth == "8" && getBirthdayDate >= "23") || (getBirthdayMonth == "9" && getBirthdayDate < "23")) {
//     result = "Libra"; 
// } else if ((getBirthdayMonth == "9" && getBirthdayDate >= "23") || (getBirthdayMonth == "10" && getBirthdayDate < "22")) {
//     result = "Scorpio"; 
// } else if ((getBirthdayMonth == "10" && getBirthdayDate >= "22") || (getBirthdayMonth == "11" && getBirthdayDate < "22")) {
//     result = "Sagittarius"; 
// } else if ((getBirthdayMonth == "11" && getBirthdayDate >= "22") || (getBirthdayMonth == "0" && getBirthdayDate < "20")) {
//     result = "Capricorn"; 
// } else if ((getBirthdayMonth == "0" && getBirthdayDate >= "20") || (getBirthdayMonth == "1" && getBirthdayDate < "19")) {
//     result = "Aquarius"; 
// } else if ((getBirthdayMonth == "1" && getBirthdayDate >= "19") || (getBirthdayMonth == "2" && getBirthdayDate < "21")) {
//     result = "Pisces";
// } else {
//     if (isNaN(isDateValid)) {
//         alert("This is not a valid date format");
//     } else {
//        alert("Error!");
//     }   
// }; 

// if (result != undefined) {
//     alert("Your zodiac sign is: " + result); 
// }



