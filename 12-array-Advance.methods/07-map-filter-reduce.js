const numbers = [-2, -5, 3, 0, 5, 8, 10];
// count even and positive numbers -> 2
 let evenOdd = numbers.filter(x => x % 2 === 0  && x > 0).length 
console.log(evenOdd);

let evenOdd1 = numbers.reduce((acc, curr) => curr % 2 === 0  && curr > 0 ? acc + 1 : acc, 0)

console.log(evenOdd1);


const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];
  // sum of numbers of inner arrays : [6, 35, 300]

  let number = nums.filter(x => nums.splite( []) )

  const result = []
  for(const innernum of nums){ 
    let sum = 0
for(const num of innernum )
    sum += num
}
result.push(sum) 
console.log (result)


