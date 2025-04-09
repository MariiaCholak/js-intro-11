console.log('Hello from script-1.js');

// Client vs Server environment
if(typeof window !== undefined) {   //// побачимо це на робочому середовищі часто
  // some client code
  console.log("WINDOW:::", window); // Available only on client code
} else {
  console.log('GLOBAL', global); // Available only on server
}

/**
 * ALERT
 * alert() doesn't returns nothing (undefined)
 */
// const alertAns = window.alert('Alert!!!');
// console.log('alertAns', alertAns); // undefined

//// we don't need to tipe all the time window JS understand it
/**
 * PROMPT
 * prompt()
 *  - Provide message and click OK - string
 *  - Provide message and click CANCEL - null
 *  - No message click OK - empty string
 *  - No message click CANCEL - null
 */
// const promptAns = prompt('Would you like to hear from us? Leave your email');
// console.log('promptAns', promptAns);

/**
 * CONFIRM
 * confirm()
 *  - true
 *  - false
 */

// const confirmAns = confirm('Are you student?');
// console.log('confirmAns', confirmAns);

/**
 * localStorage()
 * we can't call our storege like previous examples will get an error local is nor a function 
 */

// Storage length
const storageLen = localStorage.length;
console.log('storageLen', storageLen);
// we can verify our length by goind to on browser => application- local storage
//local storage save smth prermanent. before you delete it
/// we can open and see whar inside

// setItem
localStorage.setItem('username', 'abc123');
console.log('storageLen', storageLen);
/// now our inf succesfully store in our local brows

// getItem
const userName = localStorage.getItem('username');
console.log('userName', userName);

// removeItem
localStorage.removeItem('username');
console.log('storageLen', storageLen);

localStorage.setItem('username', 'joe');
localStorage.setItem('password', 'abc123');
console.log('storageLen', storageLen);

// clear all
localStorage.clear();
/// local can store only string value/ to store it use JSON

// How to store object in storage?
localStorage.setItem('userInfo', {name: 'Alex', email: 'alex@gmail.com'});  // result dont underst [object Object]
localStorage.setItem('userInfo', JSON.stringify({name: 'Alex', email: 'alex@gmail.com'})); //// convert it sucessfull

const userInfo = localStorage.getItem('userInfo'); // string
const userInfoObj = JSON.parse(localStorage.getItem('userInfo'));//// it's object
console.log('userInfo', userInfo);
console.log('userInfoObj', userInfoObj);

/// innerHeight, innerWidth usefull testing mobile texting, full screen

