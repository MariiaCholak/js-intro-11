/*
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
Examples: 
replaceFirstLast("")      
replaceFirstLast("Hello")     
replaceFirstLast("Tech Global")    
replaceFirstLast("A")     
replaceFirstLast("    A      
Swap First and Last Words ->  "" 
")     ->  "oellH" -> "lech GlobaT" -> "" -> "" 
*/
const replaceFirstLast = (string) =>{
    string = string.trim();      /// reassig str and delete all spaces
    if (string.length < 2) return ""  ;
    return string.at(-1) + string.slice(1, -1) + string[0];
   }   ////  return str[str.length - 1] + str.slice(1, str.length - 1)     ///  slice start from first index you give and go to end but not includes last one

/// ternary good to use when it's one condition
const replaceFirstLast = (str) => str.length < 2 ? "" : str.at(-1) + str.slice(1, -1) + str[0];
///// before : -- if the statement is true,    after : if it's false 

console.log(replaceFirstLast(""))
console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast("A"))
console.log(replaceFirstLast("    A      "))

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
Examples: 
Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> "
*/
 
const swapFirstLastWord = function(word){
   let words = word.trim().split(" ")
    
    return words.length < 2 ? "" : ([words[0], words[words.length - 1]] = [words[words.length - 1], words[0]], words.join(" "));
}

console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("Hello "))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(" "))

/*
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
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
  if (n === 0 || n === 1) return 1
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

/*
Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
Examples: 
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
const removeExtraSpaces = (word) => {
  let strAsArr =  word.trim().split(' ')  /// але ми отрамали  спейс між словами як "", тому нам треба люп
  let result = []  /// результ збережненні
  for(st of strAsArr){
   if(st !== '') result += (st + ' ' )
  }
return result.slice(0, -1)   /// remove the last index
}


/*
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])    
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])    
firstDuplicate([ 5, '5', 3, 7, 4 ])    
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])   
firstDuplicate([ 1, 2, 3])     
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])    -> 3 -> 5 -> -1 -> 'abc' -> -1 -> -1 
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


/*
www.techglobalschool.com 
Find All Duplicate Elements 
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same. 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])    
getDuplicates([ 1, 2, 5, 0, 7 ])      
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])   
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])    
Reverse String Words -> [ 0, -7 ] -> [ ] -> [ 'foo', 'a’ ] -> [ ]
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



/*
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string. 
Examples: 
reverseStringWords("Hello World")    
reverseStringWords("I like JavaScript")    
reverseStringWords("Hello")     
reverseStringWords("")      
reverseStringWords(" ")   
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



/*
Add Two Arrays 
 
Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])      
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])    
add([-5, 6, -3, 11], [5, -6, 3, -11])      -> [9, 3, 2, 7, 5, 10] -> [16, 11, 9,  3, 2, 7, 5, 10, 34] -> [0, 0, 0, 0] 
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


/*
Fizz Buzz 
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to given number. However, it will return "Fizz" for the 
numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers 
divided both by 3 and 5. 
Examples: 
fizzBuzz(3) 
fizzBuzz(5) -> [ 1, 2, 'Fizz' ] -> [ 1, 2, 'Fizz', 4, 'Buzz' ] 
fizzBuzz(10) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ] 
fizzBuzz(15) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ] 
fizzBuzz(2) -> [ 1, 2 ] 
*/
const fizzBuzz2 = (num) => {
let result = []
for(let i = 1; i <= num; i++){

if (i % 3 === 0  && i % 5 === 0) result.push("FizzBuzz")   //// result.push(i % 3 === 0 ? 'Fizz' : "") + (i % 5 === 0 ? 'Buzz' : "") || i
else if(i % 3 === 0)  result.push("Fizz")
else if(i % 5 === 0) result.push("Buzz")
else result.push(i)

}
return result
}

  //// we can use array function From - it creat a new arr from specific num to specific length,  
  return Array.from({length: num}, (_, i)) => ( (i+1) % 3 === 0 ? 'Fizz' : "") + ((i % 5) === 0 ? 'Buzz' : "") || i+1///
  // our num in console its given length of numbers  from takes into({}) object, then we pass another argum (_, i) we ignore _ means we will use nothing, i consider our num start from 0. _ its ignore it's not use 
