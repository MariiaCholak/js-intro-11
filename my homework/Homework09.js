
console.log("============Task01===========")
/*Requirement:
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz"
*/
const fizzBuzz1 = (num) => {
if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
else if(num % 3 === 0) return "Fizz"
else if(num % 5 === 0) return "Buzz"
else return num
}
//// shorter version (num) => (um % 3 === 0 ? 'Fizz' : "") + (num % 5 === 0? 'Buzz' : "") || num (ось це поверне наше один бо під жодну умову не попадає)
    console.log(fizzBuzz1(0))
    console.log(fizzBuzz1(1)) 
    console.log(fizzBuzz1(3)) 
    console.log(fizzBuzz1(5)) 
    console.log(fizzBuzz1(30)) 
    console.log(fizzBuzz1(10))
    console.log(fizzBuzz1(15)) 
    console.log(fizzBuzz1(-15))



console.log(`============Task02===========\n`)
Requirement:
/*Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
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
console.log(fizzBuzz2(3)) 
console.log(fizzBuzz2(5)) 
console.log(fizzBuzz2(10)) 
console.log(fizzBuzz2(15))   
console.log(fizzBuzz2(2))

console.log(`============Task03===========\n`)
/*
Requirement:    ***********
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/
const findSumNumbers = (str) => {
let sum = 0;
let currNum = '';
const digit = str.split('').filter(char => char >= '0' && char <= '9')
    digit.forEach(char => currNum += char)
 if(currNum)
    sum += parseInt(currNum, 10)

return sum
}

console.log(findSumNumbers("abc$"))
console.log(findSumNumbers("a1b4c  6#"))
console.log(findSumNumbers("ab110c045d"))
console.log(findSumNumbers("525")) 
console.log(findSumNumbers("3 for 10 dollars"))

// we will loop throug here, and also if we  find our num instead to add it to our total will creat our que черги and that Q if the next it's also num add it as together if it leeter it broke the chain 
/// then i will convert that str to num and will add to sum
let total = 0
let currenNum = "" /// our qoue we will add our string num
for (char of str){
  if(char >= '0' && char <= '9'){
    currenNum += char  /// we need add it to our Q
  } else {
    if(currenNum){
      total += Number(currenNum)
      currenNum = ""
    }
   
  }
}
 if(curenNumI ) total += Number(currenNum)
return total

 ///// regect much better way
 return str.split(/[^0-9]+/)   //   // means regect [] it inside what we need (numers) +one or more char ^означає опозит розділи усе що не є цифрою  
// sinse it's arr we can use reduce
.reduce((sum,  num) =>{ 
num ? sum += Number(num) : num       // ми знаємо що це або наш нам або "" тому зробили таку умову якщо це нам додац нашу суму якщо ні лтшт нфь
}, 0)

console.log(`============Task04===========\n`)
Requirement: ///// *******
/*Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10
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

console.log(`============Task05===========\n`)
/*Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

///don't know how to solve it, used(chat), ask teacher

const countOccurrencesOfCharacters = (str) => {
    
  let counts = {};  
  let result = "";  

  for (let char of str) {  
    counts[char] = (counts[char] || 0) + 1; 
    result += counts[char] + char;  
  }

  return result;  
}
//// teacher
const countOccurrencesOfCharacters = str => {
  if(str === '') return ""; // якщо рядок порожній — повертаємо порожній
  let result = '';           // результат, який повернемо
  let currentChar = str[0];  // поточний символ, з якого починаємо
  let currentCharCount = 1;  // скільки разів поточний символ зустрівся
  for(let i = 1; i < str.length; i++){
    if(str[i] === currentChar) currentCharCount += 1;  // той самий символ Якщо символ такий самий як попередній — збільшуємо лічильник.
    else {
      result += currentCharCount + currentChar;  // додаємо в результат кількість + символ
      currentChar = str[i];                      // оновлюємо символ
      currentCharCount = 1;                      // лічильник знову з 1
    }
  }
  result += currentCharCount + currentChar;
  return result;
}


console.log(countOccurrencesOfCharacters())
console.log(countOccurrencesOfCharacters("abc"))
console.log(countOccurrencesOfCharacters("abbcca"))
console.log(countOccurrencesOfCharacters("aaAAa"))
console.log(countOccurrencesOfCharacters("www" ))


console.log(`============Task06===========\n`)
/*Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/
const fibonacciSeries1 = (n) => {
    let result = []
    const fibo = (num) => {
        if(num === 0) return 0
        if(num === 1) return 1
        return(fibo(num - 1) + fibo(num - 2))
    }
    for(let i = 0; i < n; i++){
        result.push(fibo(i))
    }
return result
}

///// teacher  
const fibonacciSeries1 = n => {//5
  if(n === 1) return [0]  /// check if num = 1 then it's 0 return arr of 0
if(num === 2) return [0,1] 

  let arr = [0,1];//[0,1,1,2,3]/ if it's more then 2 we nned to loop... Починаємо з базових значень Фібоначчі

  for(let i = 2; i < n; i++){//i=5    
    arr.push(arr[i - 1] + arr[i - 2])
  }

  return arr;
}
//0 1 1 2 3 5 8 13 Починаючи з індексу 2, додаємо нові числа як суму двох попередніх.
/*
Наприклад:

i = 2: 1 + 0 = 1

i = 3: 1 + 1 = 2

i = 4: 2 + 1 = 3

i = 5: 3 + 2 = 5
*/
console.log(fibonacciSeries1(3)) 
console.log(fibonacciSeries1(5))
console.log(fibonacciSeries1(7))
console.log(fibonacciSeries1(8))
console.log(fibonacciSeries1(1))
console.log(fibonacciSeries1(2))



