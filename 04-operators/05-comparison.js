let v1 = 3;
let v2 = '3';
let v3 = 5;
let v4 = '5';

console.log(v1 < v3); // true
console.log(v1 <= v3); // true

console.log(v1 == v3); // false
console.log(v1 === v3); // false

console.log(v1 == v2); // true
console.log(v1 === v2); // false


console.log('5' == 5); // true
console.log('5' === 5); // false
console.log(true == 1); // true
console.log(true === 1); // false

console.log('Hello' != 'HELLO'); // true
console.log('Hello' != 'hello'); // true

console.log(3 != '3'); // false
console.log(3 !== '3'); // true


console.log(10 >= 10); // true

console.log((10 >= '10') < 20); // true



let num1 = 2;
let num2 = 5;
let num3 = 3;
let num4 = 6;
console.log(num4 / num1); //3
console.log(num1 * num3 * num4); //36
console.log(num3 - num4 - num1 + num4  * 2); //7

console.log(num4 - (num3 - num1) * num2);  //1

console.log(3 ** 2 );
console.log(4 ** 3); 
console.log(5**4);

console.log(2 ** 5 / 4 + 3 * 2); 

console.log(15 % 4); 

console.log(15 % 4);
 console.log(2 * 5 % 3 - 7);
 console.log(5 + 16 % 7 + 2);


 let n1 = 3;
 let n2 = '5';
 let n3 = 4;
 let n4 = '10';

 console.log(n1 + n2);
 console.log(n1 + n3 + n4 +n2);
console.log(n1 + (n3 + n4) + n2);

console.log(n2 * n1);

console.log(n4 / n2);
console.log('Hello' / 2);
console.log('Hello' - "Hi");

console.log(5 * true);
console.log(5 * false);
console.log(5 * '');
console.log(3 + true);


console.log('The sum of 3 and 5 = ' + (3 +5));
console.log('The difference of 5 and 3 = ' + (5 - 3));
console.log('The product of 3 and 5 is = ' + 3 * 5);
console.log('The division of 6 and 2 is = ' + 6 / 2);
console.log(`The remainer of 6 and 2 is = ` + 6 % 2);

let today = 'Sunday'
console.log('Today is ' + today);
console.log('Today is ' , today);
console.log(`today is ${today}`);

let age = 25;
++age;
++age;
console.log(age);

let quantity = 10;
quantity --;
--quantity;
console.log(quantity);

let i = 10;
let b = i++;


console.log(`I value is ${i} and J value is ${b}`);

let count = 25;
count++;
console.log(count);

let divisor = 4;
console.log(9 / --divisor);

let counter = 5;
let result = counter++;
console.log(++counter * result);

let num = 5
num += 5;
console.log(num);

let n11 = 10;
n11 *= 2 //20
n11 /= 4;  //5
n11 **= 3; //125

console.log(n11);

let n12 = 7;
n12 += ++n12;    /// 15

n12 / 3;    //5

console.log(n12++ % 3);    //2

let n13 = 20;
let n14 = 3;

n13 += (n14 -= 1);  /// 22
--n13;      //21
console.log(--n13 * ++n14);     //60


let numb1 = 6;
let numb2 = 4;

console.log(`The sum of number is = ${numb1 + numb2}`);
console.log(`The product of the numbers is = ${numb1 * numb2}`);
console.log(`The subtraction of the number is =${numb1 - numb2}`);