/// but result gives us from 0, 1, 2 but we need from 1 that why we add i + 1


/*
Palindrome 
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity 
Examples: 
isPalindrome("Hello")   -> false 
isPalindrome("Kayak")   -> true 
isPalindrome("civic")   -> true 
isPalindrome("abba")   -> true 
isPalindrome("ab  a")   -> false 
isPalindrome("123454321")   -> true 
isPalindrome("A")   -> true 
isPalindrome("")   -> true 
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


/*
Remove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed. 
Examples: 
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])    
removeDuplicates([1, 2, 5, 2, 3])       
removeDuplicates([0, -1, -2, -2, -1])      -> [10, 20, 35, 60, 70] -> [1, 2, 5, 3] -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])      -> ["1", "2", "3"] 
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

/*
Prime Number 
Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31… 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false 
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

/*
Array Factorial 
Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials. 
Examples: 
arrFactorial([1, 2, 3 ,4])    
arrFactorial([0, 5])     
arrFactorial([5 , 0, 6])    
arrFactorial([]) 
*/

const factorial = (num) => {
    if(num === 0) return 1;
    let result = 1
for(let i = 2; i <= num; i++){   /// бо ми почали з 1 тому наше і стартує з 2
  result *= i
}
return result
}
const arrFactorial = (arr) => arr.map(factorial)


//// teacher way

const arrFactorial = (arr) => {
    return arr.map(num => {
    let result = 1
    for(let i = 2; i <= num; i++){   /// бо ми почали з 1 тому наше і стартує з 2
      result *= i
    }
    return result
})
}

console.log(arrFactorial([1, 2, 3 ,4]))
console.log(arrFactorial([0, 5]))
console.log(arrFactorial([5 , 0, 6]))
console.log(arrFactorial([]))



/*
Find Biggest Number 
Examples: -> [1, 2, 6, 24] -> [1,120] -> [120, 1, 720] -> [] 
Write a function named findBiggestNumber() which takes a string argument and returns the 
biggest number appears in the string. 
findBiggestNumber("abc$")   
findBiggestNumber("a1b4c  6#")  
findBiggestNumber("ab110c045d")  
findBiggestNumber("525")   
findBiggestNumber("3 for 10 dollars") -> 0 -> 6 -> 110 -> 525 -> 10
*/
findBiggestNumber = (str) =>{
 const number =  str.match(/\d+/g)
if(!number) return 0
return Math.max(...number.map(num => parseInt(num,10)))
}
/// loop through string and if it's a num add to our Q, until i find it's not num,  and w that Q i will add it too our arr and then i can sort to take the largest
let number = []    /// contein all the diff num
let currenNumb = "" ///it's our Q
for(char of str){
  if(char >= '0' && char <= '9' ){
   currenNumb += char /// if the str is num we will add to our q
  } else if(currenNumb){
    number.push(Number(currenNumb))
    currenNumb = ""
  }
  if(currenNumb)number.push(Number(currenNumb)) 
    if(number.length ===0) return 0
    return number/sort((a, b) => a -b)[numbersA.length - 1]
}


console.log(findBiggestNumber("abc$"))
console.log(findBiggestNumber("a1b4c  6#"))
console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("525"))
console.log(findBiggestNumber("3 for 10 dollars"))



/*

Find Sum Numbers 
Write a function named findSumNumbers() which takes a string argument and returns sum of 
the all numbers appears in the string. 
Examples: 
findSumNumbers("abc$")   
findSumNumbers("a1b4c  6#")  
findSumNumbers("ab110c045d")  
findSumNumbers("525")   
findSumNumbers("3 for 10 dollars")  
Is Power Of 3 -> 0 -> 11 -> 155 -> 525 -> 13 
*/

