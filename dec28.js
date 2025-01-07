// Declare a variable and assign a value
let challenge = '30 Days Of JavaScript';

// Print the string to the browser console
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all the string characters to uppercase
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string
console.log(challenge.substring(0, 2)); 
console.log(challenge.substr(0, 2));  

// Slice out the phrase "Days Of JavaScript"
console.log(challenge.substring(3)); 

// Check if the string contains a word "Script"
console.log(challenge.includes('Script'));

// Split the string into an array
console.log(challenge.split(''));

// Split the string at the space
console.log(challenge.split(' '));

// Split a different string at the comma and change it to an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// Replace "JavaScript" with "Python"
console.log(challenge.replace('JavaScript', 'Python'));



