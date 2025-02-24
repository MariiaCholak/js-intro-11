/* 
Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
Examples: 
1  -> false 
2   - true
5  false
10  -> true   Math.floor(Math.random() * (max - min + 1) + min)
*/
let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random);

console.log((random % 2 === 0))

/*
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
Examples: 
1  -> true 
2  false
5  true
10  -> false 
*/
let random1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random1);

console.log((random1 % 2 !== 0))


/* Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
->  -> 
Examples: 
-5  -> false 
-1   > false 
0  false -
1  true
5  -> true
*/

let random2 = Math.floor(Math.random() * (5 - (-5) + 1)) - 5;
console.log(random2)
console.log(random2 > 0)

/* Find if a number is negative or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> true 
-1   -> true 
0   -> false 
1   -> false 
5   -> false
*/

let random3 = Math.floor(Math.random() * (5 - (-5) + 1)) - 5;
console.log(random3)
console.log(random3 < 0)

/*
Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
5   -> true 
20   -> true 
37   -> false 
50   -> true */
let random4 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
console.log(random4)
console.log(random4 % 5 === 0)


/*Find if a number is divisible by 7 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
7   -> true 
35   -> true 
49   -> true 
50   -> false 
*/
let random5 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
console.log(random5)
console.log(random5 % 7 === 0)


/*
Calculate the sum of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it. 
 
Examples: 
3, 5     -> 8 
7, 3    -> 10 
5, 5     -> 10 
1, 10     -> 11 
10, 1     -> 11
*/

let random6 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random7 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let sum = random6 + random7;
console.log(random6, random7);
console.log(`The sum of the numbers is ${sum}`)

/*
Calculate the absolute difference between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 
 
Examples: 
3, 5     -> 2 
7, 3    -> 4 
5, 5     -> 0 
1, 10     -> 9 
10, 1     -> 9 
*/

let random8 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random9 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let difference = Math.abs(random8 - random9);
console.log(random8, random9);
console.log(difference)
/*
Calculate the product of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it. 
 
Examples: 
3, 5     -> 15 
7, 3    -> 21 
5, 5     -> 25 
1, 10     -> 10 
10, 1     -> 10 
 
*/
let random10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random11 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let product = (random10 * random11);
console.log(random10, random11);
console.log(product)


/*
 Calculate the square of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100 
 */

let random12 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let square = random12 ** 2   // or
/// let square = Math.pow( random12, 2)

console.log(random12);
console.log(square)

/*
Calculate the cube of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 8 
5   -> 125 
10   -> 1000 
 
*/
let random13 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let cube = Math.pow(random13, 3);
console.log(random13);
console.log(cube);



/*
 14 page Convert miles to kilometers. 
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers. 
 
Examples: 
1   -> 1.6 
2   -> 3.2 
5   -> 8 
 
*/
let random14 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let kilometers = random14 * 1.6;

console.log(random14)
console.log(kilometers)

/*Convert kilograms to pounds. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220 
*/

let random15 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let pound = (random15 * 2.2).toFixed(1);
console.log(random15)
console.log(pound)


/*
 
Find if 2 numbers are equal or not. 
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
Examples: 
1, 1     -> true 
1, 2    -> false 
2,3     -> false 
2,2     -> true 
3, 3     -> false 
 */

let random16 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let random17 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let equal = random16 === random17;

console.log(random16, random17);
console.log(equal)



/*
 
Find if an age is allowed to get Driver License or not. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false.  
 
Examples: 
1   -> false 
15   -> false 
16   -> true 
45   -> true 
100   -> true
*/

let random18 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let age = random18 >= 16;
console.log(random18)
console.log(age)
//// 2 way
if (random18 >=16) {
   console.log(true);
 } else { 
  console.log(false)}

/*
Find the greatest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
 
Examples: 
3, 5     -> 5 
7, 3    -> 7 
5, 5     -> 5 
1, 10     -> 10 
10, 1     -> 10 
*/

let random19 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let random20 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let greatestNamber = Math.max(random19, random20);

console.log(random19, random20);
console.log(greatestNamber)

/*
Find the greatest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
 
Examples: 
3, 5, 2     -> 5 
7, 3, 1    -> 7 
5, 5, 5     -> 5 
1, 10, 9    -> 10 
10, 1, 2    -> 10 
*/
let rando = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let greatestNamber1 = Math.max(rando, rando1, rando2);

