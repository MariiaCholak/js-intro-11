class Customer {
#secretInformation = 'Hello';
/// private property

// private property
notSecret = 'Hi'
}
const cust1 = new Customer();
const cust2 = new Customer();
console.log(cust1.secretInformation)   //// underfine
console.log(cust2.notSecret)   //// Hi

/// might be case when we can use it
// but teacher never used it