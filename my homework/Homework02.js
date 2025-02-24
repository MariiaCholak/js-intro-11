console.log('==========Task1=========\n');
/* 
Task 1
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
*/
let str1 = '5', str2 = '2';
let sum = parseInt(str1) + parseInt(str2);
let product = str1 * str2;
let division = str1 / str2;
let subt = str1 - str2;
let remainder = str1 % str2;
let exponantiation = str1 ** str2;

console.log(`The sum of ${str1} and ${str2} is = ${sum}`);
console.log(`The product of ${str1} and ${str2} is = ${product}`);
console.log(`The divisin of ${str1} and ${str2} is = ${division}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${subt}`);
console.log(`The remainder of ${str1} and ${str2} is = ${remainder}`);
console.log(`The exponantiation of ${str1} and ${str2} is = ${exponantiation}`);



console.log('\n===========Task2=========\n')

/*
Task 2
Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
*/

let s1 = "200", s2 = "-50";
let newS1 = parseInt(s1), newS2 = parseInt(s2);

let greatestValue = Math.max(newS1, newS2);
let smallestValue = Math.min(newS1, newS2);

let average = (newS1 + newS2) / 2;
let abs = Math.abs(newS1 - newS2)
 
console.log(`The greatest value is = ${greatestValue}`);
console.log(`The smallest value is = ${smallestValue}`);
console.log(`The average value is = ${average}`);
console.log(`The absolute difference value is = ${abs}`);

console.log('\n==========Task4=========\n')

/* 
Task 3 
Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22
*/

let r1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let abs1 = Math.abs(r1 - r2)
console.log(r1, r2)
console.log(`The absolute difference between numbers is = ${abs1}`)


console.log('\n========Task4=======\n')

/*
Task 4
Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers. 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/

let ra1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let ra2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let ra3 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let ra4 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let ra5 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;


let maxV = Math.max(ra1, ra2, ra3, ra4, ra5);
let minV = Math.min(ra1, ra2, ra3, ra4, ra5);

 console.log(ra1,   ra2, ra3, ra4, ra5);
console.log(`The max value = ${maxV}`)
console.log(`The min value = ${minV}`)



console.log('\n========Task 5 =======\n')
/*
Task 5
Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212

*/
let rand1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let rand2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let rand3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;



let sum1 = (rand1 + rand2 + rand3)
console.log(rand1, rand2, rand3)
console.log (`The number 1 = ${rand1}`)
console.log (`The number 2 = ${rand2}`)
console.log (`The number 3 = ${rand3}`)
console.log (`The sum of the numbers is = ${sum1}`)


console.log('\n========Task 6 =======\n')
/*

/* task 6
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25
**/

const { getRandomNumber } = require('./../utils/MathHelper.js');

let r11 = getRandomNumber(1, 100);
let r12 = getRandomNumber(1, 100);
let r13 = getRandomNumber(1, 100);
 console.log(r11, r12, r13)


let number = r11 >= 25;
let number2 = r12 >= 25;
let number3 = r13 >= 25;
console.log(number && number2 && number3) ////False


console.log('\n========Task 7 =======\n')


/*
 /*task 7
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
**/

   let name = 'David';

 console.log( `The lenght of the name is ${name.length}`)
 console.log(`The first character in the name is = ${name[0]}`) 
 console.log(`The last character in the name is = ${name.length - 1}`) 
 console.log(`The first 3 character in the name are = ${name.slice(0, 3)}`) 
 console.log(`The last 3 characters in the name are  = ${name.slice(-3)}`) 


 