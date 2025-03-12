const numbers = [3, 6, 10, 4]
//count even
let countEven = numbers.reduce((accumulator, current) => {
if (current % 2 === 0) return accumulator +1;
return accumulator
}, 0)
console.log(countEven) /// 3
// ternaty
let countEven1 = numbers.reduce((accumulator, current) => (current % 2 === 0) ? accumulator + 1 :  accumulator, 0)

let sum = numbers.reduce((acc, curr) =>  acc + curr, 0)
console.log(sum)

// curent = 3 , 6, 10 4    acc = 3 (3*3) 18*10=180 180* 4 = 720

let product = numbers.reduce((acc,curr) => {
     return acc * curr
}, 1)
console.log(product)

let max = numbers.reduce((acc, curr) => {
if(curr>acc) return curr
return acc
}, -Infinity)

/// or ternary 
let max1 = numbers.reduce((acc, curr) => curr>acc ? curr : acc, -Infinity)

/// Math.max(...numbers)

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find shortest fruit -> Kiwi

let shorter = fruits.reduce((acc, curr) =>{     
    if( curr.length > acc.length ) return acc //// ? acc : curr), 0)
    return curr
}, fruits[0])

console.log(shorter)

let shotest = fruits[0]
for(const fruit of fruits){
    if(fruit.length < shorter.length) shorter = fruit
}


const words = [ 'hello', 'Tuesday', 'HEYY', 'Apple' ];
// Find all the words that has 5 letters: [ 'HELLO, 'APPLE' ]
let has5 = words.forEach(x) => {
    if( x.length === 5 ) result.push(x.toUpperCase())})


        const numbers = [ 3, 6, 10, 4 ];

// count even
let countEven = numbers.reduce((evens, curr) => curr % 2 === 0 ? evens + 1 : evens, 0);

console.log(countEven); // 3

let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);

// curr = 3, 6, 10, 4
// acc = 720

let product = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);

console.log(product); // 720

// curr = 3, 6, 10, 4
// acc = 3

let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find shortest fruit -> Kiwi

console.log(fruits.reduce((acc, curr) => acc.length < curr.length ? acc : curr));
