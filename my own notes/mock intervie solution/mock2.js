/*Double or Triple the Word  1
Write a function named as doubleOrTripleWord() which takes a string word as an argument and 
returns the given word back tripled if the string length is even or doubled if the string length is odd when 
invoked. 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222    

*/
const doubleOrTripleWord = ((str) => {
    if(str.length % 2 === 0) return str.repeat(3)
     return str.repeat(2)
})

console.log(doubleOrTripleWord("Tech"))
console.log(doubleOrTripleWord("Apple"))
console.log(doubleOrTripleWord("")) 
console.log(doubleOrTripleWord(" ") )
console.log(doubleOrTripleWord("1"))
console.log(doubleOrTripleWord("22"))

/* 2First and Last Word -> "TechTechTech" -> "AppleApple” -> "" -> " " -> "11" -> "222222" 
Write a function named as firstlastWord() which takes a string word as an argument and returns the 
first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
Examples: 
Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> ""  
*/
const firstLastWord = (str) => {
    if(str.length === 0) return ""
    let word = str.split(' ')
    return word[0] + word[word.length - 1]

    
}

console.log(firstLastWord("I like JavaScript"))
console.log(firstLastWord(""))  
console.log(firstLastWord("Hello World")) 
console.log(firstLastWord("  ")) 
console.log(firstLastWord("Hello"))



/* 3hasVowel
Write a function named hasVowel() which takes a string argument and returns true if the string has a 
vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. -> false -> true 
Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true

*/
const hasVowel = (str) => {
    const  vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.some(vowel => str.toLowerCase().includes(vowel))

}
const hasVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let el of str.toLowerCase()){
       if(vowels.includes(el)) return true
    }
    return false
}



console.log(hasVowel(""))     
console.log(hasVowel("Javascript")) 
console.log(hasVowel("Tech Global"))  
console.log(hasVowel("1234"))   
console.log(hasVowel("ABC"))


/* 4
Write a function named as startVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples: 
startVowel("Hello")    -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")    
startVowel(" ")    
startVowel("123")    -> false -> false -> false 
*/

const startVowel = (str) => {
    let vowels = ['a', 'i', 'e', 'o', 'u']
    if(str.length  === 0) return false 
   return vowels.includes(str[0].toLowerCase())
}

console.log(startVowel("Hello"))    
console.log(startVowel("Apple"))    
console.log(startVowel("orange"))   
console.log(startVowel(""))    
console.log(startVowel(" "))    
console.log(startVowel("123"))
/*
Write a function named averageOfEdges() which takes three number arguments and will return 
average of min and max numbers. 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15 
Swap First and Last Characters 
*/
const averageOfEdges = (num1, num2, num3) => {
   return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
}
console.log(averageOfEdges(0, 0, 0)) 
console.log(averageOfEdges(0, 0, 6)) 
console.log(averageOfEdges(-2, -2, 10))
console.log(averageOfEdges(-3, 15, -3)) 
console.log(averageOfEdges(10, 13, 20)) 


/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with 
the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string.  ->    -> "" 
")     -> "" 

Examples: 
replaceFirstLast("")    ->  ""  
replaceFirstLast("Hello")   "oellH" ->  
replaceFirstLast("Tech Global")    "lech GlobaT"
replaceFirstLast("A")   ""  
replaceFirstLast("    A   ') ""
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
*/
const replaceFirstLast = (str) => {
    if(str.length < 2) return ""
  return str.at(-1) +str.slice(1, -1) + str[0]

} 

console.log(replaceFirstLast(""))     
console.log(replaceFirstLast("Hello"))     
console.log(replaceFirstLast("Tech Global"))    
console.log(replaceFirstLast("A"))     


/* 18 pa
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the string 
back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
Examples: 
Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> "" 
*/
 const swap4 = (str) => {
    if(str.length <= 8) return ""
    return str.slice(-4) +  str.slice(4, 6) + str.slice(0, 4)
  }
  console.log(swap4("abc"))
  console.log(swap4("JavaScript")) 
  console.log(swap4("TechGlobal"))
  console.log(swap4("")) 
  console.log(swap4("  "))
  console.log(swap4("Apple")) 

/*
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns 
the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
Examples: 


swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/
const swapFirstLastWord = (word) => {
   let words =  word.trim().split(" ")
    if(words.length < 2) return ""
    let first = words[0]
     let last = words[words.length -1] 
     words[0] = last
     words[words.length -1] = first
        return words.join(' ')
}


function reverseStringWords1(string){
    let words = string.trim().split(' ')    // we get our string as array and spit by spaces
    let reverseString = []

    for(let i = 0; i < words.length; i++){/// створили луп бо треба переглянути кожен розділений елемент
       words[i] =  words[i].split('').reverse().join('') // it's how we reverse it/ reverse it's a arr function and doesn't works w string what wgy we convert it using split(''), we made separate arr it's splt each string into arr, and know we use join function to return it back to string from arr
    }  
    return words.join(' ') //// join them by places now it's string
}
console.log(swapFirstLastWord("Hello World")) 
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar")) 
console.log(swapFirstLastWord("")) 
console.log(swapFirstLastWord("  ")) 
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello   "))   


/*
Find Even Numbers -> "World Hello" -> "JavaScript like I" -> "bar bar foo foo" -> "" -> "" -> "" -> "" 
Write a function named countPos() which takes an array of numbers as an argument and returns how 
many elements are positive when invoked.  -> 0 
Count Positive Numbers 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])    -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])   
*/
const countPos = (numbers) =>{
   return numbers.filter(el => el > 0).length
}
console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))

