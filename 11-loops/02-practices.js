
// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 …. 0
/*
start: 100
end: 0
update: --   we can allways understand do we need increse or decrease by lookig of the start
*/ 

for(let i = 100; i >= 0; i--) {
       console.log(i) 
}
//  i<= 0 mistake it's logical mistake i start dromm 100 is hundred less or = 0? no
 //  i !==-1 never use it in loop part
// necer skip { } in loops programers doesn't like it



// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …. 50
/*
start: 0
end: 50
update: ++   from star and end point we inderstand if i'm going up or down
*/


for(let i = 0; i <= 50; i++) {
    if (i % 2 === 0)  console.log( i)
   }
/// if we don't want to see oll number make condition


   for(let i = 0; i <= 50; i += 2) {     /// it mean everytime increse by 2, but we need to know our start point even, if it's odd it's not works
    console.log(i);
  }


// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 …. 50
   for(let i = 0; i <= 50; i++) {
    if (i %  5 === 0)  console.log( i)
   }

   for(let i = 0; i <= 50; i += 5) {     //  we use it only id know that start point is even
    console.log(i);
  }


  // Find sum of the numbers from 1 to 5 (both inclusive) -> 15
   let sum = 0;       /// I HAVE conteiner initialy w 0 
   for(let i = 1; i <= 5; i++) {
    sum += i  // sum +=START     AFTER ASSINGMENT ++ START CHANGE EVETUTIME 
   } //// to conteiner add one more evetutime my loop done w 15     it's the same as sum = sum + 1 but we use short hand assingment
   console.log(sum) //// we have consolog not inside our expresion because 
   // our loop run it everutime and result will be for all numbers like 1 6 10 15, but we nned our final result
//



   // Find sum of the numbers from 10 to 15 (both inclusive) -> 75
   let sum1 = 0;
   for(let i = 10; i <= 15; i++) {
    sum1 += i 
   }
   console.log(sum1)



/// // Find the product of all the numbers from 1 to 6 (both inclusive) -> 
// 1 * 2 * 3 * 4 * 5 * 6 -> 720
      let product = 1
   for(let i = 1; i <= 6; i++) {
          product *= i 
   }
   console.log(product)

// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l
   let str = 'TechGlobal School';
    for(let i = 0; i <= str.length -1; i++ ){      /// i = str.length
        console.log(str[i])
    }

// Count how many a's we have in the below string   -> 3
    let fruit = 'banana';
    let counterA = 0;
   for(let i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'a')  counterA++;
   }
   console.log(counterA)


// Output all the odd numbers from 1 to Random Number (inclusive) 
// (between 10 and 20) (both inclusive) -> 1 3 5 7 9 ….
let random = Math.floor(Math.random() * (20 - 10 ) + 10);
console.log(random)
let odd = 1
for(let i = 1; i <= random; i++){
    if(i % 2 !== 0) console.log(i)
}

/*
Generate a random number bt 1 to 10 (both inclusive
   Find the product of all the numbers starting from 1 to randomly generated random
   
   5       -> 1 * 2 * 3 * 4 * 5 -> 120
   6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
   3       -> 1 * 2 * 3 -> 6
   *
//let r2 = getRandomNumber(1,10)
*/
let random1 = Math.floor(Math.random() * (10 - 1 ) + 1);
console.log(random1)
let product1 = 1
for(let i = 1; i <= random1; i++) {
    product1 *= i 
}

console.log(product1)

/*Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5

start: Min of ran1 and ran2
end: Max of ran1 and ran2
*/



let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);

// let min = Math.min(ran1, ran2);
// let max = Math.max(ran1, ran2);

for(let i = min; i <= max; i++) {
  console.log(i);
}


let ra1 = Math.floor(Math.random() * (10 - 1 ) + 1);
let ra2 = Math.floor(Math.random() * (10 - 1 ) + 1);
console.log(ra1, ra2)
for(let i = Math.min(ra1, ra2); i <= Math.max(ra1, ra2); i++) {
  console.log(i)
}  





