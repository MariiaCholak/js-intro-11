const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0

for(let num of numbers)
sum += num 
console.log(sum)

console.log(sum / numbers.length)

// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84
console.log('\n--------TASK-2--------\n');


let product = 1
for(let i = 3; i <numbers.length; i++)   
    product *= numbers [i]
console.log(product)


for(let num of numbers.slice(3)) {   ///[3 2  2 7]
    product *= num }
console.log(product)




// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];
let firstOdd;
for( let city of cities){
    if(city.length % 2  !== 0) {
        firstOdd = city}
 

}
console.log(firstOdd)

const citiesWith5PlusChars = []
for(const city of cities){
    if(city.length > 5) citiesWith5PlusChars.push(city)
      
    }
console.log(citiesWith5PlusChars)