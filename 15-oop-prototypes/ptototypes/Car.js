
class Car {
    constructor( make, model, year, price){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price
    }
    drive(){
       console.log(`${this.make} ${this.model} drive`) ;
    }
    brakes(){
        console.log(`${this.make} ${this.model}break`)  ;
    }
}
module.exports = Car


const car1 = new Car('Tesla', 'X', 2023, 80000);
const car2 = new Car('BMW', 'X7', 2022, 60000);
const car3 = new Car('Tesla', 'Y', 2020, 27000);
