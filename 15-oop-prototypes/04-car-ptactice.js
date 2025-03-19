const Car = require('./ptototypes/Car')


/*
Create 3 car objects with below info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000

1. Log each car object to the console
2. Execute drive and stop methods for each car
3. Get each cars price information in the format -> {year make model} is ${price}.
Example: 2023 Tesla X is $80000.
*/

//when we move to car it's tell us what we nned to do
const car1 = new Car('Tesla', 'X', 2023, 80000);
const car2 = new Car('BMW', 'X7', 2022, 60000);
const car3 = new Car('Tesla', 'Y', 2020, 27000);


const cars = [ car1, car2, car3]  //// creat cars arr
cars.forEach(x => {      /// use loop for all cars       /// or for(const car of cars) {
     console.log(x)
     x.drive();     /// для усіх машин ми зробиил та кикликали ці функції
     x.brakes();
     console.log(`${x.year} ${x.model} is $${x.price}`)
     console.log()   /// після кожної машини ми зробили нову лінії для читабельності у нас є пропуск 

})

