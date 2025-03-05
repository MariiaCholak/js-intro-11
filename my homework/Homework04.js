


console.log('=========Task1=========')

/*   Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
.
*/
for(let i = 1; i <= 100; i++){
    if( i % 7 === 0) console.log(i)
}




console.log('=========Task2=========\n')


/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
36
42
48

*/
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0)
        console.log(i)
}

console.log('=========Task3=========\n')
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
85
.
.
.
60
55

*/
for( let i = 100; i >= 50; i--){
    if( i % 5 === 0) console.log(i)
}

console.log('=========Task4=========\n')
/*
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49

*/

for(let i = 0; i <= 7; i++){
   let square = i * i
   console.log(`The square of ${i} is = ${square}`)
}


console.log('=========Task5=========\n')
/*
Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55

*/
let sum = 0
for(let i = 1; i <= 10; i++){
    sum += i
}
    console.log(sum)


console.log('=========Task6=========\n')
/*
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1

*/
let random = Math.floor(Math.random() * 10 ) + 1;
let factorial = 1;
console.log(random)
for( let i = 1; i <= random; i++){
factorial *= i
}
console.log (factorial)



console.log('=========Task7=========\n')
/*
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.

*/

let random1;
let attemptsRandom = 0;
while(random1 % 5 !== 0) {
     random1 = Math.floor(Math.random() * 100 ) + 1;
        attemptsRandom++    
    }
console.log(`The random number is ${random1} and it took 
    ${attemptsRandom} attempt/s to generate it.`)

console.log('=========Task8=========\n')
/*
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]

*/
 const countries  = ['Germany', 'Argentina', 'Ukraine', 'Romania']

console.log(countries)
console.log(countries.sort())
console.log('=========Task9=========\n')
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/
const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']

let dog = dogs.includes("Pluto")

console.log(dogs)
console.log(dog)
console.log('=========Task10=========\n')
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
 
*/

const cats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael']
cats.sort()

const catsInclude = cats.includes('Gardiled') && cats.includes('Felix')

console.log(cats)
console.log(catsInclude)


console.log('=========Task11=========\n')
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
 const numbersA = [10.5, 20.75, 70, 80, 15.75]

 console.log(numbersA)
 for(let i = 0; i <= numbersA.length - 1; i++)
    console.log(numbersA[i])



console.log('=========Task12=========\n')
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4

*/
const studyObject = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
let startBP = 0
let includesElement = 0
for(let object of studyObject){
    if(object.toLowerCase()[0] === 'b' || object.toLowerCase()[0] === 'p')
        startBP++
}
for(let element of studyObject){
    if(element.toLowerCase().includes('book') || element.toLowerCase().includes('pen'))
includesElement++
}
console.log(studyObject)
console.log(`Elements starting with 'B' or 'P' = ${startBP} `)
console.log(`Elements having 'book' or 'pen' = ${includesElement} `)




console.log('=========Task13=========\n')
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

*/
const newArray3 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let moreThen10 = 0
let lessThen10 = 0
let element10 = 0

for(let element of newArray3){
    if(element > 10)
        moreThen10++
     else if (element < 10)
        lessThen10++
     else 
        element10++
}

console.log(newArray3)
console.log(`Elements that are more than 10 = ${moreThen10}`)
console.log(`Elements that are less than 10 = ${lessThen10}`)
console.log(`Elements are 10 = ${element10}`)

console.log('=========Task14=========\n')
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]

*/

const firstArray = [ 5, 8, 13, 1, 2 ]
const secondArray = [ 9, 3, 67, 1, 0 ]
const thirdArray = []

for(let i = 0; i < firstArray.length; i++)
    thirdArray.push(Math.max(firstArray[i], secondArray[i]))

console.log(`1st array is = ${firstArray}`)
console.log(`2nd array is = ${secondArray}`)
console.log(`3rd array is = ${thirdArray}`)

console.log('=========Task15=========\n')
/*
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1

*/

function firstDuplicate(array){
    let dublicate = []
    for(let i = 0; i < array.length; i++){
      if(dublicate.includes(array[i]))  return array[i] 
else dublicate.push(array[i])
}
    return -1  
 }
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4] ))
console.log(([123, 'abc', '123', 3, 'abc']))
console.log(firstDuplicate([1, 2, 3 ]))


console.log('=========Task16=========\n')
/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]

*/
function getDuplicates(array){
    let check = []
    let dublicates = []
    for(let i = 0; i < array.length; i++) {
        if(check.includes(array[i])) {
            if(!dublicates.includes(array[i])) {
                 dublicates.push(array[i])
            }

         } else {
             check.push(array[i]) }
         }
        return dublicates 
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates([`'A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo'`]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))

console.log('=========Task17=========\n')
/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""

*/

function reverseStringWords(string){
    let words = string.split(' ')
    let reverseString = []

    for(let i = 0; i < words.length; i++){
       let newReverse =  words[i].split('').reverse().join('')
        reverseString.push(newReverse)
    }  
    return reverseString.join(' ')
    
}
console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))


console.log('=========Task18=========\n')
/*

Requirement:
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]

*/
function getEvens(num1, num2){
let numbers = []
let biggest = Math.max(num1,num2)
let smallest = Math.min(num1,num2)
if( smallest % 2 !== 0) smallest++
for(let i = smallest; i <= biggest; i+= 2){
    
        numbers.push(i)
}
return numbers

}
console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))


console.log('=========Task19=========\n')
/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]

*/
function getMultipleOf5( num1, num2){
    let divisible = []
      let biggest = Math.max(num1,num2)
    let smallest = Math.min(num1,num2)
    if( smallest % 5 !== 0)  smallest += (5 - smallest % 5)
        for(i = smallest; i<=biggest; i+=5){
    divisible.push(i)
       
}
return divisible  
 }

console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5,5))
console.log(getMultipleOf5(2, 4))



console.log('=========Task20=========\n')
/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"fizzBuzz(5, 5) -> "Buzz"fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"

*/
function fizzBuxx(num1, num2){
let result = []
let smallest = Math.min(num1, num2)
let biggest = Math.max(num1, num2)
for( let i = smallest; i <= biggest; i++)
    if(i % 3 === 0 && i % 5 === 0)
        result.push("FizzBuzz")
        else if( i % 3 === 0) result.push("Fizz")
            else if( i % 5 === 0) result.push("Buzz")
        else result.push(i);
    
return result.join(' | ')
}
console.log(fizzBuxx(13, 18))
console.log(fizzBuxx(5, 5))
console.log(fizzBuxx(12, 5))