/*
Write a function named as getEvens() which takes 2 number arguments and returns all the even 
numbers as an array stored from smallest even number to greatest even number when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even 
numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ] 
*/

const getEvens = (num1, num2) => {
    let even =  []
    let greatest = Math.max(num1, num2)
    let smallest = Math.min(num1, num2)
    let smallest = Math.min(num1, num2)
    for(let i = smallest; i <= greatest; i++){
        if(i % 2 === 0) even.push(i)
        }
            return even
    
}
console.log(getEvens(2, 7))   
console.log(getEvens(17, 5))  
console.log(getEvens(4, 4))  
console.log(getEvens(3, 3)) 


/*   19
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers 
divisible by 5 as an array stored from first found match to last found match when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no 
numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)   -> [ 5, 10, 15] 
getMultipleOf5(23, 5)   [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)     [ 5 ]
getMultipleOf5(2, 4)    ->  -> -> [ ] 
Count Negative Numbers 
*/
const getMultipleOf5 = (num1, num2) => {
    let divisible = []
    let smallest = Math.min(num1, num2)
    let smallest = Math.min(num1, num2)
    let greatest = Math.max(num1, num2)

    for( let i = greatest; i >= smallest; i--)
        if(i % 5 === 0) divisible.push(i)
            if(num1 < num2) return divisible.reverse()
    
return divisible
 
}

console.log(getMultipleOf5(3, 17)) 
console.log(getMultipleOf5(23, 5)) 
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


/*
Write a function named countNeg() which takes an array of numbers as an argument and returns how 
many elements are negative when invoked.  -> 3 


Examples: 
countNeg([-45, 0, 0, 34, 5, 67])    -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3]) 3     
*/

const countNeg = (arr)=> {
    let negative = []
    for(let el of arr){
        if(el < 0) negative.push(el)

    }
return negative.length
}
const countNeg = (arr)=>  arr.filter(el => el < 0).length

console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])) 
console.log(countNeg([0, -1, -2, -3])) 


/*
Write a function named countA() which takes a string argument and returns how many A or a there are 
in the given string when invoked. 
NOTE: Ignore case sensitivity.  
countA("TechGlobal is a QA bootcamp")     4
countA("QA stands for Quality Assurance")  5  
countA("Cypress")        0
Count Words -> 4 -> 5 -> 0 
*/
const countA = (str) =>{
    let result = []
    for(let el of str){
        if(el.toLowerCase().includes('a')) result.push(el)
    }
return result.length
}
const countA = (str) => str.split('').filter(el => el.toLowerCase().includes('a')).join('').length

console.log(countA("TechGlobal is a QA bootcamp"))     
console.log(countA("QA stands for Quality Assurance")) 
console.log(countA("Cypress"))       


/*
Write a function named countWords() which takes a string argument and returns the total count of 
words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
Examples: 
countWords("     Javascript is fun       3      
")      
countWords("Cypress is an UI automation tool.    ")    6 
countWords("1 2 3 4")  4
*/
const countWords = (str) => {
    return str.trim().split(' ').length
                                 ////.filter(el => el !=="").length
}

/// reduce 
const countWords = (str) => {
    return str.trim().split(' ').reduce((count, word) => word !== "" ? count + 1 : count , 0)
}

    console.log(countWords("     Javascript is fun       "))      
    console.log(countWords("Cypress is an UI automation tool.    "))     
    console.log(countWords("1 2 3 4")) 

