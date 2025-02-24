/*
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false

Test data 1: 0, 1
Expected result 1: false

Test data 2: 0, 0
Expected result 2: true

Test data 3: 1, 0
Expected result 3: false

Test data 4: 1, 1
Expected result 4: true
*/
let sum11 = 0
let sum12 = 1
if (sum11 === sum12) console.log(true)
    else console.log(false)
/// using if else not the best practice here внизву краще

let num1 = getRandomNumber(0, 1);
let num2 = getRandomNumber(0, 1);
console.log(num1 === num2);


/*
Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 3: "$"
Expected result 3:
INVALID INPUT
*/

//// АЛЕ КОЛИ ПЕРЕВІРЯЄ СЛОВО ТО ПЕРЕВІРЯЄ ПЕРШУ БУКВУ НАПР mARIIA, ТОМУ ТРЕБА ВЖИВ LEnght
///FIRST CHECK IF IT'S EQUEL TO ONE, if it's not 1 litter it's invalid if one it's good
let CHAR = 'V'   //// "5"   /// $(INVALID INPUT)  /// mariia -invalid
if (CHAR.length !== 1) console.log("INVALID INPUT")
if ((CHAR >= 'a' && CHAR <= 'z') || (CHAR >= 'A' && CHAR <= 'Z'))
    console.log(`"${CHAR}" is a letter`);

else if (CHAR >= '0' && CHAR <= '9')
    console.log(`"${CHAR}" is a digit`);
else console.log("INVALID INPUT")


    let char2 = 'T';
let char2Code = char2.charCodeAt(0);

if(char2Code >= 48 && char2Code <= 57) {
  console.log(`"${char2}" is a digit`);
}
else if((char2Code >= 65 && char2Code <= 90) || (char2Code >= 97 && char2Code <= 122)) {
  console.log(`"${char2}" is a letter`);
}
else {
  console.log('INVALID INPUT');
}


/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a" is a lowercase letter

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N" is an uppercase letter

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/


let char44 = "$"   // f, 6(inv)   ^ inv
if( char44.length !== 1) console.log ("Invalid Input")
   if (char44 >= "a" && char44 <= "z") console.log(` ${char44} is a lowercase`) ;
    else if  (char44 >= "A" && char44 <= "Z") console.log(` ${char44} is a uppercase`) ;
    else console.log("Invalid Input")





let char3 = 'Z';
let char3code = char3.charCodeAt(0);

if (char3code >= 65 && char3code <= 90) {
    console.log(`"${char3}" is a uppercase letter`);
}
else if (char3code >= 97 && char3code <= 122) {
    console.log(`"${char3}" is a lowercase letter`);
}
else {
    console.log("INVALID INPUT");
}




/*
Task04

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Special character: except space, letters, digits

Test data 1: "a"
Expected result 1:
"a" is not a special 
character

Test data 2: "5"
Expected result 2:
"5" is not a special 
character

Test data 3: "$"
Expected result 3:
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is not a special character
*/


/// це моє
let char77 = "D";
 if (char77.length !==1 ){ console.log("Invalid Input")

 } if ((char77 >= 'a' && char77 <= 'z') || (char77 >= "A" && char77 <= "Z") || (char77 >= '0' && char77 <= '9' )) {
 console.log(`${char77} is not a special character`) }
  else console.log(`${char77} is a special character`);
   
  
  //вчителя
let char4 = '+';
let char4Code = char4.charCodeAt(0);

if((char4Code >= 48 && char4Code <= 57) || (char4Code >= 65 && char4Code <= 90) || (char4Code >= 97 && char4Code <= 122) || char4Code === 32) {
  console.log(`"${char4}" is not a special character`);
}
else {
  console.log(`"${char4}" is a special character`);
}

/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a" is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N" is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

// 3 ways to solve this task
///  mine
let char66 = "O"
let vowels  = 'aeiouAEIOU';
if (!(char66 >= 'a' && char66 <= 'z' || char66 >= "A" && char66 <= "Z"))
    console.log("Invalid Input")
