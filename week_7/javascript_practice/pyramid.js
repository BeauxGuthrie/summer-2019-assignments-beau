// Create a function that outputs a sideways pyramid with a peak based on a number supplied by the user.

// This was Beau's solo attempt:

function pyramidMaker(num) {
    var asteriskCounter = 1;
    // var asterisk = "*";
    for (var i = 1; i <= num; i++) {
        if (num >= asteriskCounter) {
            console.log("*" * asteriskCounter);
            asteriskCounter += 1;
        }
    }
}

pyramidMaker(5);

// After a quick search online:

function pyramidMaker(num) {
    var asteriskCounter = 1;
    var asterisk = "";
    for (var i = 1; i <= num; i++) {
        if (num >= asteriskCounter) {
            asterisk += "*";
            console.log(asterisk);
            asteriskCounter += 1;
        }
    }
}