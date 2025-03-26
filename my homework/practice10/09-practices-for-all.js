



Search TechGlobal-C11
Free



Home
1

8
DMs
2

Activity
3

Later
4

More
0

TechGlobal-C11








general




29




Messages

Channel Overview

Pins

Files

CanvasListBookmark folder
3 new messages

Loading history...


TechGlobal
  9:36 AM
class Person {
  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }
  eat(str = 'food') {
    console.log(`${this.fullname} eats ${str}.`);
  }
  sleep(num = 8) {
    console.log(`${this.fullname} sleeps ${num} hours.`)
  }
  walk() {
    return true;
  }
}

module.exports = Person;
9:36
const Person = require('./Person');

class Programmer extends Person {
  constructor(fullname, age, companyName) {
    super(fullname, age); // this invokes parent class constructor - must be the first statement
    this.companyName = companyName;
  }
  code(language) {
    console.log(`Programmer codes in ${language}.`);
  }
}
9:37
const Person = require("./Person");

class Singer extends Person{
  constructor(fullname, age, bandName) {
    super(fullname, age);
    this.bandName = bandName;
  }
  sing() {
    return true;
  }
  playGuitar() {
    return true;
  }
}


TechGlobal
  5:26 PM
/*
1. Create a class called Book
2. Create a constructor which takes title, genre, page
*/


TechGlobal
  5:37 PM
/*
1. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a function called as getFullName() for Author object that will return {firstName lastName}
4. Create a function called as getBooks() for Author object that will return all the books
*/


TechGlobal
  6:33 PM
/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/

const Book = require('./Book');
const Author = require('./Author');


TechGlobal
  6:41 PM
const Book = require('./Book');
const Author = require('./Author');
const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694 );
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768 );
const book3 = new Book('A Strom of Swords', 'Epic Fantasy', 973 );


TechGlobal
  7:10 PM
let sortedBooks = author.getBooks().sort((a, b) => b.page - a.page); //
console.log(sortedBooks[0].title);
7:11
let maxPagesBook = author.getBooks()[0];
for (const book of author.getBooks()) {
    if (book.page > maxPagesBook.page) {
        maxPagesBook = book;
    }
}
console.log(`The book with the most pages is: ${maxPagesBook.title}`)


TechGlobal
  7:20 PM
What is 'IS A RELATIONSHIP' vs 'HAS A RELATIONSHIP'?
class Animal {
	
}
class Dog extends Animal {
	
}
class GermanShepherd extends Dog {
	
}
GermanShepherd is a Dog
GermanShepher is an Animal
IS A RELATIONSHIP: inheritance with parent child relationship
Author has Books
Car has Engine
HAS A RELATIONSHIP: it is not inheritance but one class uses another class as property.
class Car{
	constructor(engine) {
	}
}
class Engine {
	
}


TechGlobal
  7:33 PM
March 30th is OFF
April 19th is the date for MOCK-INTERVIEW 2
April 3rd - Mentoring groups/Mentors 
April 10th - First mentor/meeting 

Saturday -> Mentoring Document
Wednesday -> Send Draft 
Thursday -> mentoring meeting
Saturday -> Record a video (5 mins) -> You will get feedbacks
:white_check_mark:
4



TechGlobal
  5:48 PM

Akin Kaya
 | Word Document
 

Class_Practice10.docx
Word Document
5:49
/*
-Create a class called as Player
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
-Create a method called as getInfo() which returns the score for the player object info in the format: {nickName}'s score is {score}.
-Create a method called as attack() which takes a player object as argument and 
increases the attacking player's score by 1 while it decreases the attacked player's score by 1
-Create a method called as damage() which decreases the score of the player object by 1
*/


/*
-Create a class called as SuperPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as superAttack() which takes a player object as argument and 
increases the attacking player's score by 2 while it decreases the attacked player's score by 2
*/

/*
-Create a class called as HeroPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as heal() which takes a player object as argument and 
increases the healed player's score by 1.
*/


/*
Create 2 player objects with below information
player1 = { nickName: 'Player 1', score: 5 }
player2 = { nickName: 'Player 2', score: 5 }

Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }

Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/


/*
Execute the attack() method for player1 over player2
    -this will decrease player2's score by 1 and increase player1's score by 1
Execute the attack() method for player1 over superPlayer
    -this will decrease superPlayer's score by 1 and increase player1's score by 1
Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
    -this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 6
Execute the heal() method for heroPlayer over player1 and player2
    -this will increase player1 and player2's score by 1
Execute the attack() method for player1, player2 and heroPlayer over superPlayer
    -this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 1
Execute the damage() method for player1 and player2
    -this will decrease player1 and player2's score by 1
*/


