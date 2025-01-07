// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;


// const cleanedText = sentence.replace(/[%$@&#;!?.,30]/g, '').toLowerCase();
// const words = cleanedText.split(' ');
// const wordCounts = {};
// for (let i = 0; i < words.length; i++){
// const word = words[i];
//   if (wordCounts[word]){
//     wordCounts[word]++;
//   }
//   else{
//     wordCounts[word]=1
// }
// }
//   console.log(wordCounts);

 
  
//   console.log('Max:', max);
//   const maximum = Math.max(...Object.values(wordCounts));
//   console.log(maximum);


let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g); 

let monthlySalary = parseInt(incomeNumbers[0]);
let annualBonus = parseInt(incomeNumbers[1]);
let monthlyCourses = parseInt(incomeNumbers[2]);


let totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(totalAnnualIncome);

const sentences = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;

const cleanedText = sentences.replace(/[%$@&#;!?.,30]/g, '').toLowerCase();
const words = cleanedText.split(' ');

// Array of common stop words to exclude
const stopWords = ['is', 'and', 'the', 'of', 'as', 'no', 'any'];

const wordCounts = {};
let maxWord = '';
let maxCount = 0;

for (let i = 0; i < words.length; i++){
  const word = words[i];
  // Skip stop words
  if (stopWords.includes(word)) continue;
  
  if (wordCounts[word]){
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }

  // Update maxWord and maxCount
  if (wordCounts[word] > maxCount) {
    maxCount = wordCounts[word];
    maxWord = word;
  }
}

console.log(`Most repeated word: ${maxWord}, Count: ${maxCount}`);

const country = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

if (country.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    country.push('Ethiopia');
    console.log('Ethiopia has been added to the list.');
}

console.log(country);

const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const wordss = sentence.toLowerCase().split(' ');  

let Count = 0;

for (let i = 0; i < wordss.length; i++) {
  if (wordss[i].match('because')) {  
    Count++;
  }
}

console.log(Count);  








