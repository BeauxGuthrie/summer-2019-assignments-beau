// Create a simple calculator function in JavaScript.

// var num1 = Math.floor((Math.random()* 10)+ 1);
// var num2 = Math.floor((Math.random()* 10)+ 1);

// console.log(process.argv);

var firstNumber = parseInt(process.argv[2]);
var secondNumber = parseInt(process.argv[3]);

function mathify(num1, num2) {

    // test if both variables are numbers:
    if (typeof num1 == "number" && typeof num2 == "number") {
        
        // do math:
        var sum = num1 + num2;
        var difference = num1 - num2;
        var product = num1 * num2;
        var quotient = num1 / num2;

        // report the results to the console:
        console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
        console.log(`The difference of ${num1} and ${num2} is ${difference}.`);
        console.log(`The product of ${num1} and ${num2} is ${product}.`);
        console.log(`The quotient of ${num1} and ${num2} is ${quotient}.`);

    // if not numbers...
    } else {

        // output error message:
        console.log(`You can only use numbers. Please enter a number. The datatype of ${num1} is ${typeof num1} and the datatype of ${num2} is ${typeof num2}.`);
    }
}

mathify(firstNumber, secondNumber);