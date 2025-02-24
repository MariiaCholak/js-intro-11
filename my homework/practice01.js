/* 
Task 1
Requirement:
Write a program that generates a random number between 0 and 50
(both 0 and 50 are included)
Multiply number with 5 and print the result with below message
Expected result:
The random number * 5 = {result}
*/

console.log( "===========Task1=============\n");
// надає перевагу Math.floor

// let r2 = Math.floor(Math.random() * (max - min + 1)) + min(start point);
// let rand =  Math.floor(Math.random() * (50 - 0 + 1)) + 0; // ми можемо 0 не писати просто видалити в кінціб і в дужках теж написати 51
console.log(rand);
let result = rand * 5;
console.log(`The random number * 5 = ${result}`); 
// or I can do another way without let result = rang *5
console.log(`The random number * 5 = ${rand * 5}`); ///short version
// все що в дужках назива.ть argument

console.log("\n===============Task2============\n")
/* 
Requirement:
Write a program that generates two random numbers between 1 and
10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

let ran1 = Math.ceil(Math.random() * (10 - 1 + 1)) + 0;
let ran2 = Math.ceil(Math.random() * (10 - 1 + 1)) + 0;
console.log(`The random numbers are ${ran1}, ${ran2}`);
let max1 = Math.max(ran1, ran2);
let min1 = Math.min(ran1, ran2);
console.log(` Max number = ${max1}`);
console.log(`Max min number = ${min1}`);

let abdDiff1 = Math.abs(ran1 - ran2);
console.log(`The difference is ${abdDiff1}`);

/// 2 ways to find the ablosute 
let abdDiff11ь = Math.abs(ran1 - ran2); // якщо значення буде - воно перекладе в +
 let abdDiff2 = max1 - min1;

 /// 3 шляхи написати результат 
 console.log("Min number = " + Math.min(ran1, ran2));
 console.lod(`Max number = ${Math.max(ran1, ran2)}`);   /// the best
 console.lod("Difference = ", Math.abs(ran1 - ran2));

 console.log(`\n==============Task3========\n`);

 /*
 Requirement:
Write a program that generates a random number between 50 and
100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}
*/

let random1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(random1);
console.log(`The random number % 10 = ${random1 % 10}`)
////( devide it by 10) 51/10=1 50/10=0



console.log(`\n============Task4========\n`)

/*
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and
10 are included)
Calculate some points based on numbers generated. So, the points will be
calculated as below
1st number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59
*/
////  я зробила
let ra1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let ra2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let ra3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let ra4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let ra5 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let result1 =  ra1 * 5;
let result2 =  ra2 * 4;
let result3 =  ra3 * 3;
let result4 =  ra4 * 2;
let result5 =  ra5 * 1;
let score1 = result1 + result2 + result3 + result4 + result5;
console.log(score1)

///// або
let ra12 = Math.floor(Math.random() * (10) + 1) * 5;
let ra22 = Math.floor(Math.random() * (10) + 1) * 4;
let ra33 = Math.floor(Math.random() * (10) + 1) * 3;
let ra44 = Math.floor(Math.random() * (10)+  1) * 2;
let ra45 = Math.floor(Math.random() * (10)+  1); /// * можемо не писати

let score = ra12 + ra22 + ra33 + ra44 + ra45;

console.log(score)


///second way better 
//way 2
let score12 = 0;


const r1 = (Math.floor(Math.random() * 10) + 1);
score12 += r1 * 5;
//score = score + (r1 * 5)
const r2 = (Math.floor(Math.random() * 10) + 1);
score12 += r2 * 4;

const r3 = (Math.floor(Math.random() * 10) + 1);
score12 += r3 * 3;

const r4 = (Math.floor(Math.random() * 10) + 1);
score12 += r4 * 2;

const r5 = (Math.floor(Math.random() * 10) + 1);
score12 += r5;

console.log(r1,r2,r3,r4,r5)
console.log(score12)

console.log(`\n============Task5========\n`)




/* 
Requirement:
Write a program that generates 4 random numbers as below;
1st number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/
let num1 = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
let num2 = Math.floor(Math.random() * (50 - 26 + 1)) + 26;
let num3 = Math.floor(Math.random() * (75 - 51 + 1)) + 51;
let num4 = Math.floor(Math.random() * (100 - 76 + 1)) + 76;
console.log(num1, num2, num3, num4);
let maxN = Math.max(num1, num2, num3, num4);
let minN = Math.min(num1, num2, num3, num4);
let result0 = maxN - minN;
console.log(`Difference of max and min = ${result0}`);
/// або як вчитель зробив 
console.log(`Difference of max and min = ${Math.abs(maxN - minN)}`);

let result11 = num3 - num2;
console.log(`Difference of second and third = ${result11} `)
//// або як вчитель зробив
console.log(`Difference of second and third = ${Math.abs(num2 - num3)}`); 

let avg = (( num1 + num2 + num3 + num4) / 4);
console.log(`Average of all = ${avg}`)
//// чат дпт сказавмій код працює ідентично як другий вчителя, аде другий краще але ти молодець =)

const random_1_25 = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
const random_26_50 = Math.floor(Math.random() * (50 - 26 + 1)) + 26;
const random_51_75 = Math.floor(Math.random() * (75 - 51 + 1)) + 51;
const random_76_100 = Math.floor(Math.random() * (100 - 76 + 1)) + 76;
console.log(random_1_25, random_26_50, random_51_75, random_76_100);

console.log(Math.max(random_1_25,random_26_50,random_51_75,random_76_100))

const diffMaxMin = random_76_100 - random_1_25;
const diff2_3 = random_51_75 - random_26_50;
const avg1= (random_1_25 + random_26_50 + random_51_75 + random_76_100) / 4;

console.log(`Difference of max and min = ${diffMaxMin}`)
console.log(`Difference of second and third = ${diff2_3}`)
console.log(`Average of all = ${avg1}`)

