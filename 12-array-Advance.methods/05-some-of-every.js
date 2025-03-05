const numbers = [1, 2, 3, 4, 5] //// - 1
//// numbers are positive
//let flag = true; /// num are positive
/*(const num of numbers){
    if(num <= 0){
        flag = false;
        break;
    }
}
console.log(flag)/// true     if neg
numbers.forEach((x) => {
    if(x <= 0) flag = false;
})*/

let allPosotive = numbers.every((x) => x > 0)
console.log(allPosotive)

const cities = ['Chicagi', 'Berlin', 'Rome']
 let some6 = cities.some(x => x.length === 6 )
 console.log(some6)