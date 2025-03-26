console.log('=========Task1=========')
/*
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal
*/

const noSpace = ((string) => string.split(" ").join(''))   /// tge best way delete all space
console.log(noSpace(""))
console.log(noSpace("Javascript"))
console.log(noSpace("    Hello   "))
console.log(noSpace(" Hello World   "))
console.log(noSpace("Tech Global"))
///// loop  way
let str  = ''   // conteiner for result
for(s of str){
   if (s !== ' ') resutn += s;
}
return result/// but loop not prefer

///filter
//  it's arr function first we need to  conver our string to arr and filter by evety char which not  ' " ", and then joinour arr beck
 //      return.string.split('').filter( char !== ' ').join('')  /// character not = space


console.log('=========Task2=========\n')
/*
Requirement:
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""

*/
      /// we need to trim, use if statemnt to check length. but first trim
   const replaceFirstLast = (string) =>{
    string = string.trim();      /// reassig str and delete all spaces
    if (string.length < 2) return ""  ;
    return string.at(-1) + string.slice(1, -1) + string[0];
   }   ////  return str[str.length - 1] + str.slice(1, str.length - 1)     ///  slice start from first index you give and go to end but not includes last one

/// ternary good to use when it's one condition
return str.length < 2 ? "" : string.at(-1) + string.slice(1, -1) + string[0];
///// before : -- if the statement is true,    after : if it's false 

console.log(replaceFirstLast(""))
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast("    A      "))


console.log('=========Task3=========\n')
/*
Requirement:
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true

*/
 const hasVowel = (str) =>{
   const vowels = ['a', 'e', 'o', 'u', 'i']   /// our condition lower case
  str = str.toLowerCase()
   for(let letter of str){
   
   if(vowels.includes(letter)) {
      return true
   }
}
   return false
 
}
///// filter
const hasVowel1 = (str) =>{
   const vowels = ['a', 'e', 'o', 'u', 'i']
        /// filter works only w arr that's why we nned first split to conver it to arr
   return str.toLowerCase().split('').filter(s => vowels.includes(s)). length > 0
}
/// first convert to arr, then filter arr which has only vowel and then length >   return true, if not it's mean flse
console.log(hasVowel(""))
console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))
console.log(hasVowel("ABC"))

console.log('=========Task4=========')
/*
Requirement:
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID
*/
const checkAge = (yearOfBirth) => {
   let currentYear = new Date().getFullYear();   // we make it Dynamic and not harcod, and give out today year
   let age = currentYear - yearOfBirth   /// we need to calculate age 
      if (age  <  16) return  "AGE IS NOT ALLOWED"
      else if(age >= 16 && age <= 120) return  "AGE IS ALLOWED"    /// ми могли помінати місцями і не писати це а просто написати після всіх умов gthtdshtyb[ ] що не дозволенні, return  allowed
      else if  (age  > 120  && age < 0) return "AGE IS NOT VALID"
   
   return "AGE IS NOT VALID"
}

console.log(checkAge(2015))
console.log(checkAge(2007))
console.log(checkAge(2050))
console.log(checkAge(1920))
console.log(checkAge(1800))

console.log('=========Task5=========\n')
/*
Requirement:
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/
const  averageofEdges = (num1, num2, num3 ) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2;
/// ми видалили нашу вер result {} і зробили одну лінію
console.log(averageofEdges(0, 0, 0))
console.log(averageofEdges(0, 0, 6))
console.log(averageofEdges(-2, -2, 10))
console.log(averageofEdges(-3, 15, -3))
console.log(averageofEdges(10, 13, 20))


console.log('=========Task6=========\n')
/*
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/
const  noA = (arr) => {
   arr.forEach((str, index) => {
   if(str.toLowerCase().startsWith('a')) arr[index] = '###';
})
return arr;
}
///// map  takes callback, x everytime will take next indexend we need return
const  noA1 = (arr) => { 
  return arr.map(x => {        ///// this consider return 1 arr,  we added return at the beginninh to return for each
if(x.toLowerCase()[0] === 'a') return '###'//// перевірили першу букву якщо співпало поаертаємо##  якщо ні слово назад
return x;
 })  }
 // ternary operator for one condition(if. else) // arrow function we can remove return and{}
 const  noA11 = (arr) => arr.map(x =>  x.toLowerCase()[0] === 'a' ? '###' : x)
                                              ///      first condition, then ? , before :  - if this conddition is true return this, after : - false
console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))


console.log('=========Task7=========')
/*
Requirement:
Write a function named no3and5() which takes an array of integer numbers 
as argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]

*/
///// we start w condition 3 and 5 because it's largest conditions
//// we can use loop or arr function, map
const  no3and5 = (arr) => {
   arr.forEach((el, ind) => {
      if(el % 5 === 0 && el % 3 === 0) return arr[ind] = 101;
      else if( el % 5 === 0) return arr[ind] = 99;
      else if(el % 3 === 0) return arr [ind] = 100;
   })
   return arr

}
 //it's loop every index and return result which metch
