const nums = [-1, 1, 3, 0, 2, 6, 8];  

// Please find the first even number from the array -> 0

let firstEven;
for(const num of nums) {
    if(num % 2 === 0) {
      firstEven = num;
      break;
    }
  }  
  console.log(firstEven); 

  // for(let i = 0; i < nums.length; i++) { 
//   if(nums[i] % 2 === 0) {
//     firstEven = nums[i];
//     break;
//   }
// }

// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];
let cityodd;
for(const city of cities){
    if(city.length % 2 !== 0) {
        cityodd = city
    break
    }
}
console.log(cityodd)

const moreThen5 = [];
for(const city of cities)
    if(city.length > 5) {
        moreThen5 = city
            console.log(moreThen5)
    }
const moreThen55 = [];
for(const city of cities){
    if(city.length > 5)  moreThen5.pish(city)     
}
 console.log(moreThen5)