
console.log("============Task01===========")
/*    
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

 const calculateTotalPrice1 = (fruits) => {
    const price = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }
    let totalPrice = 0     //// our total    /// 6 dol apple
    for(let fruit in fruits){
            totalPrice += fruits[fruit] * price[fruit]   //(item is apple and we * w  amound of (item we have apple)
        }                                                /// it's first multiply price and amound of items
        return totalPrice
 }
    
    ///// we need to take our object at iterate , takes value, and depends on the fruits it  multiply value
    /// w specific price and add to total

    console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); 
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); 
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); 
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); 

 


console.log(`============Task02===========\n`)
/*
Task-2
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51

*/
const alculateTotalPrice2 = (fruits) => {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }
    let totalPrice = 0  
    for( let item in fruits) {
        const noSale =  fruits[item] * prices[item]  // price for fruits with no any sales, our frood * w price Це повна вартість без знижки (кількість × ціна).
    let sale = 0  ///Змінна для суми знижки (буде відніматися з noSale).
        if(item === 'Apple')
  sale = Math.floor(fruits[item]  / 2) * prices[item] / 2 /// quntity of apple, заокругл щоб не мати дріб. це рахує ск яблук є на знижці
                                        /// calcul full price and / 2,  we devided by second 2 because it's half of every second app
                                        
        else if( item ==='Mango')    ///to find every 4th mango we need to / by 4
       sale = Math.floor(fruits[item]  / 4) * prices[item]   // but here full price 
       
       total += noSale - sale   ///До загальної суми додаємо вартість без знижки мінус знижка. 
               
    }
    return total=== 0 ? total : total.toFixed(2) // Якщо загальна сума 0 — повертаємо число 0.
}
///Math.floor(fruits[item] / 2) — кількість яблук зі знижкою.

/// *  prices[item] / 2 — для кожного з них ми враховуємо лише половину вартості (бо знижка 50%).

///Math.floor(fruits[item] / 4) — кількість безкоштовних манго (кожне 4-те).

///* prices[item] — повна вартість, яку віднімаємо, бо ці манго — безкоштовні

    
    ///// class recap
const calculateTotalPrice2 = cart => {
    let prices = { apple: 2.00 , orange: 3.29, mango: 4.99, pineapple: 5.25 }

    let total = 0;

    for(let item in cart){     /// for obj wii take the key (apple, mango) it's not takem the value to take value we need to => item['Apple'] => gives price of apple
        let noSalePrice = cart[item] * prices[item]
        let sale = 0;
        if(item === 'apple'){
            sale = (Math.floor(cart['apple'] / 2) * prices['apple']) / 2

        }else if(item === 'mango'){
            sale = (Math.floor(cart['mango'] / 4)) * prices['mango']
        }

        total += noSalePrice - sale;
         
    }
    return total === 0 ? 0 : total.toFixed(2)

}


console.log(`============Task03===========\n`)
/*
Task-3
Requirement:
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
Examples:
nthWord("I like programming languages", 2)  -> "like"
nthWord("QA stands for Quality Assurance", 4)   -> "Quality"
nthWord("Hello World", 3)  -> ""
nthWord("Javascript", 1)  -> "Javascript”
nthWord("", 1)  -> ""
*/

const nthWord = (str, num) => {         ///str.split(' ')[num -1] || ""   це скорочена версія коду на одну лінію
       const words =  str.split(' ')  /// first we split our str  
        return words[num -1]    || "" ////now we need take out index what we wants   we need to take -1 from our num
              // it's going try returning first condition  if it's underdined it wont return it it will return ""  
    }


console.log(nthWord("I like programming languages", 2))  
console.log(nthWord("QA stands for Quality Assurance", 4))  
console.log(nthWord("Hello World", 3)) 
console.log(nthWord("Javascript", 1)) 
console.log(nthWord("", 1)) 


console.log(`============Task04===========\n`)
/*
Task-4
Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(153)  -> true
isArmstrong(1111)  -> false
*/

const isArmstrong = (num) => {     
    const digit = num.toString().split('');
    const length = digit.length
    const sum = digit.reduce((acc, curr) => {
    return acc + Math.pow(parseInt(curr), length)
    }, 0)

   return sum === num
    
    }
    /// first we convert to a string
    /// then we can split it by empty str so each num is going to be separate index of an arr  
    /// and then loop or arr func(reduce)
    /*
    Число називається Armstrong (або Narcissistic number), якщо сума його цифр, піднятих до степеня кількості цифр, дорівнює самому числу.

Приклад:
153 → 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✅
123 → 1³ + 2³ + 3³ = 36 ❌
Що відбувається в цьому рядку?
🔢 Умови:
digit — це символ (наприклад, '1', '5', '3' із числа 153)

Number(digit) — перетворює його на число (1, 5, 3)

numOfDigits — кількість цифр у числі (у 153 — це 3)

** — оператор піднесення до степеня (ES6)


    
    */
    


    const isArmstrong = num => {
        let result = 0;
    
        //153 -> [1,5,3]
        let numAsArr = num.toString().split('')
        let numOfDigits = numAsArr.length // Довжина числа (кількість цифр)
    
        for(let digit of numAsArr){
            result += Number(digit) ** numOfDigits
        }
        return result === num /// Порівнюємо результат із початковим числом
    }
    /// total iter num num or total, digit -every index of our arr  num.toString().length Це спосіб знайти довжину числа (тобто кількість його цифр), яка нам потрібна, щоб піднести кожну цифру до правильного степеня.
    const isArmstrong = num => num.toString().split('').reduce((total, digit) => total + Number(digit) ** num.toString().length, 0) === num
    console.log(isArmstrong(153)) 
    console.log(isArmstrong(123))  
    console.log(isArmstrong(1634))  
    console.log(isArmstrong(153))  
    console.log(isArmstrong(1111))  





