function Phone(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
 ///add prototype method
  Phone.prototype.call = function(){
console.log(`${this.brand} is calling`)
  }
  Phone.prototype.text = function(){
    return `${this.brand} text`
  }

  const phone1 = new Phone('iPhone', 'Purple', 1000);
  const phone2 = new Phone('Samsung', 'Blue', 1200);
  const phone3 = new Phone('Nokia', 'Black', 750);

phone1.call()
console.log(phone2.text())