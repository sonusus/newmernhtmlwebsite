let str = '30 Days Of JavaScript';
console.log(str.charAt(15)); 

console.log(str.charCodeAt(str.indexOf('J'))); 

console.log(str.indexOf('a')); 

console.log(str.lastIndexOf('a')); 


let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); 


console.log(sentence.lastIndexOf('because')); 


console.log(sentence.search('because')); 

let strWithSpaces = ' 30 Days Of JavaScript ';
console.log(strWithSpaces.trim()); 


console.log(str.startsWith('30 Days')); 

console.log(str.endsWith('JavaScript')); 
console.log(str.match(/a/g)); 
let part1 = '30 Days of';
let part2 = ' JavaScript';
console.log(part1.concat(part2)); 
console.log(str.repeat(2)); 

//level2 

// Print the quote by John Holmes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Print the quote by Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Check if typeof '10' is exactly equal to 10, if not make it exactly equal
let numStr = '10';
console.log(typeof numStr === typeof 10); // false
let num = parseInt(numStr);
console.log(num); // 10

// Check if parseFloat('9.8') is equal to 10, if not make it exactly equal to 10
let floatNum = parseFloat('9.8');
console.log(floatNum === 10); 
floatNum = Math.round(floatNum);
console.log(floatNum); 

// Check if 'on' is found in both python and jargon
let str1 = 'python';
let str2 = 'jargon';
console.log(str1.includes('on') && str2.includes('on')); 

// Check if 'jargon' is in the sentence
let sentenc = 'I hope this course is not full of jargon.';
console.log(sentenc.includes('jargon')); 

// Generate a random number between 0 and 100 inclusively
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

// Generate a random number between 50 and 100 inclusively
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// Generate a random number between 0 and 255 inclusively
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// Access the 'JavaScript' string characters using a random number
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// Print the given pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Slice out 'because because because' from the sentence
let fullSentence = 'You cannot end a sentence with because because because is a conjunction';
let slicedPhrase = fullSentence.substr(fullSentence.indexOf('because'), 'because because because'.length);
console.log(slicedPhrase);

//levl3
// 1. Count the number of the word 'love' in the sentence
const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const wordss = sentence1.toLowerCase().split(' ');  

let loveCount = 0;

for (let i = 0; i < wordss.length; i++) {
  if (wordss[i].includes('love')) {  
    loveCount++;
  }
}

console.log(loveCount);  

// 2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction
const sentence2 = 'You cannot end a sentence with because because because is a conjunction.';
const word = sentence2.toLowerCase().split(' ');  

let Count = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i].match('because')) {  
    Count++;
  }
}

console.log(Count); 

// 3. Clean the text and find the most frequent word
const sentences = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;

const cleanedText = sentences.replace(/[%$@&#;!?.,30]/g, '').toLowerCase();
const words = cleanedText.split(' ');
const wordCounts = {};


let maxWord = '';
let maxCount = 0;

for (let i = 0; i < words.length; i++){
  const word = words[i];
  if (wordCounts[word]){
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }

  
  if (wordCounts[word] > maxCount) {
    maxCount = wordCounts[word];
    maxWord = word;
  }
}

console.log(`Most repeated word: ${maxWord}, Count: ${maxCount}`);


// 4. Calculate the total annual income

let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g); 

let monthlySalary = parseInt(incomeNumbers[0]);
let annualBonus = parseInt(incomeNumbers[1]);
let monthlyCourses = parseInt(incomeNumbers[2]);


let totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(totalAnnualIncome);