//ab110c045d5 -> 160
const findSumNumbers = str => {
    let sum = 0;//0 + 110 = 110 + 45 = 155 + 5 = 160
    let numberContainer = '';//5
  
    for(let char of str){//char = 5
      if(char >= '0' && char <= '9') numberContainer += char;
      else{
        sum += Number(numberContainer)
        numberContainer = '';
      }
    }
  
    sum += Number(numberContainer)
    return sum;
  }
  
  console.log(findSumNumbers("abc$"));//0
  console.log(findSumNumbers("a1b4c  6#"));//11   
  console.log(findSumNumbers("ab110c045d"));//155      
  console.log(findSumNumbers("525"));  //525           
  console.log(findSumNumbers("3 for 10 dollars"));//13

/*
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243…. 
NOTE: Ignore negative scenarios. 
Examples: 
isPowerOf3(1)  
isPowerOf3(2)  
isPowerOf3(3)  
isPowerOf3(27)  
isPowerOf3(100)  
isPowerOf3(81)  
isPowerOf3(9)  
*/
// const isPowerOf3 = (num) => num === 1 ? true : num < 1 ? false : isPowerOf3(num/3)
  
  const isPowerOf3 = n => {
    let powerOf3 = 1;
  
    while(powerOf3 <= n){
      if(powerOf3 === n) return true;
      powerOf3 *= 3;
    }
    return false;
  }
  console.log(isPowerOf3(1));//true     
  console.log(isPowerOf3(2)); //false    
  console.log(isPowerOf3(3)); //true    
  console.log(isPowerOf3(27));  //true  
  console.log(isPowerOf3(100));  //false 
  console.log(isPowerOf3(81));   //true 
  console.log(isPowerOf3(9));//true



/*
Fibonacci Series 1 
Examples: -> true -> false -> true -> true -> false -> true -> true 
Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/

const fibonacciSeries1 = n => {//5
  if(n === 1) return [0]


  let arr = [0,1];//[0,1,1,2,3]

  for(let i = 2; i < n; i++){//i=5
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr;
}
//0 1 1 2 3 5 8 13
console.log(fibonacciSeries1(3));  
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7));  
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2)); 


const fibonacciSeries2 = n => {
  if(n === 1) return 0


  let arr = [0,1];

  for(let i = 2; i < n; i++){
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr[arr.length - 1];
}



//fib(1) = 0
//fib(2) = 1
//fib(3) = 1
//fib(4) = fib(n-1) + fib(n-2) -> fib(3) + fib(2) -> 1+1 = 2
//fib(5) = fib(n-1) + fib(n-2) -> fib(4) + fib(3) -> 2+1 = 3
//fib(6) = fib(5) + fib(4) -> 3 + 2 = 5


const fib = n => {
  if(n === 1) return 0;
  if(n === 2 || n === 3) return 1;

  return fib(n-1) + fib(n-2);
}
/*
www.techglobalschool.com 
Fibonacci Series 2 
Write a function named fibonacciSeries2() which takes a number n argument and returns the 
nth series of Fibonacci number as a number. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
EExamples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/

  

const fibonacciSeries2 = (n)=> {
if(n === 1) return 0
if(n === 2) return 1
return fibonacciSeries2(n - 1) + fibonacciSeries2(n - 2)
}

const fibonacciSeries2 = n => {
  if(n === 1) return 0
  let arr = [0,1];
  for(let i = 2; i < n; i++){
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[arr.length - 1];
}

//fib(1) = 0
//fib(2) = 1
//fib(3) = 1
//fib(4) = fib(n-1) + fib(n-2) -> fib(3) + fib(2) -> 1+1 = 2
//fib(5) = fib(n-1) + fib(n-2) -> fib(4) + fib(3) -> 2+1 = 3
//fib(6) = fib(5) + fib(4) -> 3 + 2 = 5

/* Рекурсія (recursion) в JavaScript — це техніка програмування, коли функція викликає саму себе, щоб розв’язати задачу шляхом поділу на підзадачі.

Простіше кажучи — функція «дзвонить сама собі», поки не досягне базового випадку (умови зупинки).
*/   /// intervie like recursion for febenachy very common!!!!!

const fib = n => {///// reсursion
  if(n === 1) return 0;
  if(n === 2 || n === 3) return 1;

  return fib(n-1) + fib(n-2);
}


console.log(fibonacciSeries2(2))
console.log(fibonacciSeries2(4))
console.log(fibonacciSeries2(8))
console.log(fibonacciSeries2(9))
console.log(fibonacciSeries2(1))