console.log(rando, rando1, rando2);
console.log(greatestNamber1)

/* 
Find the smallest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5     -> 3 
7, 3    -> 3 
5, 5     -> 5 
1, 10     -> 1 
10, 1     -> 1 
 */
let rando3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let smallestNamber = Math.min(rando3, rando4);

console.log(rando3, rando4);
console.log(smallestNamber)




/*
Find the smallest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5, 2     -> 2 
7, 3, 1    -> 1 
5, 5, 5     -> 5 
1, 10, 9    -> 1 
10, 1, 2    -> 1 
*/

let rando5 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando6 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando7 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let smallestNamber1 = Math.min(rando5, rando6, rando7);

console.log(rando5, rando6, rando7);
console.log(smallestNamber1)


/*
Calculate the average of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 
 
Examples: 
3, 5, 7     -> 5 
7, 3, 2    -> 4 
5, 5, 5     -> 5 
1, 10, 7    -> 6 
10, 1, 1    -> 4 
*/

let rando8 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando9 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando10 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let average = Math.trunc((rando8 + rando9 + rando10) / 3)
console.log(rando8, rando9, rando10);
console.log(average)


/*
17 Calculate the absolute difference between max and min of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference. 

Examples: 
3, 5, 2     -> 3 
7, 3, 1    -> 6 
5, 5, 5     -> 0 
1, 10, 9    -> 9 
10, 1, 2    -> 9 
 
*/

let rando11 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando12 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando13 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let greatestN = Math.max(rando11, rando12, rando13);
let smallestN = Math.min(rando11, rando12, rando13);
let abs = Math.abs(greatestN - smallestN);

console.log(rando11, rando12, rando13);
console.log(abs)
/*
Find the quarter of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100 
 
Examples: 
15     -> 1st quarter 
73    -> 3rd quarter 
39     -> 2nd quarter 
87     -> 4th quarter 
*/

let rando14 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let quarter = Math.floor((rando14 - 1) / 25) + 1

console.log(`${rando14} ${quarter} quarter`)

// Функція для додавання суфікса до числа
/*function getQuarterSuffix(quarter) {
  if (quarter === 1) {
    return "st";
  } else if (quarter === 2) {
    return "nd";
  } else if (quarter === 3) {
    return "rd";
  } else {
    return "th";
  }
}console.log(`${rando14} -> ${quarter}${getQuarterSuffix(quarter)} quarter`);
*/

let rando188 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(rando188)
if (rando188 <= 25 ){console.log("1st quarter")}
else if (rando188  <=50)  console.log("2nd quarter")
else if (rando188 <=75) console.log("3nd quarter")
else  console.log("4th quarter")



/*
Find the midpoint of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it. 
1st half is 1-50 
2nd half is 51-100 
 
Examples: 
15     -> 1st half 
50    -> 1st half 
51     -> 2nd half  
87     -> 2nd half  
100     -> 2nd half  
*/

let rando15 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(rando15)
if(rando15 <= 50){
  console.log('1st half')}
  else { 
    console.log('2nd half')}
//// or
let half = rando15 <= 50 ? "1st half" : "2nd half"


console.log(`${rando15} ${half} `)


/*
Find if sum of 2 random numbers is even or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false 
 www.techglobalschool.com 
 */
let rando16 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando17 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let sum1 = (rando16 + rando17) % 2 === 0;

console.log(rando16, rando17)
console.log(sum1)
/*
let sum1 = (rando16 + rando17)
if (sum1 % 2 === 0) соnsole.log(true)
  else false
*/
/*
Find if product of 2 random numbers is odd or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false 
 */
let rando18 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let rando19 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let product1 = (rando18 * rando19) % 2 !== 0;

console.log(rando18, rando19)
console.log(product1)


/*
Area of a rectangle 
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60 
*/

function rectangleArea(x, y) {
  return x * y
}
console.log(rectangleArea(5, 4))
console.log(rectangleArea(3, 7))
console.log(rectangleArea(6, 10))
/*
19 Perimeter of a rectangle. 
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
 
Examples: 
rectanglePerimeter(5, 4)   -> 18 
rectanglePerimeter(3, 7)   -> 20 
rectanglePerimeter(6, 10)   -> 32 
 
*/
function rectanglePerimeter(x, y) {
  return 2 * (x + y)

}
console.log(rectanglePerimeter(5, 4))
console.log(rectanglePerimeter(3, 7))
console.log(rectanglePerimeter(6, 10))


