console.log(`==========TASK01=======`)

/*
Requirement:
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
*/

const countVC = (str) => {
  const allVowels = 'aeiouAEIOU'
  let vowels = 0
  let consonants = 0

  str.split('').forEach(element => {
    if (element.toLowerCase() >= 'a' && element.toLowerCase() <= 'z')
      if (allVowels.includes(element)) vowels++
      else consonants++
  })
  return { vowels, consonants }
}

////bilal solution
const countVC = (str) => {
  return VC_Count = {     /// we created our obj w 2 key 
      'vowels': str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length,     /// return numbers of our vowel 
      'consonants' :  str.split('').filter(x => (x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z') && !('aeiouAEIOU'.includes(x))).length
  }    ///we checked that between letter . and then between !== vowels means it cinsinants' its' length
}

console.log(countVC("Hello"))
console.log(countVC("Programming"))
console.log(countVC("123AbC"))
console.log(countVC("123!@#xyz"))
console.log(countVC(""))



console.log(`==========TASK02=======\n`)
/*
Task-2
Requirement:
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {}
*/
const countChars = (str) => {
  let letter = 0
  let numbers = 0
  let specials = 0

  str.split('').forEach((element) => {
    if (element.toLowerCase() >= 'a' && element.toLowerCase() <= 'z') letter++
    else if (element >= '0' && element <= '9') numbers++
    else if (element !== ' ' && element !== '') specials++
  })
  const result = {};
  if (letter > 0) result.letters = letter;
  if (numbers > 0) result.numbers = numbers;
  if (specials > 0) result.specials = specials;

  return result;
}
/// school solution
const countChars = (str) => {
  str = str.replaceAll(' ', '')   //we remove all spaces and empty str, we don't have any spaces
  let charCount = {}   //  we created our obj, and then we will order in wrigth order, but don't add 0!
// filter everything not a letter, and return length
  let letterCount = str.split('').filter(x => x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z').length
  letterCount > 0 ? charCount['letters'] = letterCount : ''
// the add to our charcount if it's more then 0 will add it first to our charcouner, if it'ss les don't add it at all , else if it false : just return "", if true add our key and value


  let numberCount = str.split('').filter(x => x >= '0' && x <= '9').length
  numberCount > 0 ? charCount['numbers'] = numberCount : ''
/// the same for num

///it's everything else exept letter or num, keep only special char
  let specialCount = str.split('').filter(x => !(x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z')).filter(x => !(x >= '0' && x <= '9')).length
  specialCount > 0 ? charCount['specials'] = specialCount : ''

  return charCount
}

console.log(countChars("Hello"))
console.log(countChars("Programming 123"))
console.log(countChars("123AbC!@#"))
console.log(countChars("0987654321"))
console.log(countChars("     "))
console.log(countChars(""))


console.log(`==========TASK03=======\n`)
/*
Task-3
Requirement:
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/
const maxOccurrences = (str) => {

  const counts = {}   ///const maxOccurrences = (str) => {

  let count = 0;

  str.split('').forEach(char => {
    if (char === ' ') return;
    counts[char] = (counts[char] || 0) + 1   ///Збільшуємо лічильник counts[char].
    if (counts[char] > count) {
      count = counts[char];    ///Якщо новий лічильник більший за count, оновлюємо count.
    }
  })
  for (let char of str) {
    if (char !== ' ' && counts[char] === count) {   //Шукаємо перший символ, який має кількість входжень, рівну count
      return char; // повертає ПЕРШИЙ, у кого сount
    }
  }

  return ""

}

/// school decision 
 const maxOccurrences = (str) => {
  let occurences = {}
  let highestCount = 0;  // our conteiner  to save rusult // Максимальна кількість входжень
  let highestChar = ''; // our letter will be replace w new counter  Символ, який зустрічається найчастіше

  // we need to add every occurense to out occurence  index of our el,if occurences[e] it's not occur it's going to creat it, if it's there, means occur of that letter = this = occurences[e] + 1 || 1 
  str.split('').forEach(e =>e !== ' ' ? occurences[e] = occurences[e] + 1 || 1 : '');   // if it's not esist it will create it +1 
  /// if it's spave ignore 
   //Що тут відбувається?
// e !== ' ' — пропускає пробіли.
// occurences[e] = occurences[e] + 1 || 1:
// Якщо occurences[e] вже існує, додаємо 1
// Якщо ще не існує (undefined), вираз стає undefined + 1 → NaN, і тому спрацьовує || 1, тобто 1 раз зустрічається вперше
 
   for(key in occurences){  ///for (key in occurences) — перебираємо всі ключі в об'єкті (тобто всі символи, які зустрічались).
      if(occurences[key] > highestCount){ //Якщо поточний символ зустрічався більше разів, ніж попередній лідер (highestCount), оновлюємо лічильник і символ.
          highestCount = occurences[key] // оновлюємо максимальне входження
          highestChar = key; /// зберігаємо символ, який має найбільше входжень
      }
  }
  return highestChar

}

console.log(maxOccurrences("Hello"))
console.log(maxOccurrences("Occurrences"))
console.log(maxOccurrences("    ab    "))
console.log(maxOccurrences("12   3   21"))
console.log(maxOccurrences("      "))
console.log(maxOccurrences(""))






console.log(`==========TASK04=======\n`)
/*
Task-4
Requirement:
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

const starOut = (str) => {
  const arr = str.split('')
  return arr.filter((el, index) =>
    el !== '*' && arr[index - 1] !== '*' && arr[index + 1] !== '*').join('')
  //алишаємо тільки ті символи, які: не * і не сусідять з *   не справа зірочка
}

//// school
const starOut = (str) => {
  let strAsArr = str.split('');  // cjyvert everyrhong to arr because also splice works w arr 

  while(strAsArr.includes('*')){     /// while because we don't know how many starts we gave, and we need to find srats and remove before and afte
      const indexOfStar = strAsArr.indexOf('*');  
      const indexBeforeStar = indexOfStar - 1;   // знаходимо індекс зірки та після неї  та перед нею індекс
      const indexAfterStar = indexOfStar + 1;
 
      while(strAsArr[indexAfterStar] === '*'){ //Якщо є декілька зірочок поспіль (наприклад, **), ми видаляємо усі додаткові зірочки після першої, але залишаємо першу, щоб обробити її як центр.
          strAsArr.splice(indexAfterStar, 1);  //"ab**cd" → обробляється як "ab*cd" після цього блоку.
      }

      strAsArr.splice(indexBeforeStar, 3)// Видаляє три символи:символ перед зірочкою саму зірочку символ після зірочки

  }

  return strAsArr.join('');
}

console.log(starOut("ab*cd"))
console.log(starOut("ab**cd"))
console.log(starOut("xm*sm*sy"))
console.log(starOut("abc"))
console.log(starOut("***"))
console.log(starOut("   "))
console.log(starOut(""))


console.log(`==========TASK05=======\n`)

/*
Task-5
Requirement:
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/

const romanToInt = (num) => {
  const roman = {
    I: 1, V: 5, X: 10,
    L: 50, C: 100,
    D: 500, M: 1000
  };

  let total = 0

  for (let i = 0; i < num.length; i++) {
    const current = roman[num[i]]   //візьми i-й символ із рядка num num = "XIV", то: num[0] → "X" num[1] → "I" , num [2] → "V"
    const next = roman[num[i + 1]] //чи менше поточне значення, ніж наступне кщо менше, то це випадок типу IV, IX, XL, CM, де потрібно відняти.

    /// Якщо наступне число більше, ніж поточне → наприклад, I перед V (IV) Тоді ми віднімаємо поточне значення: total -= current
    //Інакше (звичайний випадок) → додаємо поточне значення: total += current
    if (next > current)  //порівняння next > current	чи треба віднімати, чи додавати
      total -= current
    else total += current
  }

  return total

}

/// школа
const romanToInt = (roman) => {
  const values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
                             //    every value symb
  return roman.split('').reduce((result, numberal, i) => values[numberal] < values[roman[i+1]] ? result - values[numberal] : result + values[numberal],0)


  // let result = 0;

  // for(let i = 0; i < roman.length; i++){
  //     if(values[roman[i]] < values[roman[i+1]]) result -= values[roman[i]]
  //     else result += values[roman[i]]
  // }
}


console.log(romanToInt("I"))
console.log(romanToInt("IV"))
console.log(romanToInt("CXII"))
console.log(romanToInt("MMM"))
console.log(romanToInt("MMMDCCCLXXXVIII"))
console.log(romanToInt("MDCLXVI"))
