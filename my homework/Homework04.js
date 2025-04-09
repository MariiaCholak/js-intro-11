


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

//// second solution go down from beggest num to 1(let say rand is 5, lets start 5 4 3 2 1)
let random01 = Math.floor(Math.random() * 10 ) + 1;
let factorial01 = 1;     /// let factorial01 = random   (FACTORIAL = to the random num)
console.log(random01)
for( let i = random01; i >= 1; i--){     /// stop when it's 1.     // let i = random01-1 (для верхнього зеленого прикладу)
    factorial01 *= i                     //   we take out one of the iteration  short our code to work   
}
console.log(factorial01)



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
do{
    random1 = Math.floor(Math.random() * 100 ) + 1;
        attemptsRandom++      ////everytime we enter this loop 
}
while(random1 % 5 !== 0) {       // if while condition it's true then it's will go again run the code, we want to leave the loop when it's divisible by 5
   /// means if it's not remainder  of 5 then it will go again, if it's %5 it's stop there and exit the loop
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

console.log(dogs)
console.log(dogs.includes("Pluto"))

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
const catsInclude = cats.includes('Gardiled') && cats.includes('Felix')

console.log(cats.sort())
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
// we need to loop numbers 
 console.log(numbersA)
 for(let i = 0; i < numbersA.length; i++)   // i = 0 because ut's start index,  and it's go to the end of the arr
    console.log(numbersA[i]) //// no matter how long the arr, it's print each index of numbers
/// recomended to use for of loop - we use it for arr, when we need to loop entire arr
 for( const num of numbersA)    // num is num is each numbers of arr
    console.log(num)
    
   ///  forEach way to do. It's a high levelfunction used to calledback each element
   
   numbersA.forEach((num) => console.log(num))      /// it's make JS easier


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
let startBP = 0    // we create container, and when we find start we add it to our container
let includesElement = 0
for(let object of studyObject){   //means take object from each objects
    if(object[0].toLowerCase() === 'b' || object[0].toLowerCase() === 'p')
        startBP++   // add matching to conteiner
}
for(let element of studyObject){
    if(element.toLowerCase().includes('book') || element.toLowerCase().includes('pen'))
includesElement++
}
console.log(studyObject)
console.log(`Elements starting with 'B' or 'P' = ${startBP} `)
console.log(`Elements having 'book' or 'pen' = ${includesElement} `)

 /// or second way to check
 const studyObject1 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']
let startBP1 = 0    // we create container, and when we find start we add it to our container
let includesElement1 = 0
 for(let object of studyObject1){    /// and it means we change olny for this instance, outside our Pan still start with uppercase Pan, we didn't change the origin
    object = object.toLowerCase()
    if(object.startsWith('b') || object.startsWith('p')) startBP++
    /// it's all inside our loop
/// for second part of task since we lowercase it we don't need to lower case everythin again
if(element.includes('book') || element.includes('pen'))
    includesElement++     /// because everuthng already lower
}

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
//// since we know we need to check every index of the arr it's a loop we need loop arr
// for of and for each works the same
for(let element of newArray3){
    if(element > 10)  moreThen10++
     else if (element < 10) lessThen10++
     else  element10++    /// has to be 10 itseelf
}
   ///// people make mistske when do else if( number ===10) element10++, it looks like work, but not good. It's only possible num left it's 10, we don't need to check
 /// or another way do to it with forEach. teacher like more forEach
   newArray3.forEach((element) => {
    if(element > 10)  moreThen10++
     else if (element < 10) lessThen10++
     else  element10++  
     })
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
//// what is the larger put it to our conteiner
const firstArray = [ 5, 8, 13, 1, 2 ]
const secondArray = [ 9, 3, 67, 1, 0 ]
const thirdArray = []
 //// reason why we use for i loop instead of (for of loop) we utilize that i, we use index i to up value
for(let i = 0; i < firstArray.length; i++)    ///because we know these arr are the same length we can take any of them and use the length of that arr . Is these were two different lengths of arr then we woild check which one is the larger one or smaller one
    thirdArray.push(Math.max(firstArray[i], secondArray[i]))
// we push our result to our conteiner, and need to find which one is the largest between two INdexes
/// і воно по черзі буде брати кожен індекс та перевіряти який з них більше (5, 9)тоді (8. 3) 
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
/// with each element in the arr we check every index after
// okay it's take first index of 0, then go into first itteration of loop, and go to the rest indexes
function firstDuplicate(array){      
    for(let i = 0; i < array.length; i++){//// we need to compare every number after first index(exam 5 after 5), ot goes to check every index of arr
     for( let j = i + 1 ; j < array.length; j++){/// we dont need to have j the same as i, if i is [0], we need to start from the one after if i 0, j is 1, when i is 1 j is 2
     if(array[i] === array[j])  return array[i]    // then we have a match, if we have a match return i
     } 
    }                      
    return -1        // if the no dublicates return -1
 }     
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]))
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]))
console.log(firstDuplicate([5, '5', 3, 7, 4] ))
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']))
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
    let dublicates = [];
    for(let i = 0; i < array.length; i++) {   ///check every index of arr
        for( let j = i + 1 ; j < array.length; j++){/// start from next index, where i index start from next one
            if(array[i] === array[j] && !dublicates.includes(array[i]))  dublicates.push(array[i] )     /// we get 0 three times, because it's add  every ele if it's true,  when we find a match we also wants to see if that match is already added to duplicate. (if they match check if it's already contains)
            // && !dublicates.includes(arr[i]))  but when it's check it's return true, that why we need !not false , if duplicate is  not includes that variable (if t's includes, it becomes false and not edit at the dublic)   /0,7
            }
    }
      return dublicates
        } 
     /// second way to do it, better because it's not nested, and smaller then loop
     function getDuplicates(array){
        let container = []
        let allDublicates = [];
        for(let obj of array) {    // we don't use for i loop, ealier to use for loop because we don't need to use index, since weare doinf one loop throught the arr
     if(container.includes(obj) && !allDublicates.includes(obj)) allDublicates.push(obj)  //// if find dubl add them, but id it includes dont add
    else container.push(obj)/// if it's not in conteiner add it 
        }
return allDublicates
        }
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo']))
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
    let words = string.trim().split(' ')    // we get our string as array and spit by spaces
    let reverseString = []

    for(let i = 0; i < words.length; i++){/// створили луп бо треба переглянути кожен розділений елемент
       words[i] =  words[i].split('').reverse().join('') // it's how we reverse it/ reverse it's a arr function and doesn't works w string what wgy we convert it using split(''), we made separate arr it's splt each string into arr, and know we use join function to return it back to string from arr
    }  
    return words.join(' ') //// join them by places now it's string
    
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
let numbers = []   // created cont for even
let biggest = Math.max(num1,num2) /// need to find smaller and biggest num
let smallest = Math.min(num1,num2)  //// now we need looping through this range starting from smaller, stopping at the largest num, including larger

