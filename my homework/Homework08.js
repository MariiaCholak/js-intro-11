

console.log("============Task01===========")
/*Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/

const hasLowerCase = (str) => {
    for( const char of str){
     if(char >= 'a' && char <= 'z') return true
    }
return false
}

//// some 
const hasLowerCase1 = (str) => str.split('').some(char => char >= 'a' && char <= 'z') 
////filter
const hasLowerCase2 = (str)=> {
    return str.splite('').filter(char => char >='a' &&  char <= 'z').length > 0
}   /// if it ore then > it's return true, if not return false

console.log(hasLowerCase("")) 
console.log(hasLowerCase("JAVASCRIPT"))
console.log(hasLowerCase("hello"))
console.log(hasLowerCase("125$")) 
console.log(hasLowerCase("   a   ")) 


console.log(`============Task02===========\n`)

/*
Task-2
Requirement:
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/
const noZero = (arr) => {
    let result = []
    for(const el of arr){
if(!(el === 0)) result.push(el)
}
return result
}
//////filter
const noZero1 = (arr) => arr.filter(el => el !== 0)

console.log(noZero([1]))
console.log(noZero( [1, 1, 10]))
console.log(noZero([0, 1, 10]))
console.log(noZero([0, 0, 0])) 
console.log(noZero([10, 100, 0]))


console.log(`============Task03===========\n`)
/*
Task-3
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/

const numberAndSquare = (arr) => {
    return arr.map(num => [num, num * num])

}

console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6]))
console.log(numberAndSquare([1, 4]))
console.log(numberAndSquare([0, 0, 0]))
console.log(numberAndSquare([0, 1, -10]))

console.log(`============Task04===========\n`)
/*
Task-4
Requirement:
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/
const containsValue = (arr, str) => {
for( const element of arr){
    if(element === str) return true
}
return false
}

/////includes()
const containsValue = (arr, str) => arr.includes(str)

console.log(containsValue(["abc", "foo", "javascript"], "hello"))
console.log(containsValue(["abc", "def", "123"], "Abc"))
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")) 

console.log(`============Task05===========\n`)
/*
Task-5
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/
const reverseSentence = (str) => {
    const words = str.split(' ')
    if(words.length <= 1) return 'There is not enough words!'
    const newWords = words.reverse().map((el, index) => {
       if(index === 0) 
        return (el[0].toUpperCase() + el.slice(1).toLowerCase()) 
            else return  el.toLowerCase()
    })
return newWords.join(' ')

}
console.log(reverseSentence("Hello")) 
console.log(reverseSentence("Javascript is fun")) 
console.log(reverseSentence("This is a sentence"))



console.log(`============Task06===========\n`)
/*
Task-6
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/

const removeStringSpecialsDigits = (str) => {
 return str.split('').filter(el => ((el >= 'a' && el <= 'z') || (el >= 'A' && el <= 'Z' ||(el === " ")))).join('')
}    //// it removed also space that why we nned to add " ", means keep letter and " " space
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))
console.log(removeStringSpecialsDigits("Cypress"))
console.log(removeStringSpecialsDigits("Automation123#$%"))

console.log(`============Task07===========\n`)
/*
Task-7
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]
*/

const removeArraySpecialsDigits = (arr) => { 
return arr.map(element => {
    let result = " "
    for(const el of element){
    if ((el >= 'a' && el <= 'z')  || (el >= 'A' && el <= 'Z') || (el === ""))
   result += el
}
return result
})
}
const removeStringSpecialsDigits = (arr) => arr.map(str => str.split('').filter(char => char === ' ' || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')).join(''))
/// if it's a letter or space

const removeStringSpecialsDigits = str => {
  let result = '';

  for(let char of str){
    if(char === ' ' || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) result += char;
  }

  return result
}
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]))
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]))



console.log(`============Task08===========\n`)
/*
Task-8
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> 
["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/
const getCommons = (str1, str2) => {
    let conteiner = []
    for(const element of str1){
        if(str2.includes(element) && !conteiner.includes(element)) conteiner.push(element)
    }
return conteiner
}

const getCommons = (str1, str2) => { 
   str1 = str1.filter(i => str2.includes(i))
 let conteiner = []
 str1.forEach(element => {
  if(!conteiner.includes(element)) conteiner.push(element)
  ///// якщо резуль не включає наш елемент тоді додай наш результат елементу в контейнерб якщо це не всередині
});
return conteiner
}
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )) 
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ))
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ))

console.log(`============Task09===========\n`)
/*
Task-9
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/
const noXInVariables = (arr) => {
    let conteiner = []
    for(let element of arr){
        if (typeof element === 'string') {
        let newEll = element.split('').filter(el => el.toLowerCase() !== 'x').join('')
        conteiner.push(newEll)
     }
     else conteiner.push(element)
    }
return conteiner
} 

console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"])) 
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))



///// BILLAL DECISION
/*
*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/ 

const noXInVariables = arr => {
  return arr.map(ele => typeof ele === 'string' ? ele.split('').filter(ele => ele.toLowerCase() !== 'x').join('') : ele)
  .filter(ele => ele)
}    // we take each index of arr  remove x and return it back
///  el first it's string and we convert it arr, then filter takes condition if the words it's not x, then addad it to our arr, jion them together  
//// because spit use only for string and we can't use it for numbers, that why we need to check if it is str
const noXInVariables2 = arr => {
  let result = [];
  for(let ele of arr){
    if(typeof ele === 'string'){
      result.push(ele.split('').filter(ele => ele.toLowerCase() !== 'x').join(''))
    }else{
      result.push(ele)   /// if not string just return elle back 
    }
  }/// because we return  everything and where we have x we have "" we don't neet that
  return result.filter(ele => ele)/// we just return our element w no space
}

console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))

/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> 
["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

const getCommons = (arr1, arr2) => {
  let result = []

  for(let ele of arr1){
    if(arr2.includes(ele) && !result.includes(ele)) result.push(ele)
  }

  return result
}

const getCommons = (arr1, arr2) => arr1.reduce((result, ele) => (arr2.includes(ele) && !result.includes(ele)) ? result.concat(ele) : result, [])


function getCommons(arr1, arr2) {
  let result = []
  for (let el of arr1) {
    for (let item of arr2) {
      if (el === item && !result.includes(el)) result.push(el) ;
    }
  }
  return result;
}


console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]))//[]
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]))//["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#", "C++"], ["Python", "C#", "C++"]))//["C#", "C++"]

/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/

const removeStringSpecialsDigits = str => str.split('').filter(char => char === ' ' || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')).join('')

const removeStringSpecialsDigits = str => {
  let result = '';

  for(let char of str){
    if(char === ' ' || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z')) result += char;
  }

  return result
}
console.log(removeStringSpecialsDigits("123Javascript #$%is fun"))
console.log(removeStringSpecialsDigits("Cypress"))
console.log(removeStringSpecialsDigits("Automation123#$%"))


/*
Requirement:
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

const reverseSentence = str => {
  if(!str.includes(' ')) return "There is not enough words!"

  let result =  str.split(' ').reverse().join(' ').toLowerCase()
  return result[0].toUpperCase() + result.slice(1)
}

console.log(reverseSentence("Hello"))
console.log(reverseSentence("Javascript is fun"))
console.log(reverseSentence("This is a sentence"))

/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/

const numberAndSquare = arr => arr.map(n => [n, n**2])

console.log(numberAndSquare([1, 2, 3]))
console.log(numberAndSquare([0, 3, -6]))
console.log(numberAndSquare([1, 4]))
console.log(numberAndSquare([0, 0, 0]))
console.log(numberAndSquare([0, 1, -10]))