/*
Factorial -> 3 -> 6  -> 4 
Write a function named as factorial() which takes a number as an argument and returns the factorial of 
the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
Examples: 
factorial(5)   120  
factorial(4)  24  
factorial(0)   1
factorial(1)    1-> 120 -> 24 -> 1 -> 1 
*/
const factorial = (num) =>{
    if(num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}
const factorial = (num) =>{
let factorialNum = 1
for(let i = 1; i <= num; i++){
    factorialNum *= i
}
return factorialNum

}
console.log(factorial(5))     
console.log(factorial(4))   
console.log(factorial(0))  
console.log(factorial(1))  







/*
Write a function named as count3OrLess() which takes a string word as an argument and returns the 
count of the words that has 3 characters or less when invoked. 
/*
Count 3 or Less 
Examples: 
count3OrLess("Hello")  0     
count3OrLess("Hi John")  1    
count3OrLess("JavaScript is fun")  2   
count3OrLess("My name is John Doe") 3   
count3OrLess("") 0
*/
const count3OrLess =(str) => {
   let result = [] 
   str = str.split (" ") 
   for( let el of str){
    if(el.length <= 3 && el.length > 0 )result.push(el)
   }
return result.length
}
///// filter
const count3OrLess =(str)=> {
   return  str.split(' ').filter(el => el.length <= 3 && el.length > 0).length
}

console.log(count3OrLess("Hello"))      
console.log(count3OrLess("Hi John"))     
console.log(count3OrLess("JavaScript is fun"))   
console.log(count3OrLess("My name is John Doe"))   
console.log(count3OrLess(""))



/*
Write a function named as removeExtraSpaces() which takes a string word as an argument and 
returns the string back with all extra spaces removed when invoked. 
Examples: 
Examples: 
removeExtraSpaces("Hello")           -> "Hello" 
removeExtraSpaces("    Hello    World  ")       -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")    -> "JavaScript is fun” 
removeExtraSpaces("")             -> "
*/
const removeExtraSpaces = (str) => {
    let arrstr = str.trim().split(' ')
    let result = []
    for(let el of arrstr){
        if(el !== "") result += (el + ' ')
    }
return result.slice(0, -1)
}

console.log(removeExtraSpaces("Hello")) 
console.log(removeExtraSpaces("    Hello    World  ")) 
console.log(removeExtraSpaces("   JavaScript is        fun"))
console.log(removeExtraSpaces("")) 

const removeExtraSpaces = (str) => str.trim().split(' ').filter(el => el.length > 0).join(' ')

/*
Middle Number 
Write a function named middleInt() which takes three number arguments and return the middle 
number.  
Examples: 
middleInt(1, 2, 2) 2   
middleInt(5, 5, 8)  5  
middleInt(5, 3, 5)  5  
middleInt(1, 1, 1)   1 
middleInt(-1, 25, 10)   -> 10 
*/
const middleInt =(num1, num2, num3) => {
   const numbers = [num1, num2, num3]
   numbers.sort((a,b) =>a - b)
   return numbers[1]
}


///// for of
const middleInt = (num1, num2, num3) => {
    let nums = [num1, num2, num3];
    let min = Math.min(...nums);  // Мінімальне число
    let max = Math.max(...nums);  // Максимальне число

    // Шукаємо число, яке не є ні мінімальним, ні максимальним
    for (let el of nums) {
        if (el > min && el < max) {
            return el;  // Повертаємо середнє число
        }
    }
};

console.log(middleInt(1, 2, 2));     // 2
console.log(middleInt(5, 5, 8));     // 5
console.log(middleInt(5, 3, 5));     // 5
console.log(middleInt(1, 1, 1));     // 1
console.log(middleInt(-1, 25, 10));  // 10

    console.log(middleInt(1, 2, 2));     // 2
    console.log(middleInt(5, 5, 8));     // 5
    console.log(middleInt(5, 3, 5));     // 5
    console.log(middleInt(1, 1, 1));     // 1
    console.log(middleInt(-1, 25, 10));  // 10
    
}

console.log(middleInt(1, 2, 2))    
console.log(middleInt(5, 5, 8))   
console.log(middleInt(5, 3, 5))    
console.log(middleInt(1, 1, 1))    
console.log(middleInt(-1, 25, 10))
/*
First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])    3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])    5
firstDuplicate([ 5, '5', 3, 7, 4 ])    -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])  'abc  
firstDuplicate([ 1, 2, 3])    -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -1   
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the 
array. For two elements to be considered as duplicated, value and data types of the elements must be 
same. 
*/
const firstDuplicate = (array) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i]
        }
    
    } 
    return -1
}

