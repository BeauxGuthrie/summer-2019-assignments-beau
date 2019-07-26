// Conditional logic

// Falsey values: false 0 NaN "" undefined null [] {}
// Truthy values: everything else

if ("string") {
    console.log("Hello!");
}

// Comparison operators: ==, ===, !=, !==, <, >, <=, >=
// == vs. === | When using ===, value and data type must be the same. When using ==, only value must be equal.

if ( 100 == 10 ) {
    console.log("Double equal!");
}

// Not equal to: !=

if (100 != 10) {
    console.log("Not equal to!");
}

if (100 <= 100) {
    console.log("Lesser than or equal to!");
}

if (100 >= 50) {
    console.log("Greater than or equal to!");
}

// Logical operators: (and) &&, (or) ||, (not) !

if (true && true) {
    console.log("Both are true!");
}

if (true || false) {
    console.log("Either is true!");
}

if (!false) {
    console.log("True!");
}

// Nested conditionals:

if (true) {
    var var1 = 100;
    if (false) {
        var var2 = 200;
    }
    if (true) {
        var var4 = 400;
        if (false) {
            var var5 = 500;
        }
    }
}