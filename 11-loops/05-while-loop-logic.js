
const { getRandomNumber } = require('./../utils/MathHelper');

let gameNumber = 5;
let attempts = 0;
let randomNumber; // undefined

while(randomNumber !== gameNumber) {
  randomNumber = getRandomNumber(1, 10); 
  attempts++;
}

// for( ; ; ) {
//   let randomNumber = getRandomNumber(1, 10);
//   attempts++;

//   if(randomNumber === gameNumber) {
//     break;
//   }
// }

let time = attempts === 1 ? 'time' : 'times';

console.log(`Game is over after ${attempts} ${time}!`);


// Keep generating a random number between 1-15 (inclusive) 
// until you get lucky number = 13

let ran1; // undefined
let countAt = 0;

do {
  ran = getRandomNumber(1, 15);
  countAt++;
} while (ran1 !== 13);

console.log(`We got 13 after ${countAt} times.`);


// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50

console.log('\n----------for-loop solution----------\n');
for(let i = 0; i <= 50; i++) { // i is block-scoped
  if(i % 2 === 0) console.log(i);
}
/// бо і лише для ціє луп як fname
console.log(i); // ReferenceError: i is not defined



console.log('\n----------while-loop solution----------\n');
// let i = 0; // i is global-scoped

while(i <= 50) {
  if(i % 2 === 0) console.log(i);
  i++;
}
console.log(i); // 51 


// Find sum of the numbers starting from 3 to 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7 -> 25
console.log('\n----------for-loop solution----------\n');

console.log('\n----------while-loop solution----------\n');
let sum11 = 0;

let num = 3;

while(num <= 7) {
  sum1 += num;
  num++;
}

console.log(sum1);
 
for( let i = 0; i <= 50; i++){
    if( i % 2 === 0)
         console.log(i)}

 ///let i = 0
while(i <= 50 ){
    if(i % 2 === 0 )
    console.log(i)
    i++
}

let sum = 0
for( let i = 3; i <= 7; i++){
    sum += i 
   
}
  console.log(sum)  
    
    let i = 3
    let sum1 = 0
    while (i <= 7){
        sum1 += i
        i++
    }
console.log(sum1)



let ran; /// under
let counAt = 0
do{
 ran = getRandomNumber(1, 15)
 counAt++
}while (ran !== 13)
    console.log(` WE GET 13    ${counAt} times` )