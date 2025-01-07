
// const arr  = ['apple', 'orange','banana']
// arr.push('mango')
// console.log(arr)

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() 
// console.log(numbers) 

// const num = [1, 2, 3, 4, 5]
// numbers.shift() 
// console.log(num) 

// const n = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(n)               

// const nu = [1,2,3,4,5]

// console.log(nu.slice()) 
// console.log(nu.slice(0)) 
// console.log(nu.slice(0, nu.length)) 
// console.log(nu.slice(1,4))

// const numb = [5,1,3,4,2]
// console.log(numb.sort((a,b)=>a-b))


//

let emptyArray = [];

let countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

console.log(countries.length); 
let firstItem = countries[0];
let middleItem = countries[Math.floor(countries.length / 2)];
let lastItem = countries[countries.length - 1];

console.log(firstItem);  
console.log(middleItem); 
console.log(lastItem);  

let mixedDataTypes = [1, 'string', true, null, undefined, {}, [], 3.14];

console.log(mixedDataTypes.length); 

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length); 

let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany);    
console.log(middleCompany); 
console.log(lastCompany);    

itCompanies.forEach(company => console.log(company));

itCompanies = itCompanies.map(company => company.toUpperCase());
console.log(itCompanies);

console.log(`${itCompanies.join(', ')} are big IT companies.`);

let searchCompany = 'Google';
let companyExists = itCompanies.includes(searchCompany) ? searchCompany : 'a company is not found';
console.log(companyExists);

let filteredCompanies = itCompanies.filter(company => company.split('o').length - 1 <= 1);
console.log(filteredCompanies);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

let firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

let lastThree = itCompanies.slice(-3);
console.log(lastThree);

let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompanies = itCompanies.length % 2 === 0 
  ? itCompanies.slice(middleIndex - 1, middleIndex + 1) 
  : [itCompanies[middleIndex]];
console.log(middleCompanies);


itCompanies.shift();
console.log(itCompanies);

let middleIndex = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.length = 0;
console.log(itCompanies); 

//
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,'"]/g, '').split(' ');  
console.log(words);
console.log(words.length);  

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess.');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);

shoppingCart[3]="Green Tea"
console.log(shoppingCart);

//
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log(minAge);  
console.log(maxAge); 

const medianAge = (ages[4] + ages[5]) / 2;
console.log(medianAge);  

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}

const averageAge = totalAge / ages.length;

console.log(averageAge);  


const range = maxAge - minAge;
console.log(range); 

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log(diffMinAverage); 
console.log(diffMaxAverage);  

const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark',
    'Ethiopia', 'Finland', 'Germany', 'Hungary',
    'Ireland', 'Japan', 'Kenya'
  ];
  
  const firstTenCountries = countries.slice(0, 10);
  console.log(firstTenCountries);

  const middleCountry = countries[Math.floor(countries.length / 2)];
console.log(middleCountry); 

const firstHalf = countries.slice(0, Math.floor(countries.length / 2));
const secondHalf = countries.slice(Math.floor(countries.length / 2));

console.log(firstHalf); 
console.log(secondHalf); 


