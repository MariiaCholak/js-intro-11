/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/
let random = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    if (random < 50) console.log(`${random} is in 1st half`)
        else (`${random} is in 2nd half`)

    if (random <= 25) console.log(`${random} is in the 1st quarter`)
        else if (random <= 26)console.log(`${random} is in the 2nd quarter`)
    else if(random <=51) console.log(`${random} is in the 3rd quarter`)
else console.log(`${random} is in the 4th quarter`)

console.log(random)



/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false

*/
const num1 = 2;
const num2 = 4;
const num3 = 6;
if (num1 % 2 === 0 && num2 % 2 ===0 && num3 % 2 === 0) {
console.log( true)

}
  else  {
    console.log(false)
}
///or
 console.log(num1 % 2 === 0 && num2 % 2 ===0 && num3 % 2 === 0) 

/*
 Task03

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
 */

let char = "5"
if ((char >="A" && char < "Z") || (char >="a" && char <= "z")) {
    console.log(`${char} is a letter`)}

    else if(char >="0" && char < "9"){ console.log(`${char} is a number`)}
    else if (char === " ") console.log(`${char} is a whitespace`)
    else {console.log(`${char} is a special character`)}
/*
    Task04
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true*/

const hasBlue = function (word){
    if (word.toLowerCase().includes('Blue'))  return true 
        else (false)   
}

 console.log(hasBlue( "Hello word"))
 console.log(hasBlue( "Hello Blue  word"))



const starT = word=> {
    return word.toLowerCase().startsWith('t')

}
console.log(starT("techglobal"))
console.log(starT("Techglobal"))
console.log(starT("chglobal"))


const startE = (word)=> {
    return word.toLowerCase().startsWith('e')}
    console.log(startE('Emily'))
    console.log(startE('Mary'))

    const divisible5 = (number) => {return (number % 5 === 0)}
    console.log( divisible5(70))
    console.log( divisible5(72))


    function fullBar (number){
     if (number % (5 * 7) === 0) return ("foobar")
 else if (number % 5 === 0) return ("foo");
    
    else if (number % 7 === 0) return ("bar"); 
   
   
    else return number
}
console.log(fullBar(2))
console.log(fullBar(3))
console.log(fullBar(5))
console.log(fullBar(10))
console.log(fullBar(14))
console.log(fullBar(0))
console.log(fullBar(70))
   