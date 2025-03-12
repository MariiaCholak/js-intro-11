

console.log('=========Task1=========')

/* 
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

const countPos = (nums) => {
    return nums.reduce((acc, curr) => {
        if(curr > 0 )  return acc + 1
     return acc;    
    }, 0)
}
console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))

console.log('=========Task2=========\n')

/*  Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/
const countA = (word) => {
    return word.split('').reduce((acc, curr) =>{
if( curr.toLowerCase())  return acc + 1
  return acc
    }, 0)
}
console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))

console.log('=========Task3=========\n')

/*Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0 
*/
const countVowels = (word) => {
    return word.split('').reduce((acc, curr) => {
if('aeoui'.includes(curr.toLowerCase()))  return acc + 1
return acc
    }, 0)
}
 
console.log(countVowels("Hello"))
console.log(countVowels("Hello World"))
console.log(countVowels("JavaScript is fun"))
console.log(countVowels(""))


console.log('=========Task4=========\n')

/*
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/
 const countConsonants = (word) => {
   return word.split('').reduce((acc, curr)=>{
  if (!('aeiou'.includes(curr.toLowerCase()))) acc + 1;
    return acc
   }, 0)
 }
 console.log(countConsonants("Hello"))
 console.log(countConsonants("Hello World"))
 console.log(countConsonants("JavaScript is fun"))
 console.log(countConsonants(""))

console.log('=========Task5=========\n')

/*Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") 
-> 6 countWords("1 2 3 4") 
-> 4
*/
const countWords = (word) => word.trim().split(' ').reduce((acc, curr) => {
  return acc + 1
   }, 0)
console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    "))
console.log(countWords("1 2 3 4"))

console.log('=========Task6=========\n')

/*
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
const factorial = (number) => {
  let result = 1
  for( let i = 1; i <= number; i++){
     result *= i
     }
     return result
    }


console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))



console.log('=========Task7=========\n')

/*Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

const isPalindrome = (word) => word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("abba"))
console.log(isPalindrome("ab  a"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome("A"))
console.log(isPalindrome(""))





console.log('=========Task8=========\n')

/*Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ]) 
-> 0
*/


 const countMultipleWords = (arr) => 
    arr.reduce((acc, curr) => {
        if (curr.trim().split(' ').length > 1) return acc + 1;   
        return acc;
}, 0 )

 
 console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]))
 console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   " ]))
 console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   "]))
 console.log(countMultipleWords([]))



console.log('=========Task9=========\n')

/*Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/
const count30rLess = (word) => word.split(' ').reduce((acc, curr) => {
if(curr.length <= 3 && curr.length > 0)  return acc + 1 ;
return acc 
}, 0)

console.log(count30rLess("Hello"))
console.log(count30rLess("Hi John"))
console.log(count30rLess("JavaScript is fun"))
console.log(count30rLess("My name is John Doe"))
console.log(count30rLess(""))

console.log('=========Task10=========\n')
/*
Write a function named as isPrime() which takes a 
number as an argument and returns true if the 
number is prime or returns false otherwise when 
invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/
const isPrime = (num)=> {
 if(num <= 1)  return false
 for(let i = 2; i * i <= num; i++) {
  if (num % i === 0) 
    return false;
}
return true
}
console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(0))
console.log('=========Task11=========\n')

/*
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
  let newArr = []
  let lengthArr = Math.max(arr1.length, arr2.length)
for(let i = 0; i < lengthArr; i++){
  const result = arr1[i] || 0
  const result2 = arr2[i] || 0
  newArr.push(result + result2)
}
return newArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))

console.log('=========Task12=========\n')
/*Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> "" 
*/

const removeExtraSpaces = (word) => word.trim().replace(/\s+/g, ' ')
console.log(removeExtraSpaces("Hello"))
console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))
console.log(removeExtraSpaces(""))

console.log('=========Task13=========\n')

/*Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/
const findClosesrTo10 = (arr) => arr.filter(num => num !==10).reduce((acc, curr) => {
  if((Math.abs(curr - 10) < Math.abs(acc - 10)) || (Math.abs(curr - 10) === Math.abs(acc - 10) && curr < acc)){
   return curr
  }
return acc
})

console.log(findClosesrTo10([10, -13, 5, 70, 15, 57]))
console.log(findClosesrTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosesrTo10([0, -1, -2]))

console.log('=========Task14=========\n')
/*
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

const isEmailValid = (email)=> {
  if(email.includes(' ')) return  false
if( email.split('@').length !== 2) return false
let [firstPart, secondPart] = email.split('@')
if(firstPart.length < 2 || secondPart.length < 3) return false
let dot = secondPart.indexOf('.')
if(dot === -1 ||secondPart.length - dot <= 2) return false
return true
}
console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo"))
console.log(isEmailValid("johndoe@.com"))
console.log(isEmailValid("a@outlook.com"))
console.log(isEmailValid("johndoe@a.com"))
console.log(isEmailValid("johndoe@@gmail.com"))
console.log(isEmailValid("johndoe@gmail.com"))


console.log('=========Task15=========\n')
/*
 
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/
const isPasswordValid = (email) => {
  if(email.length < 8 || email.length > 16)  return false
  if(email.includes(' ')) return  false
  if(!email.search(/\d/) === -1)  return false
  if (!email.search(/[A-Z]/) === -1) return false
  if(!email.search(/[a-z]/) === -1) return false
  return true
}
console.log(isPasswordValid(''))
console.log(isPasswordValid("abcd"))
console.log(isPasswordValid("abcd1234"))
console.log(isPasswordValid("Abcd1234"))
console.log(isPasswordValid("Chicago12345US!#$%"))
console.log(isPasswordValid("Abcd1234$"))
console.log(isPasswordValid("Chicago123$"))
console.log(isPasswordValid("Test1234#"))