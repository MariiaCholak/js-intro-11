// TASK: Create a Teacher prototype with fname, lname, age, field properties

function Teacher ( fname, lname, age, field){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
}

// Create 2 Teacher Prototype methods as teach and giveHomework - void and logs below
// fname teaches field.
// fname gives homework.
Teacher.prototype.teach = function(){        ///     we can't  use => here we must write function
    console.log(`${this.fname} teaches ${this.field}`)
}
Teacher.prototype.givesHomework = function (){
    console.log(`${this.fname} gives Homework }`)  
}



//// Create 4 Teacher Objects/Instances
const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');

// Find the oldest Teacher -> Jane
// Find the average age of the teachers -> 39
// Find the youngest teacher -> Adam Bayer
// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']

const teachers = [teacher1, teacher2, teacher3, teacher4]   /// спочатку зібрали вчителів до купи. знайти к-сть дописали б length  =4
teachers.forEach(x => console.log(x))    /// print teacher one be one     x.fname отримаємо перші номера для вчителів

const oldest = teachers.reduce((acc, curr) => {
  if(curr.age > acc.age) acc = curr;   /// we update our acc,  якщо є два одинакового віку 0означає ,якщо тут ,є два  тих самих візьми перше значенн
  return acc;             // сurr.age >= acc.age  поверне друге
}, teachers[0]);  // наше інітіал  ми припускаємо що перше yeacherі ше    припускаємо curr is john 55
console.log('Oldest Teacher is:', oldest.fname);  // щоб знайти лише перше імя

const sumOfAges = teachers.reduce((acc, curr) => acc += curr.age, 0);    // curr meand teache that's why we add age    // init value sum we star as 0
console.log('Sum of ages', sumOfAges);
console.log('Average of ages', sumOfAges / teachers.length);     /// ділимо на довжину   тоюто поділили на 4 бо їх є 4

const youngest = teachers.reduce((acc, curr) =>{
    if (curr.age < acc.age) acc = curr;
    return acc;
}, teachers[0])

console.log('Youngest Teacher is:', youngest.fname, youngest.lname);

const fullnames = teachers.map(x => `${x.fname} ${x.lname}`)    /// цікаве спостережння як він додав '
console.log(fullnames) /// 'jogn dpe', 'jane donnely', 'sara elly























