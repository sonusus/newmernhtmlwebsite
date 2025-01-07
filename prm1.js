// var a=5
// console.log(a);
// a=10
// console.log(a);
let fname=" Mern stalk"
console.log(fname);
let lastchar=fname.length-1
console.log(fname[lastchar]);
console.log(fname[5]);
let sub=fname.substr(2,5)
console.log(sub);
let subs=fname.substring(2,5)
console.log(subs);
console.log(fname.toUpperCase());

console.log(fname.toLowerCase());
let spli=fname.split(' ')
console.log(spli);
let tri=fname.trim()
console.log(tri.length);
console.log(fname.includes('mern'));
console.log(fname.replace('Mern','Full'));
console.log(fname.replace('stalk','Stalk'));
console.log(fname.charAt(4));
console.log(fname.charCodeAt(4));
console.log(fname.indexOf(''));
console.log(fname.lastIndexOf(''));
let str="hloo"
let str1="hi"
console.log(str.concat(str1));
console.log(str.startsWith('h'));
console.log(str.endsWith('o'));
console.log(str.repeat(6));

let rep=("hloo\n")
console.log(rep.repeat(6));

const pi=Math.PI
console.log(pi);
console.log(Math.round(pi));
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.min(1,3,6,7));
console.log(Math.max(1,3,6,7));
console.log(Math.floor(Math.random()*10));
console.log(Math.abs(-24));
console.log(Math.sqrt(24));
console.log(Math.pow(2,4));
console.log(Math.E);
console.log(Math.LN2);