/*
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays. 
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other array. 
Examples: 
findUniques([], [])   
findUniques([], [1, 2, 3, 2])  -> [] -> [1, 2, 3] 
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5] 
findUniques([8, 9], [9, 8, 9])  -> [] 
findUniques([-1, -2], [1, 2])  
*/

const findUniques = (arr1, arr2) => {
   
    let result = []
    for(let i = 0; i < arr1.length; i++){
if(!arr2.includes(arr1[i]) && !result.includes(arr1[i])) result.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++){
        if(!arr1.includes(arr2[i]) && !result.includes(arr2[i])) result.push(arr2[i])  
        }
      return result  
    }

    //// billal
     const findUniques = (arr1, arr2) => {
    let uniques = [];
    let combinedArr = [...new Set(arr1.concat(arr2))];
  
    //console.log(combinedArr)
    for(let num of combinedArr){
      if(!(arr1.includes(num) && arr2.includes(num))) uniques.push(num)
    }
  
    return uniques
  }

/// another way
const conArr = arr1.concat(arr2)
const filterArr = conArr.filter(i => !(arr1.includes(i) && arr2.includes(i)))  // філь яякщо це не в двох ерей 
/// тепер нам лише треба забрати дубілкати з наших ерей і цей раз ми зробимо із сет він робить він не дозволяє мати ніякі дуплікати має як лист
const set = new Set(filterArr) //// але дає нам як {} а не ерей
return [...set]  /// we indicate that we want to every var of set from thet collection  now we get arr result


console.log(findUniques([], [])) 
console.log(findUniques([], [1, 2, 3, 2]))
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([8, 9], [9, 8, 9]))
console.log(findUniques([-1, -2], [1, 2]))


/*
Reverse Number 
Examples: -> [-1, -2, 1, 2] 
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String. 
Note: Do not convert number to string to complete the task. 
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/
const reverseNumber = num => {
  let result = 0
  while(num > 0) {    /// our num more then 0
    let digit = num % 10    /// take last digit   it's move decimal value 
    result = result * 10 + digit   /// add our digit to new num 0 * 10 + 1 = 1
    num = Math.floor(num / 10)     // 371 / 10 = 37.1 => 37      // 37 / 10 = 3.7 => 3
  }
  return result 

}
///371 % 10 = 1
/// 37 % 10 = 7
// Змінні:
//num — число, яке треба розгорнути (наприклад, 123)
//result — куди буде накопичуватись перевернуте число (починається з 0)
//i — лічильник, який в кожній ітерації ділиться на 10, щоб зменшити число
//Беремо число, поки воно більше за 0
//В кожному кроці відкидаємо останню цифру (Math.floor(i / 10))
//i % 10 → це остання цифра числа
//result * 10 → зсуваємо число вліво, готуючи місце для нової цифри
//Додаємо останню цифру до результату
/// Приклад: num = 123
/*
i = 123 → result = (0 * 10) + 3 = 3

i = 12 → result = (3 * 10) + 2 = 32

i = 1 → result = (32 * 10) + 1 = 321

i = 0 → кінець циклу
(result * 10) + (i % 10)
Це класичний спосіб перевернути число, обробляючи кожну цифру справа наліво, і накопичуючи її зліва направо у новому числі.
*/

const reverseNumber = num => {//123
    let result = 0;//0 -> 3 -> 32 -> 321
          //i=123 =>   123 / 10 = 12.3 = 12  / 10 = 1.2 => 1
            
    for(let i = num; i > 0; i = Math.floor(i / 10)){//1  /// this what i eq each itterestion
        result = (result * 10) + (i % 10) /// we need re,minder    
    }   //  0 (next iter 3* 10=30) + 32* 10=320             //123 % 10 = 3,    12%10=2   1% 1=1
    ///resulit = 3=>  32 => 321
    return result
}
console.log(reverseNumber(371));
console.log(reverseNumber(371))
console.log(reverseNumber(123)) //321
console.log(reverseNumber(12)) 
console.log(reverseNumber(0) ) 
console.log(reverseNumber(111))

