let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = false;
let yearr = 2025;

console.log(typeof firstName); 
console.log(typeof lastName); 
console.log(typeof country); 
console.log(typeof city); 
console.log(typeof age);
console.log(typeof isMarried); 
console.log(typeof yearr); 


let a=10
let b='10'
console.log(a==b);
console.log(a===b);

let c=parseInt(9.8)
let d=10
console.log(c==d);
console.log(c===d);

console.log(1);          
console.log("Hello");    
console.log([]);  

console.log(0);         
console.log("");        
console.log(null);

let e="python"
let f="jargon"
console.log(e.length>f.length);

let word1 = 'dragon';
let word2 = 'python';

console.log(!(word1.includes('on') && word2.includes('on'))); 
console.log(4 > 3);       // true
console.log(4 >= 3);      // true
console.log(4 < 3);       // false
console.log(4 <= 3);      // false
console.log(4 == 4);      // true
console.log(4 === 4);     // true
console.log(4 != 4);      // false
console.log(4 !== 4);     // false
console.log(4 != '4');    // false
console.log(4 == '4');    // true
console.log(4 === '4');   // false



console.log(4 > 3 && 10 < 12);           // true
console.log(4 > 3 && 10 > 12);           // false
console.log(4 > 3 || 10 < 12);           // true
console.log(4 > 3 || 10 > 12);           // true
console.log(!(4 > 3));                   // false
console.log(!(4 < 3));                   // true
console.log(!(false));                  // true
console.log(!(4 > 3 && 10 < 12));        // false
console.log(!(4 > 3 && 10 > 12));        // true
console.log(!(4 === '4'));              // true





let today = new Date();
let year = today.getFullYear();
console.log(`Year: ${year}`);

let month = today.getMonth() + 1;
console.log(`Month: ${month}`);

let date = today.getDate();
console.log(`Date: ${date}`);

let day = today.getDay(); 
console.log(`Day: ${day}`);

let hours = today.getHours();
console.log(`Hours: ${hours}`);

let minutes = today.getMinutes();
console.log(`Minutes: ${minutes}`);

let secondsElapsed = Math.floor(today.getTime() / 1000);
console.log(`Seconds elapsed since January 1, 1970: ${secondsElapsed}`);

//lev 2
let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

let length = prompt("Enter length:");
let width = prompt("Enter width:");
let rectangleArea = length * width;
let rectanglePerimeter = 2 * (parseInt(length) + parseInt(width));
console.log(`Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`);

let radius = prompt("Enter radius:");
let pi = 3.14;
let circleArea = pi * radius * radius;
let circleCircumference = 2 * pi * radius;
console.log(`Area: ${circleArea}, Circumference: ${circleCircumference}`);

// Slope of y = 2x - 2
let slope = 2;
console.log(`Slope: ${slope}`);


let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`Slope: ${slope}`); 

let slopeEquation = 2;
let slopePoints = (10 - 2) / (6 - 2);

console.log(`Slope from equation: ${slopeEquation}`);
console.log(`Slope between points: ${slopePoints}`);


let x = prompt("Enter x value:");
let y = x * x + 6 * x + 9;
console.log(`When x = ${x}, y = ${y}`);

let hours = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
let weeklyEarnings = hours * ratePerHour;
console.log(`Your weekly earning is ${weeklyEarnings}`);

let name = 'YourNameHere'; 
if (name.length > 7) {
    console.log('Your name is long');
} else {
    console.log('Your name is short');
}


let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
}

let myAge = 250;
let yourAge = 25;

console.log(`My age is ${myAge} and your age is ${yourAge}`);


// Using prompt to get the user's birth year
let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let yearsToDrive = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToDrive} years.`);
}


let years = prompt("Enter number of years you live:");
let secondsLived = years * 31536000;
console.log(`You lived ${secondsLived} seconds.`);

let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);


let now = new Date();
let date = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0');
let year = now.getFullYear();
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${date}-${month}-${year} ${hours}:${minutes}`);


let now = new Date();
let date = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0');
let year = now.getFullYear();
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);


let now = new Date();
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);