/*
Print information of all the players using getInfo() method

EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/


Bilal Alsilwadi
  3:13 PM
Sorry @channel running late to minutes the hw recap
:+1:
2
:white_check_mark:
2

3:14
Should be starting in the next 5 minutes


Bilal Alsilwadi
  4:20 PM
const secondMin = arr => {//[7, 4, 4, 4, 23, 23, 23]
  let min = arr[0];//4
  let secondMin;//7

  for(let num of arr) {//4
    if(num < min) {
      secondMin = min;
      min = num;
    }else if(num < secondMin && num !== min) {
      secondMin = num
    }
  }
  return secondMin || min;
}


TechGlobal
  10:04 AM
function gotoCarvana() {
  setTimeout(() => {
    console.log('Carvana website is loaded...')
  }, 500);
}


TechGlobal
  11:28 AM
function gotoCarvana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Carvana website is loaded...');
    }, 500);
  });
}
function clickOnFinancing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Carvana financing page is loaded...');
    }, 1000);
  });
}
function validateHeading(expected) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${expected} heading is loaded...`);
    }, 750);
  });
}
11:31
function gotoCarvana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Carvana website is loaded...');
      resolve();
    }, 500);
  });
}
function clickOnFinancing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Carvana financing page is loaded...');
      resolve();
    }, 1000);
  });
}
function validateHeading(expected) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${expected} heading is loaded...`);
      resolve();
    }, 750);
  });
}
function test1() {
  gotoCarvana();
}
test1();


TechGlobal
  12:02 PM
function connectToDB() {
  return new Promise((resolve, reject) => {
    const dbUp = true;
    setTimeout(() => {
      if(dbUp) resolve('DB connection is successful...');
      else reject('ERROR: DB is down...')
    }, 3000);
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    const dataAvailable = true;
    setTimeout(() => {
      if(dataAvailable) resolve('DB data is here...');
      else reject('ERROR: DB data not found...');
    }, 1500);
  });
}
function useData() {
  return new Promise((resolve, reject) => {
    const usingData = true;
    setTimeout(() => {
      if(usingData) resolve('Data is used...');
      else reject('ERROR: Data is not used...');
    }, 500);
  });
}


TechGlobal
  9:17 AM
function gotoAmazon1() {
  setTimeout(() => {
    console.log('Amazon is loaded...');
  }, 500);
}
function clickOnLocationHeaderItem1() {
  setTimeout(() => {
    console.log('Location header item is clicked...');
  }, 200);
}
function validateDialogIsVisible1() {
  setTimeout(() => {
    console.log('Dialog is visible...');
  }, 300);
}
New


TechGlobal
  9:24 AM
// Using callbacks before ES6
function gotoAmazon1(callback, error) {
  const bool = true;
  setTimeout(() => {
    console.log('Amazon is loaded...');
    if(bool) callback();
    else error();
  }, 500);
}
function clickOnLocationHeaderItem1(callback, error) {
  const bool = true;
  setTimeout(() => {
    console.log('Location header item is clicked...');
    if(bool) callback();
    else error();
  }, 200);
}
function validateDialogIsVisible1(callback, error) {
  let bool = true;
  setTimeout(() => {
    console.log('Dialog is visible...');
    if(bool) callback();
    else error();
  }, 300);
}
function test1() {
  gotoAmazon1(() => {
    clickOnLocationHeaderItem1(() => {
      validateDialogIsVisible1(() => {
        console.log('Location dialod visibility test case PASSED!');
      },
      () => {
        console.log('Location dialod visibility test case FAILED!');
      });
    },
    () => {
      console.log('Location header item FAILED!');
    });
  },
  () => {
    console.log('Go to amazon FAILED!');
  });
}
test1();


TechGlobal
  9:32 AM
function gotoAmazon2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Amazon is loaded...");
        resolve();
      } else {
        reject("ERROR: Go to amazon FAILED!");
      }
    }, 500);
  });
}

function clickOnLocationHeaderItem2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Location header item is clicked...");
        resolve();
      } else {
        reject("Location header item FAILED!");
      }
    }, 200);
  });
}

function validateDialogIsVisible2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Dialog is visible...");
        resolve();
      } else {
        reject("Location dialod visibility test case FAILED!");
      }
    }, 200);
  });
}


TechGlobal
  9:44 AM
// Using callbacks before ES6
function gotoAmazon1(callback, error) {
  const bool = true;
  setTimeout(() => {
    if (bool) {
      console.log("Amazon is loaded...");
      callback();
    } else error();
  }, 500);
}

function clickOnLocationHeaderItem1(callback, error) {
  const bool = true;
  setTimeout(() => {
    if (bool) {
      console.log("Location header item is clicked...");
      callback();
    } else error();
  }, 200);
}

function validateDialogIsVisible1(callback, error) {
  let bool = true;
  setTimeout(() => {
    if (bool) {
      console.log("Dialog is visible...");
      callback();
    } else error();
  }, 300);
}

function test1() {
  gotoAmazon1(
    () => {
      clickOnLocationHeaderItem1(
        () => {
          validateDialogIsVisible1(
            () => {
              console.log("Location dialod visibility test case PASSED!");
            },
            () => {
              console.log("Location dialod visibility test case FAILED!");
            }
          );
        },
        () => {
          console.log("Location header item FAILED!");
        }
      );
    },
    () => {
      console.log("Go to amazon FAILED!");
    }
  );
}

// test1();

// AFTER ES6 - using promises with then-catch methods
function gotoAmazon2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Amazon is loaded...");
        resolve();
      } else {
        reject("ERROR: Go to amazon FAILED!");
      }
    }, 500);
  });
}

function clickOnLocationHeaderItem2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = true;
      if (bool) {
        console.log("Location header item is clicked...");
        resolve();
      } else {
        reject("Location header item FAILED!");
      }
    }, 200);
  });
}

function validateDialogIsVisible2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = false;
      if (bool) {
        console.log("Dialog is visible...");
        resolve();
      } else {
        reject("Location dialod visibility FAILED!");
      }
    }, 200);
  });
}


function test2() {
  gotoAmazon2()
    .then(() => clickOnLocationHeaderItem2())
    .then(() => validateDialogIsVisible2())
    .catch((err) => console.log(err));
}

// test2();


// AFTER ES6 - using promises with async-await keywords
async function test3() {
  try {
    await gotoAmazon2();
    await clickOnLocationHeaderItem2();
    await validateDialogIsVisible2();
  }
  catch(err) {
    console.log(err);
  }
}

test3();

React

Reply














