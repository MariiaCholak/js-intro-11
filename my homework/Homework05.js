

console.log('=========Task1=========')

/* 
Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5 , 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

const countPos = (nums) => {
    return nums.reduce((acc, curr) => {
        if(curr > 0 )  return acc + 1
     return acc;    
    }, 0)
}

const countPos11 = (nums) => nums.filter(num => num > 0).length    /// length в кінці скаже яка є кількість похитивних номерів   
 /// we removed {},  and we had return but since we don't have { we don't need  word return    

/// third way w for of
const countPos1 = (nums) => {
  let count = 0

for(let num of nums){
  if(num > 0) count ++
}
return count
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
/////// filter method, but we have string, and first we need to convert to arr it to do use split
const countA22 = (word) => {
  return word.split('').filter(letter => letter.toLowerCase() === 'a').length    /// conver string to arr  first
///  in filter we use our condition, and at the end added length to see how long it is
 /// filter() /// filter arr by what you are looking for, you give it a condition as an argument
}



//// another way
const countA2 = (word) => {
let count = 0;    //// створили нашо контейнер щоб рахував, джава дуже розумна і може конвертувати стрінк в arr
for(let letter of word) { /// word is string
  if(letter.toLowerCase() === 'a') count++;      /// technically our letter is a sting
}
return count;
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

////// for of loop way
const countVowels1 = (word) => {
  let vowelCounter = 0 /// we created our conteiner to stor result
 const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']   // arr contein all vowel and we check if our vow includes inside this vowel
  for( let vow of word){  /// teacher like at the beginning remove question about upper or lower case
//////vow = vow.toLowerCase()    ///  now it's always lower case вчитель робив в попередньому приклд   
   if(vow.includes(vowels)) vowelCounter++;                     //// now our condition
}
return vowelCounter;
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
 //// second teacher way,  we check how many we don't have vowel it's more easy
const countConsonants2 = (word) => {
  let counter = 0; // стоврили куди будемо додавати результат
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']   /// our voewl, in condition they must be !not include
  for(letter of word){
    if (!(vowels.includes(letter))) counter++;    /// it's cheching if vow has our letter if yes, we don't wont to count it !
  }     /// it's become true if the letter is not the vow
 return counter
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
const countWords = (word) => word.trim().split(' ').reduce((acc, curr) => {   // first we trim took extra space, then split return arr. it fonna take spaces and split between them
  return acc + 1
   }, 0)
  
   ////// teacher way not the best because customer can out 2 extra spaces between word and it will increase our char 
   word = word.trim()
   let spaces = 0;
  
   for(char of word){
    if(char === ' ') spaces++
   }
   return space + 1///// бо в нас два спейс між словами хоча слів триб тому додали 1
  
   //// third way the best
   const countWords2 = (word) => word.trim().split(/\s+/).length   /// we put // and between them they become red it a pattern   \s indicating space + one or more    /\s+/   know it's works
///  обрізали спейс, розділили між пропускомб а потім взяли довжину ск в нас вийшло слів в []
   // reject is make your code more reliable to user defect
/// split as a arguments takes string ot=r rejects that why we w'' add reject into split, means split not between not one space  but between even more then 1


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
  let result =  1    /// 
  for( let i = 1; i <= number; i++){   /// every  num * 1 = the same mu that why we don't use 1 in this loop stop when num greater then 1
     result *= i
     }
     return result
    }
/// another way to silwe is using recursion more complex then normal function, interwiewers love to see it, they loke when you solve factorial w recursion 
const fac = (n) =>{
  if (n == 0 || n === 1) return 1
  return n * fac(n-1)    /// when it's more then 1 we recall factorial function w n time - 1. It's multiply n(let say 5) * times(rerun factorial=> n-1    5-1=4) and then go eggein 4*3,   3*2  2* 1   leave single version 
}   /// fac(5) => 5 * fac(4)   => 5 * 24 =   120     because f4 = now 24
   ////fac(4) => 4 * fac(3)    => 4 * 6 = 24    // because factorial 3 in down line became as 6
   //// fac(3) => 3 * fac(2)  =>   3 * 2 =6   
   //// fac(2) => 2 * fac(1)  =>    2* 1= 2
   //// fac(1) => 1 

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
//// if you want to to w loop we compare f letter w last letter see if they equal yo each other , then compare second letter, and second from the last, and msdddle, if one not equel- false
/// not the best too much iteration
str = str.toLowerCase()
let end  = str.length - 1     // we create var for ending for last index of the str

for(let i = 0; i < str.length; i++)  {  /// loop from beginning to the end of the string
if(str[i] !== str[end]) return false   /// якщо перша та остання не рівні між собою поверни false
end--;
}
return true


//// while loop teacher recomend because it's more readable
str = str.toLowerCase()
let start = 0
let end1  = str.length - 1
  while(start < end){    // it's continue loop
  if(str[start] !== str[end]) return false    /// if they == or not, then next first go to next, and last move to next at he end
  start++;
  end--;
}
return true


/// one more way recommend reverse(), we reverse and check is the == to each other, but reverse it's arr function so we nned first convert the string to an arr, and then back to string
return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
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
    arr.reduce((acc, curr) => {       //// вчитель зробив reduce((count, str)) count start 0, str = every index for arr
        if (curr.trim().split(' ').length > 1) return acc + 1;   
        return acc;
}, 0 )
//// loop
let count = 0;
arr.forEach((element) => {
if (element.trim().includes(' ')) count++   // миобоізали екстра спейсб та перевірили чи включено його між словами  
})     /// вчительрекомендує редус
return count

//// reduce teacher's way
const countMultipleWords1 = (arr) => {
  return arr.reduce((count, str) => {      //count start 0, str = every index for arr
      if (curr.trim().includes(' ')) return count + 1;   /// count++ doesn't work in our case, we need to use count + 1 because we return value of count
      return count;       /// count++ return 0, it's modify our value, but in this case we dont modify, we reassigning count to be equel to smth,,, vecause count++ changing value but not add it to value
}, 0 )
}
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

//// for of loop, gorEach works only w arr we use forEach
const count30rLess2 = (string) =>{
 let  counter = 0
 /// if(!str.trim()) return 0    /// якщо це пусте поверни 0   якщо тту не хочеш можна в серидні фор іч
 const strAsArr = str.trim().split(' ');    //// first convert string into att splitting by space
strAsArr.forEach(word =>{
  if(word.length <= 3 && word.length > 0) count++
})
return count
}

////filter 
const count30rLess3 = (word) =>{
  return word.trim().split(' ').filter(str => str.length <= 3 && str.length > 0).lengthArr   /// because it's arr and we return it, str it's a access point to that word
}

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
 if (num === 2 || num === 3) return true;     ///because this 2num they are primenum
 if(num % 2 === 0 || num % 3 === 0) return false    /// we remove even and odd num
/// it's let run time
 let divisible = 5;   /// we start from 5 because out before Prime number were discussed in condition above
 while(divisible < num) {// we want stop when D becomes num, where we iterate up,  when d becomes num we know it's a prime n
 if(num % d === 0) return false /// because we found a num that it's not number itself, and it's not one it's giving us %0 , meaning it's not Pnum
 d+=2;   /// means test next num foing to 5 7 9 11  it's move 50% iteration
}
return true

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
//// teacher way 1
const add1 = (arr1, arr2) => {
if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]  //// незрозуміал
for(let i = 0; i < arr2.length; i++){
  arr1[i] += arr2[i]//// додасть індекси між собою
}
return largerArr
// way 2
/*let largerArr, smallerArr;
  if(arr1.length > arr2.length){
    largerArr = arr1;
    smallerArr = arr2;
  } else{
    largerArr = arr2;
    smallerArr = arr1;   //// ми перевірили який арр більший
  }*/
  for(let i = 0; i < smallerArr.length; i++){
    largerArr[i] += smallerArr[i]//// додасть індекси між собою
  }
  return largerArr
}
///// map this better because we don't use loop
const add2 = (arr1, arr2) => {
  if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
return arr1.map((value, i) => {  //// because we know arr1 it's larger
return value + (arr2[i] || 0)    /// meaning if this falis it's going to go to next one and return value + 0
 })
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
//// another way
const removeExtraSpaces11 = (word) => word.trim().split(' ').filter(s => s.length > 0).join(' ')
                             /// het arr w no spaces, and now return back to string


// teacher way
const removeExtraSpaces1 = (word) => {
  let strAsArr =  word.trim().split(' ')  /// але ми отрамали  спейс між словами як "", тому нам треба люп
  let result = []  /// результ збережненні
  for(st of strAsArr){
   if(st !== '') result += (st + ' ' )
  }
return result.slice(0, -1)   /// remove the last index
}

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
const findClosesrTo10 = (arr) => arr.filter(num => num !== 10).reduce((acc, curr) => {
  if((Math.abs(curr - 10) < Math.abs(acc - 10)) || (Math.abs(curr - 10) === Math.abs(acc - 10) && curr < acc)){
   return curr
  }
return acc
})
 //// teacher way
 const findClosesrTo102 = (arr) =>{
let closestTo10 = Number.MAX_VALUE   // it's the largest num possible on JS, no issue
let closestDiff  = Number.MAX_VALUE

// we are comparing the current different between each of these num and 10. If it's ever smaller than the closest diff then i'm going to reassign them 
for(currentN of arr){
  if (currentN === 10) continue   /// ignore what we have and go to next iteration
  let currDiff = Math.abs(10 - currentN)        /// find current differ, we need take it into Matth.abs because num can be negetive
 if(currDiff < closestDiff || ((currDiff ===closestDiff) && currentN > closestTo10)) {   ///because we need to take smaller n closer to 10, if they are the same   
  closestTo10 = currentN    /// we need to reasighn our closses10
   closestDiff = currDiff /// we need to reassign the closest diff to this curr diff
}
}
return closestTo10
 }



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
/// teacher way

const isEmailValid1 = (email)=> {
if(email.Includes(' ')) return false;
if(email.splite('@').length !== 2) return false   //// not have more then 1 @

const beginning = email.split('@')[0]    // hello спершу розділили символом а тоді взяли 0 індекс
const middle = email.splite('@')[1].split('.')[0] //// we took our second index після розділення а та продовжили шукати наступну частину після крапкт 0  /// gmail.com ... bur  need gmaol part that why we need to sepaate it w . 
const end = email.splite('@')[1].split('.')[1] ///// com  після крапки наш другий індекс

if(beginning === undefined || middle === undefined || end === false) return false
return beginning.length >= 2 && middle.length >= 2 && end.length >= 2    /// як щось не відповідає верни фолс
}


console.log(isEmailValid(""))
console.log(isEmailValid("@gmail.com"))
console.log(isEmailValid("johndoe@yahoo")) //// проблемне бо немає крапки а ми шукали її в нашій умові
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


/// teacher way
const isPasswordValid1 = (email) => {
  if(email.length < 8 || email.length > 16)  return false
  if(email.includes(' ')) return  false
  let hasUppper = false    /// w this condition we are going to return
  let hasLower = false
  let hasDigit = false
  let hasSpecial = false

  for(char of email){
    if(char >= 'A' && char <= 'Z' ) hasUppper = true;
    else if(char >= 'a' && char <= 'z' ) hasLower = true;
    else if (char >= '0' && char <= '9') hasDigit = true;
    else hasSpecial = tru;e
  }


  return (hasUppper && hasLower && hasDigit && hasSpecial) /// if they all true then it's a valid password if one is incorrect it's invalod pasp
console.log(isPasswordValid(''))
console.log(isPasswordValid("abcd"))
console.log(isPasswordValid("abcd1234"))
console.log(isPasswordValid("Abcd1234"))
console.log(isPasswordValid("Chicago12345US!#$%"))
console.log(isPasswordValid("Abcd1234$"))
console.log(isPasswordValid("Chicago123$"))
console.log(isPasswordValid("Test1234#"))