console.log(`============Task07===========\n`)
/*Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
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

console.log(`============Task08===========\n`)
/*
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
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

console.log(`============Task09===========\n`)

/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/
const isPowerOf3 = (num) => {
    let power = 1
    while (power <= num) {
   
   if(power === num) return true
    power *= 3 
    }
    return false
}
//// 
for(let i = num; i > 0; i/=3)
  if(i === 1)return true ///
return false  //// if i never rich 1

console.log(isPowerOf3(1))
console.log(isPowerOf3(2))
console.log(isPowerOf3(3))
console.log(isPowerOf3(27))
console.log(isPowerOf3(100))
console.log(isPowerOf3(81))
console.log(isPowerOf3(9))


////// bilal decision
//task 3
/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
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
  
  
  const findBiggestNumber = str => {
    let numArr = [];
    let numberContainer = '';
  
    for(let char of str){
      if(char >= '0' && char <= '9') numberContainer += char;
      else{
        numArr.push(Number(numberContainer))
        numberContainer = '';
      }
    }
  
    numArr.push(Number(numberContainer))
    return numArr.sort((a,b) => b-a)[0];
  }
  
  console.log(findBiggestNumber("abc$"));            
  console.log(findBiggestNumber("a1b4c  6#"));       
  console.log(findBiggestNumber("ab110c045d"));      
  console.log(findBiggestNumber("525"));             
  console.log(findBiggestNumber("3 for 10 dollars"));
  
  
  // Task 5
  /*
  Requirement:
  Write a function named countOccurrencesOfCharacters() which takes a 
  string argument and returns the count of repeated characters in the String. 
  NOTE: If given String is empty, then return empty String. 
  NOTE: It is case sensitive.
  Examples:
  countOccurrencesOfCharacters("")  -> ""
  countOccurrencesOfCharacters("abc")  -> "1a1b1c"
  countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
  countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a"
  countOccurrencesOfCharacters("www" ) -> "3w"
  */
  
  //aaAAa
  const countOccurrencesOfCharacters = str => {
    if(str === '') return "";
    let result = '';
    let currentChar = str[0];
    let currentCharCount = 1;
  
    for(let i = 1; i < str.length; i++){
      if(str[i] === currentChar) currentCharCount += 1;
      else {
        result += currentCharCount + currentChar;
        currentChar = str[i];
        currentCharCount = 1;
      }
    }
  
    result += currentCharCount + currentChar;
    return result;
  }
  
  console.log(countOccurrencesOfCharacters(""));        
  console.log(countOccurrencesOfCharacters("abc"));     
  console.log(countOccurrencesOfCharacters("abbcca"));  
  console.log(countOccurrencesOfCharacters("aaAAa"));   
  console.log(countOccurrencesOfCharacters("www"));  
  
  
  /*
  Requirement:
  Write a function named fibonacciSeries1() which takes a number n argument 
  and returns the n series of Fibonacci numbers as an array.  
  REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
  Examples:
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
  Requirement:
  Write a function named findUniques() which takes two array of number 
  arguments and returns the array which has only the unique values from both 
  given arrays.
  NOTE: If both arrays are empty, then return an empty array. 
  NOTE: If one of the array is empty, then return unique values from the other 
  array.
  Examples:
  findUniques([], [])  -> []
  findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
  findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
  findUniques([8, 9], [9, 8, 9])  -> []
  findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2
  */
  
  const findUniques = (arr1, arr2) => {
    let uniques = [];
    let combinedArr = [...new Set(arr1.concat(arr2))];
  
    //console.log(combinedArr)
    for(let num of combinedArr){
      if(!(arr1.includes(num) && arr2.includes(num))) uniques.push(num)
    }
  
    return uniques
  }
  
  console.log(findUniques([], []));             
  console.log(findUniques([], [1, 2, 3, 2]));   
  console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
  console.log(findUniques([8, 9], [9, 8, 9])); 
  console.log(findUniques([-1, -2], [1, 2])); 
  
  // Task 9
  /*
  Requirement:
  Write a function named isPowerOf3() which takes a number argument and 
  returns true if given number is equal to 3 power of the X. Otherwise, return 
  false. 
  NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
  NOTE: Ignore negative scenarios.
  Examples:
  isPowerOf3(1)  -> true
  isPowerOf3(2)  -> false
  isPowerOf3(3)  -> true
  isPowerOf3(27)  -> true
  isPowerOf3(100)  -> false
  isPowerOf3(81)  -> true
  isPowerOf3(9)  -> true
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


  //task 3
/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
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


const findBiggestNumber = str => {
  let numArr = [];
  let numberContainer = '';

  for(let char of str){
    if(char >= '0' && char <= '9') numberContainer += char;
    else{
      numArr.push(Number(numberContainer))
      numberContainer = '';
    }
  }

  numArr.push(Number(numberContainer))
  return numArr.sort((a,b) => b-a)[0];
}

console.log(findBiggestNumber("abc$"));            
console.log(findBiggestNumber("a1b4c  6#"));       
console.log(findBiggestNumber("ab110c045d"));      
console.log(findBiggestNumber("525"));             
console.log(findBiggestNumber("3 for 10 dollars"));


// Task 5
/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a"
countOccurrencesOfCharacters("www" ) -> "3w"
*/

//aaAAa
const countOccurrencesOfCharacters = str => {
  if(str === '') return "";
  let result = '';
  let currentChar = str[0];
  let currentCharCount = 1;

  for(let i = 1; i < str.length; i++){
    if(str[i] === currentChar) currentCharCount += 1;
    else {
      result += currentCharCount + currentChar;
      currentChar = str[i];
      currentCharCount = 1;
    }
  }

  result += currentCharCount + currentChar;
  return result;
}

console.log(countOccurrencesOfCharacters(""));        
console.log(countOccurrencesOfCharacters("abc"));     
console.log(countOccurrencesOfCharacters("abbcca"));  
console.log(countOccurrencesOfCharacters("aaAAa"));   
console.log(countOccurrencesOfCharacters("www"));  


/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
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
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2
*/

const findUniques = (arr1, arr2) => {
  let uniques = [];
  let combinedArr = [...new Set(arr1.concat(arr2))];

  //console.log(combinedArr)
  for(let num of combinedArr){
    if(!(arr1.includes(num) && arr2.includes(num))) uniques.push(num)
  }

  return uniques
}

console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));   
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2])); 

// Task 9
/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
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


