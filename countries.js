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
  ]
  
  if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    countries.push('Ethiopia');
    console.log('Ethiopia has been added to the list.');
  }
  
  console.log(countries);
 
module.exports=country;