/*
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36 
 */
const squareArea = function (x) {
  return x * x
}

console.log(squareArea(5))
console.log(squareArea(3))
console.log(squareArea(6))
/*
Perimeter of a square. 
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24 
 */

const squarePerimeter = function (x) {
  return 4 * x
}

console.log(squarePerimeter(5))
console.log(squarePerimeter(3))
console.log(squarePerimeter(6))
/*
Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal" 
 */

const doubleWord = function (word) {
  return word.repeat(2)
}

console.log(doubleWord("Tech"))
console.log(doubleWord("Global"))
/*
First Character 
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G" 
 */

const firstCharacter = (word) => word[0]

console.log(firstCharacter("Tech"))
console.log(firstCharacter("Mariia"))
/*
First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1" 
 */

const firstTwoCharacters = (word) => 
  word.slice(0, 2);

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Mariia"));
console.log(firstTwoCharacters("1"));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters(""));

/*
const firstTwoCharacters = (word) => {
  if (word.length >= 2 ) { return word.slice(0, 2); 
   } else return word }
   /*

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Mariia"));
console.log(firstTwoCharacters("1"));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters(""));


/*
Last Character 
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "ll" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3" 
 */

const lastCharacter = (word) => word.slice(-1)

console.log(lastCharacter('Tech'));
console.log(lastCharacter('Mariia'));
console.log(lastCharacter('154'));
console.log(lastCharacter(" "));


/*
Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
 */

const lastTwoCharacters = (word) => word.slice(-2)

console.log(lastTwoCharacters("Tech"))
console.log(lastTwoCharacters("Mariia"))
console.log(lastTwoCharacters(" "))
console.log(lastTwoCharacters("1"))



/*
First and Last Characters 
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae 
 */

const firstLast = (word) => {
  if (word.length >= 2) return word[0] + word.slice(-1);
    else return word 
  }

  
console.log(firstLast('Tech'))
console.log(firstLast("Mariia"))
console.log(firstLast("1"))
console.log(firstLast(" "))

/*
Has Five 
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true 
*/

const hasFive = (word) => word.length >= 5;
console.log(hasFive('Tech'))
console.log(hasFive('Mariia'))
console.log(hasFive(""))
console.log(hasFive("166526544"))



/*
Middle 
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" 
 */
const middle = (word) => {
if (word.length === 0) return ""
else if ((word.length % 2 !== 0)) return word[Math.floor(word.length / 2)]
else return word[word.length / 2 - 1] +  word[word.length / 2];
}
console.log(middle('Sunny'));   
console.log(middle('Mariia'));
console.log(middle('1545221562'));
console.log(middle(' 1'));
console.log(middle(' '));
console.log(middle('Paris'));


/*
Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello" 
 */

const longer = (word1, word2) => {
  if (word1.length >= word2.length) {
    return word1;
  } else {
    return word2;
  }
}
function longer (word1, word2) {
 if (word1.length >= word2.length) return word1
  else return word2
}

console.log(longer( 'Mariia', 'Rome'))
console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "Worldland"))
console.log(longer("mam", "dad"))


/* 
Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
 
Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World" 
 */

const shorter = (word1, word2) => {
  if (word1.length < word2.length)  return word1;
   else  return word2;
  }


console.log(shorter('Paris', 'Chicago'));
console.log(shorter('Summer', 'winter'));
console.log(shorter('mom', 'dad'));


/*
Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234" 
 
*/

const concat = (word1, word2) => word1 + word2;
console.log(concat("Mariia", "Cholak"));
console.log(concat("Chicago", "Illinois"))


/*
Starts With Vowel 
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i. 
 
Examples: 
startsVowel("Tech")    -> false 
startsVowel("Apple")     -> true 
startsVowel("abc")     -> true
*/
const startsVowe = (word)=>{
  let vowel = 'AEOUIaeoui'
  return vowel.includes(word[0]) 
}

console.log(startsVowe('mariia'))
console.log(startsVowe('Alica'))

console.log(startsVowe("Opple"))