for(let i = smallest; i <= biggest; i++){ /// because <= greater num is includes =
   if( i % 2 === 0)  numbers.push(i)   // know we check if i is even num if ies ot will add to our var
}    // ти вжила смолест % 2 це не правильно треба писати i!!    після того ми додали і до контейнеру лише парні
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

*/   /// ми маємо інше кондиш ми маємо умову почати від меншого до більшного і від більшлго до меншого, тому ми робимо дві умови з двома луп щоб якщо посинаються з меншого почни однуб якщо з більшого роби іншу луп
function getMultipleOf5( num1, num2){
    let divisible = []
      if(num1 > num2)  { /// we are going loopenig backwards, else will be looping like normal
        for(let i = num1; i >= num2; i--){  /// means greater num is first , i=larger num, i -- go down
        if(i % 5 === 0) divisible.push(i)
        }
    }
    else {
        for( let i = num1; i <= num2; i ++){
        if(i % 5 === 0 ) divisible.push(i)
    }
    }
    return divisible

    ///// second way
    /*
function getMultipleOf5( num1, num2){
    let divisible = []
        for(let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--){  
        if(i % 5 === 0) divisible.push(i)
        }
        if(num1 < num2) return divisible.reverse()   //// щоб повернути наше значення якщо воно йде з більшого до меншого
        return divisible
}
    */
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
  for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++)  { ///we use <=  = because they are both inclusive                                ///// починаємо від меншого бо в завданні сказано від меншого до більшого 
    if(i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz")  /// we started with this condition specificly! бо якщо ми перевіримо чи вони дивізибил 3 а тоді 5 а тоді (3 та 5)ми ніколи не отриємо 3та5. бо ці номери що дівісибилб будуть перші додані та стануть фіз наприклад
        else if( i % 3 === 0) result.push("Fizz")
            else if( i % 5 === 0) result.push("Buzz")
                else result.push(i);
  }
  return result.join(' | ')
}
console.log(fizzBuxx(13, 18))
console.log(fizzBuxx(5, 5))
console.log(fizzBuxx(12, 5))

//// дуже схожий спосіб мій та чат
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
