/* 
basic function syntax: 

    function functionName(<arguments>) {
        <body of function>
    }

*/

function whatsTheWeather(weather) {
    console.log(`It's ${weather} today.`);
}
whatsTheWeather("foggy");
whatsTheWeather("sunny");
whatsTheWeather("cloudy");

// arrow function practice:

let myNewFunction = (a, b) => a * b;

console.log(myNewFunction(2, 3));
console.log(myNewFunction(50, 3));
console.log(myNewFunction(9, 5));

// practice with arguments and return statements.

// defining the function:
var somethingImportant = "Not really important.";

function takeInfo(info) {
    info = `${info}!`; // add an exclamation point to the end of the 'info' variable.
    console.log(info);
}

// Calling the function:
takeInfo("Hello");

// Morning warmup practice:
function combination(phrase1, phrase2) {
    var singleSentence = `${phrase1} ${phrase2}.`;
    console.log(singleSentence);
    return singleSentence;
}

combination("I like to eat tacos", "when I am in the Mission");

// Practice using one function within another function:

function addition(a, b) {
    return a + b;
}

function mathPractice(num) {
    var sum = num + addition(5, 5);
    console.log(`The sum of ${num} and ${addition(5, 5)} is ${sum}.`);
}

mathPractice(10);