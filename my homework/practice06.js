
/*Write a function named as firstPos() which takes an array as an
argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only number elements.
NOTE: Assume there is at least one positive element in the given array.
Examples:
firstPos([0, 3, -9, 5, 8]) -> 3
firstPos([-2, 0, -7, 10, -5]) -> 10
firstPos([1, 2, 3, -2]) -> 1
*/
const firstPos = arr => {
 for( el of arr){
    if(el > 0) return el
 }
}

console.log(firstPos([0, 3, -9, 5, 8])) 
console.log(firstPos([-2, 0, -7, 10, -5]))
console.log(firstPos([1, 2, 3, -2]))

//// second way arr function (filter)
const firstPos1 = arr => arr.filter(el => el > 0) [0]   /// filter based on our condition return first index
const firstPos3 = arr => arr.find(el => el > 0) [0]  ///another method w calback


/*
Task-2
Requirement:
Write a function named as lastNeg() which takes an array as an
argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only number elements.
NOTE: Assume there is at least one negative element in the given
array.
Examples:
lastNeg([0, 3, -9, 5, 8]) -> -9
lastNeg([-2, 0, -7, 10, -5]) -> -5
lastNeg([1, 2, 3, -2]) -> -2
*/
const lastNeg  = arr => {
   for( let el of arr){
      if( el < 0) return[el.length - 1]

   }
}
////for i index   we can loop from the end end find first num, for looping back we need i index
const lastNeg222  = arr => {
   for(let i = arr.length - 1; i >=0; i--)
      if (arr[i] < 0) return arr[i]

   }

const lastNeg1  = arr => {
   arr = arr.filter(el => el < 0) 
   return arr[arr.length - 1]
}
const lastNeg112  = arr => arr = arr.filter(el => el < 0).at(-1) ///  teacher pfefer
                                                       ////return arr[arr.length - 1]

  ///// find 
  const lastNeget = arr => arr.reverse().find(el => el < 0)   //// we reverse and our new ell it's become from last to fitrset, also we can use findlast()

  ///// reverse 
const lastNeg2  = arr => {
   arr = arr.reverse()
   for( let el of arr){
      if( el < 0) return el
   }
}
/*
Task-3
Requirement:
Write a function named as firstLongest() which takes an array as an
argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only string elements.
NOTE: If there are 2 element having the longest count of characters,
always return the first occurrence.
Examples:
firstLongest(["red", "blue", "yellow", "white"]) -> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) -> "Banana"
firstLongest(["purple", "yellow", "orange"]) -> "purple"
*/
const  firstLongest = (arr) => {
let largerWord = ''  //or we can write  arr[0]     //// we need to have empty we will add , when we start looping it will add first word, then second, then thirt based on condition  
  for(let el of arr){   /// we check if length is larger add it
if(el.length > largerWord.length)  largerWord = el  /// we wont out longest become our el
}    //it will replase el which we need, and if they are the same length it not change it it takes first eleme one because we have > , if we have >= it will take second
return largerWord
}

////reduce
const  firstLongest1 = (arr) => arr.reduce((longest, ell ) => ell.length > longest.length) ? ele : longest



/*
Task-4
Requirement:
Write a function named as lastShortest() which takes an array as an
argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only string elements.
NOTE: If there are 2 element having the shortest count of characters,
always return the last occurrence.
Examples:
lastShortest(["red", "blue", "yellow", "white"]) -> "red"
lastShortest(["Apple", "Banana", "Mango"]) -> "Mango"
lastShortest(["white", "yellow", "brown"]) -> "brown"

*/     
/* for the last shortest better loop from back  we have 2 option 1. using for i loop but srtaarting index for i its length - 1 , and i--
or reverse arr and then loking for  the first shortest arr, but reverse it's additional operation

*/
const lastShortest11 = (arr) => {
   let shortest = arr[arr.length - 1]  ///we start from last index
   for(let i = arr.length - 1; i >= 0; i--){         /// we don't have string which can rich this num, we loo from back, we check if the length is less shortest then we will replace it
              //// I >= 0 BECAUSE when o it's our last num and we want to stop the loop
      if(arr[i].length < shortest.length) shortest = arr[i];
   }
   return shortest
  }


const lastShortest = (arr) => {
 let shortest = arr[0]
 for(word of arr){
   if(word.length <= shortest.length) shortest = word;
 }
 return shortest
}

const lastShortest1 = (arr) => arr.reduce()

console.log(lastShortest(["red", "blue", "yellow", "white"]))
console.log(lastShortest(["Apple", "Banana", "Mango"]))
console.log(lastShortest(["white", "yellow", "brown"]))

/*
Task-5
Requirement:
Write a function named as max() which takes an array as an argument
and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only number elements.
Examples:
max([0, 3, -9, 5, 8]) -> 8
max([-2, 0, -7, 10, -5]) -> 10
max([1, 2, 3, -2]) -> 3
*/

 const max = (arr) =>{
   let max = arr[0]
   for( let i = 1; i < arr.length; i++)
      if (arr[i] >  max) max = arr[i]
   return max
 }
 console.log(max([0, 3, -9, 5, 8]))
 console.log(max([-2, 0, -7, 10, -5])) 
 console.log(max([1, 2, 3, -2]))

 //for of
 const max11 = (arr) =>{
   let larger = arr[0]
   for( let num of arr){
      if( num > larger) larger = num
   }
 return larger
}
 ///sort 
 const max1 = (arr) => arr.sort((a, b) => a - b)[arr.length - 1]   /// we get out last result
/*
Task-6
Requirement:
Write a function named as min() which takes an array as an argument
and returns the smallest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains
only number elements.
Examples:
min([0, 3, 5, 8]) -> 0
min([-2, 0, -7, 10, -5]) -> -7
min([1, 2, 3, 15]) -> 1
*/
const min  = (arr) => {
   let smallest = arr[0];
   for( let element of arr){
      if( element < smallest) smallest = element
   }
return smallest
}
///sort
const min2 = (arr) => arr.sort((a, b) => a - b) [0]

const min3 = (arr) => arr.min(...arr)   // not prefer!!!!


////for i loop
const min23  = (arr) => {
   let smallest = arr[0];
   for( let i = 1; i < arr.length; i++){   /// we start from 1 because we already have [0], and we don't need to run our loop one more time, less iteration 
      if(arr[i] < smallest) smallest = arr[i]
   }
   return smallest
}

console.log(min([0, 3, 5, 8])) 
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([1, 2, 3, 15])) 
/*
Task-7   this question is very important!!!!!!!!!
Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and
returns the all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) -> [ 20, 50, 70 ]
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) -> [ ]
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) -> ["abc" ]
*/

const commonElements = (arr1, arr2) => {
   let conteiner = []
   for(let ele of arr1){
      if(arr2.includes(ele) && !conteiner.includes(ele)) conteiner.push(ele)   //// друга частина якщо ерей контейнер має вже те число не додавай це 
      
   }
return conteiner
}

/// for i loop   /// nested not prefer
for(let i = 0; i < arr.length; i++){
   for(let j = 0; j < arr2.length; j++)
   if(arr2.includes(i)) conteiner.push(i){
      if(arr1[i] === arr2[j]) conteiner.push(arr1[i])
         break
   }
}
   return conteiner

   /// filter the best solution

   const commonElements5 = (arr1, arr2) =>{

    arr1.filter(ele => arr2.includes(ele))

   }

   ///
