console.log(`==========TASK01=======`)
/*
Write a function named findMedian() which takes two arrays of numbers as 
its arguments and return the median of the two sorted arrays. 
NOTE: The median is the middle number of a sorted array. So the median of 
[1,3], [2] would be 2. If the array has an even length, you are to find the average 
of the 2 middle numbers
findMedian([1, 3], [2])  -> 2
findMedian([1, 2], [3, 4])  -> 2.5
findMedian([4], [3])  -> 3.5
findMedian([4], [])   -> 4
findMedian([0], [0,1])    -> 0
*/

const findMedian = (num1, num2) => {
const merged = num1.concat(num2).sort((a, b) => a - b) //за зростанням

const middle = Math.floor(merged.length / 2)   //індекс середнього елементу в масиві merged:

if(merged.length % 2 === 0){
    return (merged[middle - 1] + merged[middle]) / 2   ///кщо довжина парна так — треба взяти 2 середніх числа і знайти їх середнє арифметичне
 } else {      //ліва частина індекс    права      обчислюємо середній індекс
    // непарна кількість елементів → середній елемент
    return merged[middle];

} 
}

console.log(findMedian([1, 3], [2])) 
console.log(findMedian([1, 2], [3, 4])) 
console.log(findMedian([4], [3]))  
console.log(findMedian([4], []))
console.log(findMedian([0], [0,1]))  




/*
Task-2
Requirement:
Write a function named calculateFactorial() which takes a number as an 
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer and an exclamation point. 
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial 
zero is defined as equal to 1.
calculateFactorial(0)  -> 1
calculateFactorial(1)  -> 1
calculateFactorial(5)  -> 120
calculateFactorial(6)  -> 720
calculateFactorial(10)  -> 3628800
calculateFactorial(4)  -> 24
*/


const calculateFactorial = (num) => {
    if(num === 0 || num === 1 ) return 1

      let result = 1
    for(let i = 2; i <= num; i++){
        result *= i   /// Кожен раз множимо result на i — тобто: 1 × 2 × 3 × 4 × ... × num
    }
    return result
} 

console.log(calculateFactorial(0))  
console.log(calculateFactorial(1))  
console.log(calculateFactorial(5))  
console.log(calculateFactorial(6))  
console.log(calculateFactorial(10))  
console.log(calculateFactorial(4)) 


/*
Task-3
Requirement:
Write a function named calculateGCD() which takes two numbers as 
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:     найбільше спільне число ділить без остачі
calculateGCD(8, 12)  -> 4
calculateGCD(17, 5)  -> 1
calculateGCD(48, 18)  -> 6
calculateGCD(0, 5)  -> 5
calculateGCD(21, 14)  -> 7
calculateGCD(60, 48)  -> 12
*/

const calculateGCD = (num1, num2) => {

      if (num1 === 0) return num2;
  if (num2 === 0) return num1;   // handle 0 examples 5

    let gcd = 1

    const min = Math.min(num1,num2)   // беремо менше з двох чисел

    for(let i = 1; i <= min; i++){
        if( num1 % i === 0 && num2 % i === 0)
            gcd = i   ///якщо i ділить і num1, і num2 → зберігаємо його як поточний GCD
    }
    return gcd
}
console.log(calculateGCD(8, 12)) 
console.log(calculateGCD(17, 5)) 
console.log(calculateGCD(48, 18))  
console.log(calculateGCD(0, 5))  
console.log(calculateGCD(21, 14))  
console.log(calculateGCD(60, 48))  

/*
Task-4
Requirement:
Write a function named calculateLCM() which takes two numbers as 
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that 
divides two or more integers without leaving a remainder. In other words, it is 
the largest number that is a common factor of two or more numbers.
Examples:
calculateLCM(8, 12)  -> 24
calculateLCM(17, 5)  -> 85
calculateLCM(48, 18)  -> 144
calculateLCM(0, 5)  -> 0
calculateLCM(21, 14)  -> 42
calculateLCM(60, 48)  -> 240
*/

const calculateLCM = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0; // обробляємо випадок з нулем
    let max = Math.max(num1, num2) //Ми беремо більше з двох чисел, бо LCM ніколи не може бути меншим за найбільше з них.

 while (true) { //нескінченний цикл, який буде крутитися доти, доки не знайде LCM.
    if (max % num1 === 0 && max % num2 === 0) { //Ми перевіряємо кожне число, починаючи з max, чи ділиться воно і на num1, і на num2.
      return max; // перше число, яке ділиться і на num1, і на num2
    }
    max++; /// пробуємо наступне число
  }
};

console.log(calculateLCM(8, 12))  
console.log(calculateLCM(17, 5))  
console.log(calculateLCM(48, 18))  
console.log(calculateLCM(0, 5))  
console.log(calculateLCM(21, 14)) 
console.log(calculateLCM(60, 48))  