console.log(`============Task05===========\n`)
/*
Task-5
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
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

console.log(`============Task06===========\n`)
/*
Requirement:
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false. 
Examples:
doubleOrTriple([1, 5, 10], true)  -> [2, 10, 20]
doubleOrTriple([3, 7, 2], false) -> [9, 21, 6]
doubleOrTriple([-1, -2], true)  -> [-2, -4]
doubleOrTriple([0], false)  -> [0]
doubleOrTriple([-1, 0, 1], true)  -> [-2, 0, 2]
*/
 const doubleOrTriple = (arr, bool) => {      
if(bool){
    return arr.map(num => num * 2) 
}else{
    return arr.map(num => num * 3) 
}

 }
       

console.log(doubleOrTriple([1, 5, 10], true))  
console.log(doubleOrTriple([3, 7, 2], false))
console.log(doubleOrTriple([-1, -2], true) ) 
console.log(doubleOrTriple([0], false))
console.log(doubleOrTriple([-1, 0, 1], true))  

console.log(`============Task07===========\n`)
/*
Task-7
Requirement:
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/
const splitString = (str, num) => {
    if( str.length < num || str.length % num !== 0) return ""
let result = []
for(let i = 0; i < str.length; i += num){  /// i починається з 0 і збільшується на num після кожної ітерації
result.push(str.slice(i, i +num))  ///У кожній ітерації ми використовуємо метод slice, щоб отримати підрядок з довжиною num, починаючи з індексу i і до індексу i + num
}
return result.join(' ') /// join our element into "" w spaces
}
console.log(splitString("Automation", 3))
console.log(splitString("Hello", 6))
console.log(splitString("JavaScript", 5)); 
console.log(splitString("Java", 2));
console.log(splitString("12", 1));


//////// recap bilal

/* Task 7

*/

//str = "JavaScript"
//container = 'Ja va '

const splitString = (str, num) => {
    if(str.length < num || str.length % num !== 0) return ''

    let result = ''
    while(str.length > 0){/// Цикл while працює, поки рядок str не спорожніє.
        result += str.slice(0, num) + ' '    /// from 0 to our num but not includ +// str.slice(0, num) — беремо перші num символів з str.
        str = str.slice(num)     //// from num to the end of str
    }  

    return result.trim()
    /*
    str = "JavaScript"
    num = 4
    1-а ітерація: result = "" + "Java" + " " → result = "Java "
    Після кількох ітерацій:
Для splitString("JavaScript", 5)

result += "JavaS " (залишається "cript")

result += "cript "
→ result = "JavaS cript "
*/
}

const splitString = (str, num) => {
    if(str.length < num || str.length % num !== 0) return ''

    let result = ''
    for(let i = 0; i < str.length; i+=num){
        result += str.slice(i, i+num) + ' '  /// result += str.slice(i, i + num) + ' ';
      ///  str.slice(i, i + num) — беремо підрядок довжиною num, починаючи з індексу i
        //  Додаємо до result + ' ' (пробіл)
    }

    return result.trim()
}

console.log(splitString("JavaScript", 5));
console.log(splitString("JavaScript", 2));
console.log(splitString("Java", 2) );
console.log(splitString("Automation", 3));
console.log(splitString("Hello", 6));
console.log(splitString("12", 1));


/*
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/

const reverseNumber = num => {//123
    let result = 0;//0 -> 3 -> 32 -> 321

    for(let i = num; i > 0; i = Math.floor(i / 10)){//1
        result = (result * 10) + (i % 10) 
    }
    return result
}
console.log(reverseNumber(371));





/*
Requirement:
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 
Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
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
Requirement:
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

const calculateTotalPrice1 = cart => {
    let prices = { apple: 2.00 , orange: 3.29, mango: 4.99, pineapple: 5.25}

    let total = 0;

    for(let item in cart){
        total += cart[item] * prices[item] 
    }
    return total

}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 }))


/*
Requirement:
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.
1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice1({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
*/

const calculateTotalPrice2 = cart => {
    let prices = { apple: 2.00 , orange: 3.29, mango: 4.99, pineapple: 5.25 }

    let total = 0;

    for(let item in cart){
        let noSalePrice = cart[item] * prices[item]
        let sale = 0;
        if(item === 'apple'){
            sale = (Math.floor(cart['apple'] / 2) * prices['apple']) / 2

        }else if(item === 'mango'){
            sale = (Math.floor(cart['mango'] / 4)) * prices['mango']
        }

        total += noSalePrice - sale;
         
    }
    return total === 0 ? 0 : total.toFixed(2)

}
console.log(calculateTotalPrice2({ apple: 3, mango: 5 })); 
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 })); 
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 })); 
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango: 3 })); 