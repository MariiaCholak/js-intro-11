

console.log("==========TASK01=======")
/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
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


console.log(`==========TASK02=======\n`)
/*
Task-2
Requirement:
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true)  -> 11
sum([3, 7, 2, 5, 10], false)  -> 12
sum([-1, 1, -2, 2], true)  -> -3
sum([0, -1, 15, 1], false)  -> 0
sum([1, 2, 3, 4, -4], true)  -> 0
*/
const sum = (arr, bool) => {
    let total = 0    /// save our odd or even total

    for(let i = 0; i < arr.length; i++){
        if(bool && i % 2 === 0)
        total += arr[i]   /// add to total number w even index
    else if(!bool && i % 2 !== 0)
        total += arr[i]  /// w odd index
   
}
return total
}
console.log(sum([1, 5, 10], true))  // 11( 1+ 10_)
console.log(sum([3, 7, 2, 5, 10], false))  //12  (7 + 5)
console.log(sum([-1, 1, -2, 2], true))   // -3 (-1 + -2)
console.log(sum([0, -1, 15, 1], false)) // 0 ( - 1 + 1)
console.log(sum([1, 2, 3, 4, -4], true))   /// 0 ( 1 + 3 +(-4))



console.log(`==========TASK03=======\n`)
/*
Task-3
Requirement:
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters. 
Examples:
nthChars("Java", 2)  -> "aa"
nthChars("JavaScript", 5)   -> "St"
nthChars("Java", 3)   -> "v"
nthChars("Hi", 4)   -> ""
nthChars("0123456789", 2)  -> "13579" 
*/
const nthChars = (str, num) => {
   let result = ''     /// will add our string result

/// start from  num - 1, because of JS index starts from 0
   for (let i = num - 1; i < str.length; i += num){    /// every  iter. our num
     result += str[i]     /// add str char w our index to result
   }
   return result

}

console.log(nthChars("Java", 2))   //aa
console.log(nthChars("JavaScript", 5))     //(5, 10 = ST)
console.log(nthChars("Java", 3))      //V
console.log(nthChars("Hi", 4))  //  ""
console.log(nthChars("0123456789", 2))  // 1 3 5 7 9


console.log(`==========TASK04=======\n`)
/*
Task-4
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
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

console.log(`==========TASK05=======\n`)
/*
Task-5
Requirement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
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

console.log(`==========TASK06=======\n`)
/*
Task-6
Requirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
Examples:
count([1, 5, 10], true)  -> 1
count([3, 7, 2, 5, 10], false)  -> 3
count([-1, 1, -2, 2], true)  -> 2
count([0, -1, 15, 1], false)  -> 3
count([1, 2, 3, 4, -4], true)  -> 3
*/

const count = (arr, bool) => {
    if ( bool) 
     return   arr.reduce((sum, curr) =>  curr % 2 === 0 ? sum + 1 : sum , 0) 
    else
        return arr.reduce((sum, curr) =>  curr % 2 !== 0 ? sum + 1 : sum, 0) 

}
console.log(count([1, 5, 10], true)) 
console.log(count([3, 7, 2, 5, 10], false))
console.log(count([-1, 1, -2, 2], true))
console.log(count([0, -1, 15, 1], false)) 
console.log(count([1, 2, 3, 4, -4], true))

console.log(`==========TASK07=======\n`)
/*
Task-7
Requirement:
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript")  -> -1
sumDigitsDouble("23abc45")   -> 28
sumDigitsDouble("Hi-23")  -> 10
sumDigitsDouble("ab12")  -> 6
sumDigitsDouble("n0numh3r3")  -> 12
*/
const sumDigitsDouble = (str) => {
let container = 0

for(let i = 0; i < str.length; i++ ){
    if(str[i] >= '0' && str[i] <= '9') /// curr index  if it's fig
        container += Number(str[i])   // convert char into digit, and add to container
    
}
return container === 0 ?  -1: container * 2
}
console.log(sumDigitsDouble("Javascript"))
console.log(sumDigitsDouble("23abc45"))
console.log(sumDigitsDouble("Hi-23"))
console.log(sumDigitsDouble("ab12"))
console.log(sumDigitsDouble("n0numh3r3"))

console.log(`==========TASK08=======\n`)
/*

Task-8
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java")  -> 1
countOccurrence("Hello", "World")  -> 0
countOccurrence("Can I can a can", "anc")   -> 3
countOccurrence("Hello", "l")   -> 2
countOccurrence("IT conversations", "IT")   -> 2
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

console.log(countOccurrence("Javascript", "Java")) 
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))   
console.log(countOccurrence("Hello", "l")) 
console.log(countOccurrence("IT conversations", "IT"))