// Create a conditional statement based on the folowing story: your computer breaks down and you decide
// to buy a new one. If a new computer is too expensive, I will try to repair my old computer.

var computerBrokenStatus;

if (computerBrokenStatus) {

    var shopForNewComputer = true;
    var newComputerPrice = Math.floor((Math.random()* 2000) + 1);
    var highestBudget = 1000;

    if (newComputerPrice <= highestBudget) {
        console.log("Bought a new computer!");
    } else {
        console.log("Try to fix my old computer...");
    }
}