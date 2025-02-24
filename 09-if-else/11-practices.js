
const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-sunday 6-saturday

/*
Write a program that tells if the day is WEEKEND or a WEEKDAY
0 or 6 -> WEEKEND 
1-5    -> WEEKDAY
*/

if(dayOfTheWeek === 0 || dayOfTheWeek === 6) {
  console.log('WEEKEND');
}
else {
  console.log('WEEKDAY');
}

switch(true) {
  case dayOfTheWeek === 0 || dayOfTheWeek === 6:
    console.log('WEEKEND');
    break;
  default:
    console.log('WEEKDAY');
}

switch(dayOfTheWeek){
  case 0:
  case 6:
      console.log('WEEKEND');
      break;
  default:
      console.log('WEEKDAY');
}


let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'WEEKEND' : 'WEEKDAY';
console.log(result);






















const date = new Date ();
let dayOfTheWeek = date.getDay();  ///0(Sunday)

if(0, 6){
    console.log("Weekend")
}
else (1>=5) {
   console.log ("Weekday")
}
 
switch (dayOfTheWeek){
    case 0:
    console.log()
}


function evenOdd(number) {
    return number % 2 === 0 ? 'EVEN' : 'ODD'; 
  }
  
  console.log(evenOdd(2));
  console.log(evenOdd(3));
  
  
  function posNegZero(number) {
  
  }
  
function posNegZero (number){
     return  number > 0 ? " positive" || number < 0 ? "nrgetive" ||  number == 0;
    
}
console.log(posNegZero(-5))
/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/



      
    function divisible5 (number) {
        return number /  5 == true
    }

    console.log(divisible5(8))

    console.log(divisible5(5))

    function fooBar (number) {
        if (number /5  === 0 ) 
            return 'foo'
        if { else (number / 7   === 0 )
        return " bar"}
else( number / 5 || 7 ) return " boor"
    }

    if (username === "TechGlobal") {
        if (password === "Test1234") {
          console.log("You are logged in");
        } else {
          console.log("Invalid Password entered!");
        }
      } else {
        console.log("Invalid Username entered!");
      }