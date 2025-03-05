const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
let sum = 0
// Find the sum of first 3 and last 3 elements -> 31
for(let num of [...nums.slice(0,3), ... nums.slice(-3)])   
    sum +=  num 
console.log(sum)

console.log('\n--------SOLUTION-1--------\n');
let sum1 = 0;

for(let i = 0; i <= 2; i++) {
  sum1 += nums[i];
}

for(let i = nums.length-3; i < nums.length; i++) {
  sum1 += nums[i];
}

console.log(sum1);

console.log('\n--------SOLUTION-2--------\n');
let sum2 = 0

for(const num of nums.slice(0, 3)) {
  sum2 += num;
}

for(const num of nums.slice(-3)) {
  sum2 += num;
}

console.log(sum2);



console.log('\n--------SOLUTION-3--------\n');

let sum3 = 0;

for(const num of [...nums.slice(0, 3), ...nums.slice(-3)]) {
  sum3 += num;
}

console.log(sum3);

console.log('\n--------SOLUTION-4--------\n');
let sum4 = 0;

for(let i = 0; i <= 2; i++) {  // i = 0, 1, 2
  sum4 += nums[i] + nums.at(-1 - i);
}

console.log(sum4);

///const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
console.log('\n--------TASK-1--------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19





const numbers = [3, 4, 7, 3, 2, 2, 7]
console.log('\n--------TASK-1--------\n');
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19
let sumForEvenIndex = 0;

for(let i = 0; i < numbers.length; i += 2) { // i = 0, 2, 4, 6
  sumForEvenIndex += numbers[i];
}

console.log(sumForEvenIndex);

// Find the product of numbers that has odd index -> 4 * 3 * 2 -> 24
console.log('\n--------TASK-2--------\n');
let productOfOddIndex = 1;

for(let i = 1; i < numbers.length; i += 2) {
  productOfOddIndex *= numbers[i];
}

console.log(productOfOddIndex);


