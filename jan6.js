// for(let i=0;i<=10;i++){
//     console.log(i);
 
// }

// let i = 0
// while (i <= 10) {
//   console.log(i)
//   i++
// }

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 10)

// let n=10
// for(let i=0;i<=n;i++){
//     console.log(i);
  
// }

// for(let i=10;i>=1;i--){
//     console.log(i);
 
// }

// let i = 0
// while (i <= 10) {
//   console.log(i)
//   i++
// }

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 10)

// for (let i = 1; i <= 5; i++) {
//     let row = ""; 
//     for (let j = 1; j <= i; j++) {
//         row += "#"; 
//     }
//     console.log(row);
// }
// let i=0
// let j=i
// let n=10
// for(i=0;i<=n;i++){
//     for(j=)
// }

let arr=[]
let max=50
let min=10
while(arr.length<5){
    // let num=Math.floor(Math.random()*10)
    let num=Math.floor(Math.random()*(max-min)+(min+1))
    if(!arr.includes(num)){
        arr.push(num)
    }
}
console.log(arr);