const  no3and55 = (arr) => {
   return arr.map((num) => {  //// ми поставили return  на початку щоб весь абзац повернувся
      if(num % 5 === 0 && num % 3 === 0) return  101;
      else if( num % 5 === 0) return  99;
      else if(num % 3 === 0) return  100;
      return num    /// if it's not mathcing
   })


}
 console.log(no3and5([7, 4, 11, 23, 17]))
 console.log(no3and5([3, 4, 5, 6]))
 console.log(no3and5([10, 11, 12, 13, 14, 15]))

console.log('=========Task8=========\n')
/*
equirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

const isPrime = (num) => {
  
 if ((num <= 1 )) return false;
 if (( num % 2 === 0 || num % 3 === 0)) return false;
 if (num === 2 || num === 3) return true
 
 let divisible = 5
 while(divisible * divisible <= num) {
 if(num % divisible === 0) return false 
  divisible += 6;
 }
 return true
}
const countPrimes = (arr) => {
return arr.reduce((acc, curr) => {
if(isPrime(curr)) acc++;
return acc
 }, 0)
}
//// teacher decision using arr
const countPrimes1 = (arr) => {
   return arr.filter(num => {   //filter arr  has num of index that follow to condition if it true add num to arr, if false don't add
      if ((num < 2 )) return false;    /// it's not prime, prime start from 2
    if ( num % 2 === 0) return false;    /// means if it's even or odd
   
      for(i = 3; i < num; i+=2){ /// we start loop, loop through number, i < num(itself)  loop before our num , WE started from our 3, because it first num to star check and then we +=2. every 2 num check next
    if(num % i === 0) return false    //means it whole num, and it's not prime, but it's too big iteration we need to limit it
   }
return true;
}).length   /// add all our arrr, and at the end give us back how many them do we have
} 
   
console.log(countPrimes([-10, -3, 0, 1]))
console.log(countPrimes([7, 4, 11, 23, 17]))
console.log(countPrimes([41, 53, 19, 47, 67]))

console.log('=========Task9=========\n')
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/
/// we need to go every single num of index of arr, creat conteiner add every index of arr if it's not add there, and filter arr if it there or not
 const removeDuplicates = (array) => {
let allDublicates = []
let conteiner = [] 
for(let obj of array){
if (conteiner.includes(obj))  allDublicates.push(obj)
   else conteiner.push(obj)
}
return conteiner
 }

 /// for Each
 const removeDuplicates1 = (array) => {
 let result = []
 arr.forEach(i => {
   if(!result.includes(i)) result.push(i)   /// means we find dublicates, if it doesn't find i, we need thet i to our result 
 })     /// if i not in result we need to add it
 return result
}
 console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
 console.log(removeDuplicates([0, -1, -2, -2, -1]))
 console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))
 console.log(removeDuplicates(["1", "2", "3", "2", "3"]))


console.log('=========Task10=========')
/*
Requirement: 
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/

 const isDateFormatValid = (str) => {
  if(str.length === 0) return false
  const parts = str.trim().split('/');
  if (parts.length !== 3) return false;
 const month = parts[0];
const day = parts[1];
const year = parts[2];
if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false
if (month > 12) return false 
return true
 }

 /// teacher way
 const isDateFormatValid1 = (str) => {
const dateAsArr = date.split('/')
if (dateAsArr.length !== 3) return false;
const month = date.split('/')[0];
const day = date.split('/')[1];
const year = date.split('/')[2];
if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false
if (month > 12 || month < 1) return false
if (day < 1  || day > 31) return false
if (year < 1) return false    //// 0000 would give us true
return true
 }

console.log(isDateFormatValid("")) 
console.log(isDateFormatValid("15/30/2020"))
console.log(isDateFormatValid("10-30-2020 "))
console.log(isDateFormatValid("10.30.2020"))
console.log(isDateFormatValid("5/30/2020"))
console.log(isDateFormatValid("05/30/2020 "))
console.log(isDateFormatValid("10/2/2020"))
console.log(isDateFormatValid("10/02/2020 "))

console.log('=========Task11=========\n')
/*
Requirement: 
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/

const secondMax1 = (arr) => {
let max = -Infinity
let secondMax = -Infinity
 
for(let num of arr) {
   if(num > max) {
      secondMax = max;
   max = num; 
   }
 else if(num > secondMax && num < max){
      secondMax = num;
   } 
}
  
   if (arr.length === 1) return arr[0]
   else  return secondMax

}


/// sort, teacher like it, but interwier doesan't like it, because it easy
const secondMax2 = (arr) => {
const sortArr = arr.sort((a, b) => b - a)      /// sort has probjem w acii table count 1 22 4 
                   ///loop  through arr to find second max and find num which not equel first num we started from back largest to smallest
         ///max is going be the first index of arr is always max num if you sort
for(num of sortArr)
if(num !== sortArr[0]) return num;
return sortArr[0]
}


/// way without sort   create var for max, for second max, loop arr, if num > max then reasigth max os recond max what we find
const secondMax3 = (arr) => {
let max = arr[0]   /// we took first index because we start from beginning
let secondMax;
for(let num of arr) {
   if(num > max) {      //neans we find max
      secondMax = max;  
   max = num;  /// num whisch we found
   }
   else if(num > secondMax && num !== max){    /// if num not max, check if num second max
      secondMax = num;
   } 
}
return secondMax || max    /// типу поверни назад 10
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([3, 4, 5, 6]))
console.log(secondMax([10]))




console.log('=========Task12=========\n')
/*

Requirement: 
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10])  -> 10
*/
 const secondMin = (arr) => {
   let min = Infinity
   let secondMin = Infinity
   
   for(let num of arr) {
      if(num < min) {
         secondMin = min;
      min = num; 
      }
    else if(num < secondMin && num > min){
         secondMin = num;
      } 
   }
     
      if (arr.length === 1) return arr[0]
      else  return secondMin
   
 }
 /// sort   from smallest num
