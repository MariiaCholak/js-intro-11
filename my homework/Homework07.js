
console.log('=========Task1=========')
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false

*/
const hasUpperCase = (str) => {
   for(letter of str){
    if(letter >= 'A' && letter <= 'Z') return true
   }
   return false
}
//// array method
const hasUpperCase1 = (str) => str.split("").some(str => str >= "A" && str <= "Z");
///// filter 
const hasUpperCase11 = (str) => str.split("").filter(letter => letter >= "A" && str <= "Z"). length > 0
                                                        //// true ot false if the length more then 0
console.log(hasUpperCase("javascript"))
console.log(hasUpperCase("John"))
console.log(hasUpperCase("$125.0"))
console.log(hasUpperCase(""))

console.log('=========Task2=========\n')
/*

Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"

*/
 
const noDigit = (str) => {
    let conteiner = []
    for(let elem of str){
        if(!(elem <= '9' && elem >= '0')) conteiner.push(elem)
    }
return conteiner.join('')
}
console.log(noDigit(""))
console.log(noDigit("Javascript"))
console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))
str.split('').filter(elem => !(elem <= '9' && elem >= '0')).join('')
                    ////filter(i => i < '0' || i > '9').join('')



console.log('=========Task3=========\n')
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/
const noVowel1 = (char) => {
    let vowels = ['a','e', 'i', 'o', 'u']
return char.split('').filter(str => !vowels.includes(str.toLowerCase())).join('')
}

///// teacher way 
return char.split('').filter(str => !('aeiou'.includes(str.toLowerCase()))).join('')

 console.log(noVowel("TechGlobal"))
 console.log(noVowel("AEOxyz"))
 console.log(noVowel("Javascript"))
 console.log(noVowel(""))
 console.log(noVowel("125$"))

 const noVowel = (char) => {
let vowels = ['a','e', 'i', 'o', 'u']
let result = []
for(let elem of char){
    if(!vowels.includes(elem.toLowerCase())) result.push(elem)
}
return result.join('')
} 
console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel(""))
console.log(noVowel("125$"))



console.log('=========Task4=========\n')
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

const no13 = (arr) => arr.map(element => element === 13 ? 0 : element)

console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))

//// for of

const no13 = (arr) => {
    let result = []
    for(let el of arr){
        if(el === 13) result.push(0)
            else result.push(el)

    }
    return result
}
console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))


console.log('=========Task5=========\n')
/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/
const middleInt = (num1, num2, num3) => {
    const nums = [num1, num2, num3]
    nums.sort((a,  b) => a - b)
    return nums[1]
} ////// short vershion  => [num1, num2, num3].sort((a, b) => a - b)[1]     //// we didn't create a variable

////for of loop
const middleInt = (num1, num2, num3) => {
    const nums = [num1, num2, num3]
    let middle = ""
    for(let n of nums){
        if(n > Math.min(...nums) && n < Math.max(...nums)){
             middle = n
}
    }
return middle

}

console.log(middleInt(1, 2, 2))
console.log(middleInt(5, 5, 8))
console.log(middleInt(5, 3, 5))
console.log(middleInt(1, 1, 1))
console.log(middleInt(-1, 25, 10))


console.log('=========Task6=========\n')
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0

*/   
 const sumOfDigits1 = (str) => {
    let sum = 0
     for( let digit of str){
        if (digit >= '0' && digit <= '9') {
         sum +=parseInt(digit)
     }
 } 
     return sum
  
 }
///// reduce method
    const sumOfDigits = (str) => str.split('').reduce((acc, curr) => {
        if (curr >= '0' && curr <= '9'){
            return acc + parseInt(curr)
    }
    return acc
    }, 0)


  /////  filter
  (str) => str.split('').filter(el => el >= '0' && el <= '9').reduce((sum, num) => {
sum += Number(num)    ///// because our num isstring and we convert it to num with Num
  }, 0)

console.log(sumOfDigits("Javascript"))
console.log(sumOfDigits("John’s age is 29"))
console.log(sumOfDigits("$125.0"))
console.log(sumOfDigits(""))

console.log('=========Task7=========\n')
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []

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

const arrFactorial1 = (arr) => {
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


console.log('=========Task8=========\n')
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

const categorizeCharacters = (str) => {
    let letter = []
    let digits = []
    let specials = []
    for(let el of str ){
        if((el >= 'A' && el <= 'Z') || (el >= 'a' && el <= 'z')) letter.push(el)
            else if(el >= '0' && el <= '9') digits.push(el)
        else specials.push(el)
}
return [letter.join(''), digits.join(''), specials.join('')]
}


console.log(categorizeCharacters("1234"))
console.log(categorizeCharacters("abc123$#%"))
console.log(categorizeCharacters("12ab$%3c%"))


/// reduce
const categorizeCharacters1 = (str) =>{
        return str.split('').reduce((acc, curr) => {
        if((curr >= 'A' && curr <= 'Z') || (curr >= 'a' && curr <= 'z'))////// curr.toLowerCase() >= 'a' && curr.toLower <= 'z'   /// and we don't deen to check upper
             acc[0]  += curr
        else if (curr >= '0' && curr <= '9')
             acc[1] += curr
            else
             acc[2] += curr

    return acc
    },  ['', '', ''])     /// it's add to our index
}
console.log(categorizeCharacters1("1234"))
console.log(categorizeCharacters1("abc123$#%"))
console.log(categorizeCharacters1("12ab$%3c%"))

