/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1 = 'Morning'
let result1 = str1.slice(-5)

console.log(result1 );


let str2 = 'saturday'
let result2 = str1.slice(3); or 
let result3 = str2.slice(str2.lenght - 5);

console.log(result1 );
 


/*
/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str3 = 'JavaScript';

 let result4 = str3.slice(0,3) + str2.slice(-3);
 
 console.log(result4)


 /*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str11 = 'Hello';

// let res1 = str1.slice(str1.length - 5);
let res1 = str11.slice(-5);

console.log(res1);


/*
Assume that you are given a string of any length
Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str13 = 'JavaScript';

let res2 = str13.slice(0, 3) + str2.slice(-3);
console.log(res2);

