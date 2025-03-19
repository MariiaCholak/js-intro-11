const Dancer = require("./es6-inheritance/Dancer");
const Person = require ("./es6-inheritance/Person");
const Programmer = require("./es6-inheritance/Programmer");
const Singer = require("./es6-inheritance/Singer");

const person = new Person('John Doe', 25)
const programmer = new Programmer ( 'Jane Doe', 24, 'Microsoft')
const singer = new Singer ( 'Alex Doe', 30, 'Starts')
const dancer = new Dancer ( 'Alex gfd', 30, 'Starts')