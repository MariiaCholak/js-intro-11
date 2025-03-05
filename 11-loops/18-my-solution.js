const objects = [ 'Pen', 'Eraser', 'Board', 'Paper' ];
 for(let i = 0; i < objects.length; i++){
   console.log( objects[i])
 }

 const salaries = [ 1200.32542, 1500.345, 3000.349857 ];
 for(let i = 0; i < salaries.length; i++){
    console.log(salaries[i].toFixed(2))
 }
for(salary of salaries)
    console.log(salary.toFixed(2))

const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ]; 

// Log each name

 for(let i = 0; i < names.length; i++){
    console.log(names[i])
 }
let count = 0
 for( const name of names){
    if( name[0].toLowerCase() === 'j') count++
 }
    console.log(count)
    
    console.log(name.toLowerCase().startsWith('j'), count++)

    for(let i = 0; i < names.length; i++){
        if(name[i][0].toLowerCase() === 'j') count++
    }
let count1 = 0
    for(const name of names){
 if(name.length === 4) count1++
    }
    console.log(count1)

    const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4
 
let coun = 0;
for(number of numbers){
    if(number > 0) coun++}   
 console.log(coun)

 for(let i = 0; i < numbers.length; i++)
    if(numbers[i] > 0) coun++

 let counter = 0
 for( number of numbers){
    if(number % 2 === 0) counter++ }
    console.log(counter)

    for(let i = 0; i <numbers.length; i++){
        if(numbers[i] % 2 === 0) counter++
    }

    // Count how many positive-odd numbers you have in the array -> 2
console.log(`\n------TASK04-------\n`);

let coun = 0;
for(number of numbers){
    if(number > 0 && number % 2 !== 0)coun++}  
    
  for(number of numbers){
    if(number % 2 !== 0) count++
  }  
 console.log(coun)

let sum = 0
 for( const number of numbers){
    sum += number
 }
 console.log(sum)
 console.log(sum / number.length)

 let product = 1
 for(const number of numbers.slice(3))
   product *= number

 const numberss = [3, 4, 7, 3, 2, 2, 7]
 console.log('\n--------TASK-1--------\n');
 // Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum11= 0
for(let i = 0; i < numbers.length; i += 2)
sum11 += numbers[i]

let product11 = 1
for(let i = 0; i < numbers.length; i++)
   sum11 += numbers[i].numbers % 2 !== 0

const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];
// Put together all these elements from a1, a2 and a3 in a descending order
// in a new array -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]
let newAr = a1.concat(a2, a3).sort((a,b) =>(b-a))
console.log(newAr)

