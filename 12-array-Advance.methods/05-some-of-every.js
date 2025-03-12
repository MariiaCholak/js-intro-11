const numbers = [1, 2, 3, 4, 5] //// - 1
//// numbers are positive
//let flag = true; /// num are positive
/*(const num of numbers){
    if(num <= 0){
        flag = false;
        break;
    }
}
console.log(flag)/// true     if neg
numbers.forEach((x) => {
    if(x <= 0) flag = false;
})*/

let allPosotive = numbers.every((x) => x > 0)
console.log(allPosotive)

const cities = ['Chicagi', 'Berlin', 'Rome']
 let some6 = cities.some(x => x.length === 6 )
 console.log(some6)



 const numbers1 = [ 1, 2, -1, 4, 0 ];

// check if all numbers in the array are positive 

// let flag = true; // I assume all the numbers are positive 

// for(const num of numbers) {
//   if(num <= 0) {
//     flag = false;
//     break;
//   }
// }

// console.log(flag); // true

let allPos = numbers1.every((x) => x > 0);

console.log(allPos);


const cities1 = [ 'Chicago', 'Berlin', 'Rome' ];

// Check if any city has 10 letters -> false 
let some61 = cities.some((x) => x.length === 10);

console.log(some6);