const secondMax31 = (arr) => {
    const secondM = arr.sort((a, b) => a - b)   /// our first num is minimum 
    for(let num of arr)
      if(num !== secondM[0])return num  //// if our num not == our first min we will take next one our min
    return arr[0]     //// return when it's only one num
   }

 console.log(secondMin([7, 4, 4, 4, 23, 23, 23]))
 console.log(secondMin([3, 4, 5, 6]))
 console.log(secondMin([10]))


console.log('=========Task13=========')
/*
Requirement: 
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> 
"pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> 
"TechGlobal"
*/
/// 
 const mostRepeated = (arr) => {
let mostCount = []    /// we will add new indexses of arr
let maxCount = 0
let mostRepeatedEl; // we will return it at the end
for( const el of arr){   /// now we loop
    mostCount[el] = (mostCount[el] || 0) + 1
 
   if (mostCount[el] >  maxCount){  /// if  count is inside of coiunt it will give true
      maxCount = mostCount[el]
         mostRepeatedEl = el
   }
}
return mostRepeatedEl
 }

 ///teacher way
 const mostRepeated11 = (arr) => {
   let count = []    /// we will add new indexses of arr
   let largerCount = 0    /// 
   let mostRepeatedEl; // we will return it at the end
   for( const el of arr){   /// now we loop
      if (count[el])  /// if it inside coiut 
         count[el]++//// we increase 
      else 
      count [el] = 1  /// якщо ні то додай елемент до нашого ерей
   ////// we will be count a different in arr
   if(count[el] > largerCount)   ///  means we found an element thar  has  larger count 
largerCount = count[el]
mostRepeated=el   /// itself
   }
   return mostRepeated
      }
   
 console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]))
 console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))
 console.log(mostRepeated([10]))
 console.log(mostRepeated(["TechGlobal"]))
