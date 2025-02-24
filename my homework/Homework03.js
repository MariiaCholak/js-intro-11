console.log('==========Task1=========\n');

/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true
*/

 let r1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let r3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(r1, r2, r3);

function average() {
  return  ((r1 + r2 + r3) / 3 >= 50) ;
}
console.log(average());


console.log('==========Task2=========\n');
/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
let random1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let random2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let random3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
console.log(random1, random2, random3)

if (random1 === random2 && random2 === random3 ){
    console.log("TRIPLE MATCH ")
} else if(random1 === random2 ||random1 === random3 || random2 === random3){
    console.log("DOUBLE MATCH")
}
else  {
    console.log("NO MATCH")}

console.log('==========Task3=========\n');
/*
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/
const hasA = function(word) {
    return word.toLowerCase().includes("a")
}
console.log(hasA("Mariia"))
console.log(hasA("Tech"))
console.log(hasA("orange"))
console.log(hasA("June"))


console.log('==========Task4=========\n');
/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
 function doubleOrTripleWord(word){
    if (word.length % 2 === 0) {
    return word.repeat(3)}
 else {
    return word.repeat(2) }
}

 
console.log(doubleOrTripleWord('Mariia'));
console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Banan'));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));

 



console.log('==========Task5=========\n');
/*
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/

function firstWord(word) {
    if (word === ''){
        return '';
    }
    else {
        return  word.split(' ')[0] }
    }


console.log(firstWord("Hello Mariia"));
console.log(firstWord("Paris"));
console.log(firstWord(" "));
console.log(firstWord("123 745"));


console.log('==========Task6=========\n');
/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(word) {
    if (word === "") return "";
    let word1 = word.split(" ")
   return word1[0], word1[word1.length - 1]
}

console.log(lastWord("Hello Mariia"));
console.log(lastWord(" "));
console.log(lastWord("I like Paris"));

console.log('==========Task7=========\n');

/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(word){
   if  ( word === "") return '';
let words = word.split(" ")
 return words[0] + words[words.length - 1]
}
 console.log(firstlastWord("Hello Mariia"));
 console.log(firstlastWord(" "));
 console.log(firstlastWord("I like Paris"));




console.log('==========Task8=========\n');
/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/
 
function startVowel (word) {
    if (word.trim() === "") return false; 
    return  /[aeiouAEIOU]/.test(word[0]);  
}

 console.log(startVowel("Hello"))
 console.log(startVowel("Mariia"))
 console.log(startVowel("Aloxa"))
 console.log(startVowel(" "))


console.log('==========Task9 =========\n');
/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/
 
const swap4 = function(word){
    return  ( word.length < 8 ) ? "" : word.slice(-4) + word.slice(4,-4) + word.slice(0, 4)}
      
console.log(swap4("TechGlobal"))
console.log(swap4(" "))
console.log(swap4("Mary"))
console.log(swap4("University"))



console.log('==========Task10=========\n');
/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
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
    
   if (words.length < 2 )
    return ""; 
let fword  = words[0]
let lword = words[words.length - 1] 
words[0] = lword
words[words.length - 1] = fword 
return words.join( " ")
}

console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("Maria"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord(" Today is a nice day"))

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
   return  word.toLowerCase().includes('blue')
    }

 console.log(hasBlue( "Hello word"))
 console.log(hasBlue( "Hello Blue  word"))


 function hasBlue(str){
    let result = str.toLowerCase().includes('blue')
    return result
  }


  Task05
/*
Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

 //way 1
const startT12 = word => {
  return word.toLowerCase().startsWith('t')
}


const startT1 = word => {
    return word[0] === "t" || word[0] === "T"
}
  return word.toLowerCase()[0] === 't'
   
  
  //way 2
const startT2 = word => {
  return word.startsWith('t') || word.startsWith('T')
}

//way3 regex
const startT3 = word => {
  return /^[t]/i.test(word)
}
console.log(startT3("typescript"))
console.log(startT3("TechGlobal"))
console.log(startT3("1234"))
console.log(startT3("ABC"))



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
   