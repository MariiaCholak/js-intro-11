class Product {
    constructor (name, quantity, price){

        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    sell (num){     //// our quanity go dowm
       if(this.quantity >= num) this.quantity -= num;   // we need decrease our quanitity
       else throw new Error (`We don't have ${num} of ${this.name} in stocks!!!`)

    }
    return (num){
        this.quantity += num;       ///we increse our quan
    }
    applyDiscount(percentage){    /// 0.1 10%
        if(percentage <= 1) this.price -= this.price * percentage
    }
}
module.exports = Product;