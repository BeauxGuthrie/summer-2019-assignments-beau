// for loop:
for (let i = 0; i <= 5; i++) {
    console.log(`FOR LOOP: this is loop number ${i}.`);
}


// while loop:
var counter = 0;

while (counter >= -5) {
    console.log(`WHILE LOOP: the value of counter is ${counter}.`);
    counter--;
}

// do while:
var i = 20;

do {
    console.log(`DO WHILE LOOP: the number is ${i}.`);
    i++;
} while (i <= 25);

// Counting the number of characters in a string:

var string = "Hello there, how are you doing?"


function characterCount(str) {
    var charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
        charCount += 1;
        }
    }
    console.log(`The string has ${charCount} characters.`);
}

characterCount(string);

function letterCounter(string, lowercase) {

    var letterCount = 0;

    var uppercase = lowercase.toUpperCase();

    for (let i = 0; i < string.length; i++) {

        if (string[i] == lowercase || string[i] == uppercase) {
            letterCount++;
        }
    }

    console.log(`We found ${letterCount} ${lowercase} letters inside the text.`);
}

letterCounter("Hello, world!", "o");
letterCounter("Goodbye, world!", "g");