const firstDuplicate = (array) => {
     let container = []
     let dublicate = -1
      array.forEach(el => {
        if(container.includes(el) )  dublicate = el
      container.push(el)
     })
      return dublicate
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))   
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))    
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])) 
console.log(firstDuplicate([ 1, 2, 3])) 
console.log(firstDuplicate([ `foo', 'abc', '123', 'bar'` ])) 

   
   



/*
Find All Duplicate Elements -> 3 -> 5 -> -1 -> 'abc' -> -1 -> -1 
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated 
elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 

Examples: 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ]
*/
const getDuplicates = (arr) => {
    let conteiner = []
    let allDublicates = []
    for(let el of arr){
        if(conteiner.includes(el) && !allDublicates.includes(el)) allDublicates.push(el)
            else conteiner.push(el)
    }
return allDublicates
}
console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))   
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])) 

/*
Write a function named as countVowels() which takes a string word as an argument and returns the 
count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 
Examples: 
Examples: 
countVowels("Hello")       -> 2 
countVowels("JavaScript is fun")    -> 5 
countVowels("")         -> 0 
*/
const countVowels = (str) => {
    return str.split('').reduce((acc, curr) => {
        if('aeoui'.includes(curr.toLowerCase()))  acc++
       return acc
    }, 0)
}
console.log(countVowels("Hello")) 
console.log(countVowels("JavaScript is fun")) 
console.log(countVowels("")) 

/*
Write a function named as reverseStringWords() which takes a string as an argument and returns 
string back with each word separately reversed when invoked. 
Examples: 
xamples: 
reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> ""

Count Consonants 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before 
and after words in the given string. -> "olleH dlroW" -> "I ekil tpircSavaJ" -> "olleH" -> "" -> "" 
*/
const reverseStringWords = (str) => {
let word  = str.trim().split(' ')
let reverseWord = []
for( let el of word){
    reverseWord.push(el.split('').reverse().join(''))
}
return reverseWord.join(' ')
  
}
console.log(reverseStringWords("Hello World")) 
console.log(reverseStringWords("I like JavaScript"))  
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))   
console.log(reverseStringWords(" ")) 

/*
Write a function named as countConsonants() which takes a string word as an argument and returns 
the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
Examples: 
Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")    0     
 
*/  
const countConsonants = (str) =>{
let result = 0
for(let el of str.toLowerCase()){
    if(!('aeiou'.includes(el))) result++
}
return result
}
console.log(countConsonants("Hello")) 
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun")) 
console.log(countConsonants("")) 


/*
Write a function named as countMultipleWords() which takes an array as an argument and returns the 
count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ])     
*/
const countMultipleWords = (arr) => {
let counter = 0
let conteiner = []
for(let el of arr) {
    if( el.trim().includes( " ")) counter++
}
return counter
}

const countMultipleWords = (arr) => { 
   return arr.reduce((counter, str)  => {
if(str.trim().includes(' ')) return counter + 1
    return counter
   }, 0)
}
console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]))    
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]))     
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]))    
console.log(countMultipleWords([ ]))     


/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed 
with below requirements when invoked. 
• You will need to convert numbers divisible by 3 to 'Fizz' 
• You will need to convert numbers divisible by 5 to 'Buzz' 
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
• The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
Examples: 
Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz"  
• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store 
them in a string from smallest to greatest number with a ' | ' separator for each number. -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" -> "Buzz" -> "Fizz | 7 | 8 | Fizz" 
*/
const fizzBuzz = (num1, num2) => {
    let result = []
    let smallest = Math.min(num1, num2)
    let biggest = Math.max(num1, num2)

    for(let i = smallest; i <= biggest; i++){
    if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz')
else if(i % 3 === 0) result.push('Fizz')
else if( i % 5 === 0 ) result.push('Buzz') 
else result.push(i)
}
return result.join(' | ')

}
console.log(fizzBuzz(13, 18))    
console.log(fizzBuzz(12, 5))    
console.log(fizzBuzz(5, 5))  
console.log(fizzBuzz(9, 6))  

/*
Palindrome 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if 
the word is palindrome or returns false otherwise when invoked. 
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

const isPalindrome =  (str) => str.toLowerCase === str.toLowerCase().split('').reverse().join('')
  

console.log(isPalindrome("Hello"))  
console.log(isPalindrome("Kayak"))  
console.log(isPalindrome("civic"))  
console.log(isPalindrome("abba") ) 
console.log(isPalindrome("ab  a"))  
console.log(isPalindrome("123454321")) 
console.log(isPalindrome("A")) 
console.log(isPalindrome("")) 

/*
Prime Number 
Write a function named as isPrime() which takes a number as an argument and returns true if the 
number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be 
divided by any other number. The smallest prime number is 2 and 2 is the only even prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31… 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false 
Add Two Arrays 
*/

