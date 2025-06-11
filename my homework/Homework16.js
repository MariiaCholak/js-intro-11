/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/
const toCamelCase = (str) => {
    const word = str.trim().toLowerCase().split(/\s+/)

    for (let i = 1; i < word.length; i++) {    ///i = 1 — бо перше слово в camelCase починається з малої літери, його не змінюємо.
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    };
    //     word[i][0].toUpperCase() — першу літеру робимо великою.
    // word[i].slice(1) — додаємо решту слова без змін
    // word[i] = ... — оновлюємо слово.
    return word.join('')
}
/// or    map((word, index) => index === 0   ? word.toLowerCase()  : word[0].toUpperCase() + word.slice(1).toLowerCase()) .join('');


//// BILAL
const toCamelCase = (str) => {
  if(!str.includes(' ')) return str    /// if it 1 word and doan't have extra space
  return str.trim().toLowerCase().split(' ').filter(word => word !== '').map((word, index)=>{   // first part we get split but it splited w spasec between wprds
      return index===0 ? word : word[0].toUpperCase() + word.slice(1)                         // фільтер забрав нам усі між словами відступи
  }).join('')                                 // меп візьме уожен індекс слова якщо інкес 0 перша буква, просто верни слово назад нічого не робиб якщо ні верни слово індекс 0 перша буква великими і далі все приєднай малими
}    /// і вкінці обєднай 
console.log(toCamelCase("first name"))
console.log(toCamelCase("last     name"))
console.log(toCamelCase("   ZIP CODE"))
console.log(toCamelCase('I Learn Java Script'))


/*
Task-2
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello"
*/


const toSnakeCase = (str) => str.trim().toLowerCase().split(/\s+/).join('_')
const toSnakeCase = (str) => str.trim().toLowerCase().split(' ').filter(word => word !== '').join('_') /// we remove space between words
console.log(toSnakeCase("first name"))
console.log(toSnakeCase("last    name"))
console.log(toSnakeCase("    I love Java Script"))
console.log(toSnakeCase("already_snake_case"))
console.log(toSnakeCase("hello"))




/*
Task-3
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"
*/

const alternatingCases = (str) => {
    let result = ''
    let letterCounter = 0  /// відстеження скільки букв ми вже обробили

    for (let i = 0; i < str.length; i++) {
        const char = str[i]   //char — поточний символ рядка з позиції i
        //str[i] — це символ рядка, який знаходиться на позиції i. char — це окремий символ рядка, який ми зараз розглядаємо в циклі.
        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            if (letterCounter % 2 === 0)
                result += char.toUpperCase()   // якщо парне великі літери
            else result += char.toLowerCase()   // якщо ні, малими

            letterCounter++    ///Збільшуємо лічильник оброблених букв на 1.
        }
        else result += char   //Якщо символ не літера, просто додаємо його до результату без змін.
    }
    return result

}
/// bilal
const alternatingCases = (str) => {
  let indexShifter = 0    // this index i int to shift if i fund spec char
  return str.split('').map((char, index)=>{   // rchar and index 
      if(char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'){
          if((index + indexShifter) % 2 === 0) return char.toUpperCase();  // if index even return letter as uppercase, if we find space we want to skip it and move to next one
          else return char.toLowerCase()  // if it's odd
      }
      indexShifter++;  //if it's not letter
      return char  /// we return our char w space between
  }).join('')
}

console.log(alternatingCases("Hello"))
console.log(alternatingCases("basketball"))
console.log(alternatingCases("Tech Global"))
console.log(alternatingCases(""))
console.log(alternatingCases("123!@#aB"))

/*
Task-4
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
*/

const isNeutral = (str1, str2) => {
    return str1.split('').map((char, i) => char === str2[i] ? char : '0').join('')
}
// Метод .map() проходить по кожному символу з масиву. char — символ з str1,  i — його індекс.  str2[i] — символ з другого рядка на тому ж місці.
// Якщо вони однакові (===) — повертаємо символ char.  Якщо різні — повертаємо '0'.



// bilal
const isNeutral = (str1, str2) => {
  let result = ''   // conteiner
  for(let i = 0; i < str1.length; i++){
      if(str1[i] === '+' && str2[i] === '+') result += '+'
      else if (str1[i] === '-' && str2[i] === '-') result += '-' /// we reasigb our result 
      else result += '0'   /// rest it's 0
  }
  return result
}
console.log(isNeutral("-", "+"))
console.log(isNeutral("-+", "-+"))
console.log(isNeutral("-++-", "-+-+"))
console.log(isNeutral("--++--", "++--++"))
console.log(isNeutral("+++", "+++"))


/*

Task-5
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
*/

const isTrueOrFalse = (str) => {
    const words = str.split(' ')
    let positive = 0;   ///'a' tо 'm'
    let negative = 0  // 'n' to 'z'

    for (let word of words) {
        let firstChar = word[0]
        if (!firstChar) continue  ///  Якщо слово порожнє або undefined , пропускаємо його.

        firstChar = firstChar.toLowerCase()

        if (firstChar >= 'a' && firstChar <= 'z') {   /// letter
            if (firstChar <= 'm') positive++;    // якщо літера — в діапазоні 'a' до 'm' → це позитивне слово,
            else negative++;
        }
    }
    return positive >= negative;  ///порівнюємо кількість позитивних і негативних слів. Якщо позитивних більше або однаково → повертаємо trueб інше - false 
}
/// bilal
const isTrueOrFalse = (str) => {
  str = str.toLowerCase()
  let countNeg = 0;
  let countPos = 0;

  for(word of str.split(' ')){    // we split everyword by space
      if('abcdefghijklm'.includes(word[0])) countPos++;
      else if('nopqrstuvwxyz'.includes(word[0])) countNeg++;
  }

  return countPos >= countNeg;

}


console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"))
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"))
console.log(isTrueOrFalse("Got stuck in the Traffic")) 