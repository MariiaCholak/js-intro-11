const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4
let count = 0;
for(let number of numbers)
    if( number >= 1 ) count++  ///// >0
console.log(count)

const numbers1 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many negetive numbers you have in the array -> 4
let count1 = 0;
for(let number of numbers1)
    if( number < 0 ) count1++  ///// 
console.log(count1)


// Count how many even numbers you have in the array -> 7
console.log(`\n------TASK03-------\n`);

const numbers2 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let count2 = 0;
for(let number of numbers2)
    if( number % 2 === 0 ) count2++  
console.log(count2)

// Count how many positive-odd numbers you have in the array -> 2
console.log(`\n------TASK04-------\n`);

let countPosOdd = 0;

for(const num of numbers) {
  if(num > 0 && num % 2 !== 0) {
    countPosOdd++;
  }
}

console.log(countPosOdd);