const isPrime = (num) => {
    if(num < 2 ) return false
    for(let i = 2; i * i  <= num; i++)
        if(num % i === 0) 
            return false


return true
}
console.log(isPrime(5))
console.log(isPrime(2)) 
console.log(isPrime(29)) 
console.log(isPrime(-5))
console.log(isPrime(0))  
console.log(isPrime(1))  

/*
Write a function named add() which takes two array of numbers as argument and returns a new array 
with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
Examples: 
Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0]
*/
const add = () => {

}



console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))
/*
No Elements With A 
Write a function named noA() which takes an array of strings as argument and will return a new array 
with all elements starting with "A" or "a" replaced with "###". 
Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"]   
*/
const noA = () => {

}

console.log(noA(["javascript", "hello", "123", "xyz"]))     
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return 
a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
Examples: 
Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101]
*/ 
const no3and5 = ()  => {

}
console.log(no3and5([7, 4, 11, 23, 17]))
console.log(no3and5([3, 4, 5, 6])) 
console.log(no3and5([10, 11, 12, 13, 14, 15]))


/*
Write a function named no13() which takes an array of numbers as argument and return a new array 
with all 13s replaced with 0s.  -> [1, 2, 3 ,4]  -> [0, 2, 3] -> [0, 0, 0, 0, 0] -> [] 
R
Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> []
*/

const no13 = () => {

}
console.log(no13([1, 2, 3 ,4]))  
console.log(no13([13, 2, 3])) 
console.log(no13([13, 13, 13 , 13, 13]))  
console.log(no13([]))  

/*
26 emove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new array 
with all the duplicates removed. 
Examples: 
emoveDuplicates([10, 20, 35, 20, 35, 60, 70, 60])      -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])           -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])         -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])         -> ["1", "2", "3"]
*/
const removeDuplicates = () => {

}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))    
console.log(removeDuplicates([1, 2, 5, 2, 3]))       
console.log(removeDuplicates([0, -1, -2, -2, -1]))  
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])) 
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) 


/*
No Digits 
Write a function named noDigit() which takes a string argument and returns a new string with all digits 
removed from the original string. 
Examples: 

xamples: 
noDigit("")           -> "" 
noDigit("Javascript")       -> "Javascript" 
noDigit("123Hello")         -> "Hello" 
noDigit("123Hello World149")     -> "Hello World” 
noDigit("123Tech456Global149")     -> "TechGlobal"
*/
const noDigit = () => {

}
console.log(noDigit(""))   
console.log(noDigit("Javascript"))  
console.log(noDigit("123Hello"))   
console.log(noDigit("123Hello World149"))  
console.log(noDigit("123Tech456Global149")) 



/* Write a function named noVowel() which takes a string argument and returns a new string with all 
vowels removed from the original string. 
No Vowel 
Examples: -> "" -> "Javascript" -> "Hello" -> "Hello World” -> "TechGlobal" 
noVowel("TechGlobal")   -> "TchGlbl" 
noVowel("AEOxyz")   -> "xyz" 
noVowel("Javascript")   -> "Jvscrpt" 
noVowel("")   -> "" 
noVowel("125$")   -> "125$" 
*/

const noVowel = () => {

}

console.log(noVowel("TechGlobal")) 
console.log(noVowel("AEOxyz"))  
console.log(noVowel("Javascript"))   
console.log(noVowel(""))
console.log(noVowel("125$")) 
/*

Sum Of Digits 
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from 
the original string.  
Examples: 
Examples: 
sumOfDigits("Javascript")       -> 0 
sumOfDigits("John’s age is 29")     -> 11 
sumOfDigits("$125.0")       -> 8 
sumOfDigits("")         -> 0 
 */
 
const sumOfDigits = () => {

}
 
console.log(sumOfDigits("Javascript"))  
console.log(sumOfDigits("John’s age is 29"))
console.log(sumOfDigits("$125.0"))  
console.log(sumOfDigits(""))  
    

/*
Write a function named arrFactorial() which takes an array of numbers as argument and return the 
array with every number replaced with their factorials. 
Examples: 
arrFactorial([1, 2, 3 ,4])     -> [1, 2, 6, 24] 
arrFactorial([0, 5])       -> [1,120] 
arrFactorial([5 , 0, 6])     -> [120, 1, 720] 
arrFactorial([])       -> [] 

*/

const arrFactorial = () => {

}
console.log(arrFactorial([1, 2, 3 ,4]))  
console.log(arrFactorial([0, 5])) 
console.log(arrFactorial([5 , 0, 6])) 
console.log(arrFactorial([]))