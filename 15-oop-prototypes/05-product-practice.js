const Product = require('./ptototypes/Product')

const pen = new Product('Pen', 20, 10)
const mug = new Product('Mug', 10, 15)
const tshirt = new Product('T-shirt', 5, 20)
console.log(pen)  /// Product { name: 'Pen', quantity: 20, price: 10 }
pen.sell(15)
pen.return(3)
pen.applyDiscount(0.2)
console.log(pen) ////  Product { name: 'Pen', quantity: 8, price: 8 }