/*
Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise. 
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself. 
• Let's take an example to understand it better. Consider the number 153. 
• To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number. 
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
• In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number. 
Examples: 
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
*/


const isArmstrong = num => {
    let result = 0;

    //153 -> [1,5,3]
    let numAsArr = num.toString().split('')
    let numOfDigits = numAsArr.length

    for(let digit of numAsArr){
        result += Number(digit) ** numOfDigits
    }
    return result === num
}

const isArmstrong = num => num.toString().split('').reduce((total, digit) => total + Number(digit) ** num.toString().length, 0) === num

console.log(isArmstrong(153));//true
console.log(isArmstrong(123));//false
console.log(isArmstrong(1634));//true
console.log(isArmstrong(1111));//false


/*
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise. 
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters. 
NOTE: This method is case-insensitive and ignore the white spaces. -> false 
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/
const isAnagram = (word1, word2) => {
    word1 = word1.toLowerCase().trim()        /// replace(/\s+g, '')
    word2 = word2.toLowerCase().trim()

    if(word1.length !== word2.length) return false    ///must be  the same length

    const sort1 = word1.split('').sort().join('')     ///make arr sort it, join back
    const sort2 = word2.split('').sort().join('')

    return sort1 === sort2         ///// are they the same?
}

console.log(isAnagram("Apple", "Peach")) 
console.log(isAnagram("listen", "silent")) 
console.log(isAnagram("astronomer", "moon starer"))    //// doesn't work
console.log(isAnagram("CINEMA", "iceman"))  
console.log(isAnagram("123", "1234")) 

/*
Count Palindrome 
Write a function named countPalindrome() which takes a string and returns the number 
of  palindrome words. 
Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer. 
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
*/

const countPalindrome = str => str.toLowerCase().split(' ').filter(word => word === word.split('').reverse().join('')).length
                                                                  ////     if a word is a palindrome.
console.log(countPalindrome("Mom and Dad" ))
console.log(countPalindrome("See you at noon")) 
console.log(countPalindrome("Kayak races attracts racecar drivers"))  
console.log(countPalindrome(""))  
console.log(countPalindrome("No palindrome here"))

/*
Write a function named canFormString() which takes two string arguments and returns true if 
the second string can be formed by rearranging the characters of first string. Return false 
otherwise. 
NOTE: This method is case-insensitive and ignore the white spaces. 
Examples:
canFormString("Hello", "Hi")   -> false
canFormString("programming", "gaming")   -> true
canFormString("halogen", "hello")   -> false
canFormString("CONVERSATION", "voices rant on")   -> true
canFormString("12", "123")  -> false
*/
const canFormString = (word1, word2) => {
word1 = word1.toLowerCase().trim()
word2 = word2.toLowerCase().trim()

const counts = { }    /// { h: 1, e: 1, l: 2, o: 1 }


for(let char of word2){     // our current letter
   counts[char] = (count[char] || 0) + 1    /// Якщо цей символ уже є в об’єкті counts, то counts[char] поверне його кількість.
}

}   ///// needs explanation


console.log(canFormString("Hello", "Hi")) 
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on")) 
console.log(canFormString("12", "123")) 

/*
Write a function named countOccurrence() which takes two string arguments and returns how 
many times that the first string can form the second string. 
NOTE: This method is case-insensitive and ignore the white spaces. 
countOccurrence("Javascript", "Java") 
countOccurrence("Hello", "World")  -> 1 -> 0 
countOccurrence("Can I can a can", "anc") -> 3 
countOccurrence("Hello", "l")   -> 2 
countOccurrence("IT conversations", "IT") -> 2
*/
const countOccurrence = (str1, str2) => {
str1 = str1.toLowerCase().replace(/\s+/g, '')
str2 = str2.toLowerCase().replace(/\s+/g, '')

const obj = {};
    for (const char of str1) {
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
};
////// don't know how to solvee

const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []
  
    for(char of str2){
      arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort()[0]
  }
  

console.log(countOccurrence("Javascript", "Java")) 
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))   
console.log(countOccurrence("Hello", "l")) 
console.log(countOccurrence("IT conversations", "IT"))