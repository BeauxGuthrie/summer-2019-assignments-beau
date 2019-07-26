// Single line JS comment.

/*
Multiline
JS
comment.
*/

// Console log function:

//console.log("Hello, World!");
//console.log("Goodbye, World!");

// Numbers, Strings, Booleans:

// Numbers:
1000;
99;
-8;

// Strings:
"This is a string!";
'This is another string!';
// note: strings must be placed between single or double quotes.

// Booleans:
true;
false;

// Variables:

// variable declaration syntax: assignment = value;

var mySpecialNumber;
mySpecialNumber = 250 + 250;
var anotherVariable = 1000;
console.log(`My special number is ${mySpecialNumber}!`);
console.log("Value 1:", mySpecialNumber);

// Math: operators => = - / * %

var myNumber = 1000 + 500;

console.log(myNumber); // => 1500

var newNumber = myNumber + 1000;

console.log(newNumber); // => 2500

newNumber = newNumber + myNumber;

console.log(newNumber); // => 4000

var divided = 1000 / 200;
var multiplied = 500 * 10;
var subtraction = 10 - 1;

console.log(multiplied / subtraction);

var order = 1000 * 20 - 10 / 3;

console.log("The value of the 'order' variable is:", order);

// Conditionals: if, else, else if
var num = 21;

if (num % 2 === 0) {
  console.log("I ran because the number was even."); 
} else {
  console.log("I ran because the number was not even.");
  }

function whatToWear(weather) {
  if (weather === "rainy") {
    console.log(`It's ${weather}, wear your raincoat!`);   
  } else if (weather === "foggy") {
    console.log(`It's ${weather}, wear your down jacket!`);
  } else {
    console.log("I dunno what the weather is, you're on your own!");
  }
}

whatToWear("foggy");