else if ( vowels.includes(char66)) console.log('is vowel')
    else console.log('is not vowel')


let char5 = 'O';
let char5Code = char5.charCodeAt(0);

if((char5Code >= 65 && char5Code <= 90) || (char5Code >= 97 && char5Code <= 122)) {
  if('aeiouAEIOU'.includes(char5)) {
    console.log(`"${char5}" is a vowel`);
  }
  else {
    console.log(`"${char5}" is not a vowel`);
  }
}
else {
  console.log('INVALID INPUT');
}


let random16 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let random17 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
console.log(random16 === random17)

let random18 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(random18 >=16)

let random19 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random20 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random21 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random19, random20, random21)
let average = Math.floor((random19 + random20 + random21) /3)
console.log(average)


let rando11 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando12 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando13 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(rando11, rando12, rando13)

let sN = Math.min(rando11, rando12, rando13)
let gN = Math.max(rando11, rando12, rando13)
let ads = Math.abs (sN - gN)
console.log(ads)

let rando15 = Math.floor(Math.random() * (100 - 1 + 1)) + 1; 
  if (rando15 <= 25) console.log("1st quarter")
  else if  (rando15 <= 50) console.log ("2nd quarter")
  else if (rando15 <= 75)  console.log("3d quarter")
  else console.log( "4th quarter") 

console.log(rando15)

let rando16 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(rando16)
if (rando16 <= 50) console.log("1st quarter")
  else console.log("2nd quarter")

let rando66 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando17 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(rando66, rando17)
console.log(rando66 * rando17 % 2 !==0 )

const rectangleArea = (x, y) => x * y
console.log(rectangleArea(5, 7))

const rectanglePerimeter = (x, y) => 2 * (x + y)
console.log(rectanglePerimeter(4, 8))

const squareArea = (x) => x * x;
console.log(squareArea(5))

const squarePerimeter = (x) => x * 4;
console.log(squarePerimeter(7))

const doubleWord = (word) => word.repeat(18);
console.log(doubleWord("Mariia"))

const firstCharacter = (word) => word[0]
console.log(firstCharacter("mariia"))

const firstTwoCharacters = (word) => word.slice(0,2)
console.log(firstTwoCharacters("Mariia"))

const lastCharacter = (word) => word.slice(-2);
console.log(lastCharacter('Mariia'))
console.log(lastCharacter('1'))


const firstLast = (word) => {
  if (word.length >= 2) return word[0] + word.slice(-1)
  else return word 
}
console.log(firstLast('Mariia'))
console.log(firstLast('Paris'))
console.log(firstLast(''))

const hasFive = (word) => word.length >= 5
console.log(hasFive('Mariia'))

const shorte4r = (word1, word2) => {
  if (word1.length >= word2.length) return word1;
  else return word2
}
console.log(shorter( 'Mariia', 'Rome'))
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "Worldland"))
console.log(shorter("mam", "dad"))

const shorter = (word1, word2) =>{
  if(word1.length < word2.length) return word1
  else return word2
}
console.log(shorter( 'Mariia', 'Rome'))
console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "Worldland"))
console.log(shorter("mam", "dad"))

const concat = (word1, word2) => word1 + word2;
console.log(concat(' Ma', "Ch"))

const startsVowel = (word) =>
{
  let vovel = 'AEOUIaeou'
  return vovel.startsWith(word[0])
}

console.log(startsVowel('Alex'))
console.log(startsVowel('mariia'))
console.log(startsVowel('Alica'))
console.log(startsVowel("Apple"))

const middle = (word) =>{
  if (word.length === 0 ) return ""
  else if( word.length % 2 !== 0) return word[Math.floor(word.length / 2)]
  else return word[word.length /2 - 1] + word[word.length / 2]
 }
 console.log(middle('Sunny'));   
console.log(middle('Mariia'));
console.log(middle('1545221562'));