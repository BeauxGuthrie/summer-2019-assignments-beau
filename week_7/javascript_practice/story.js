console.log(process.argv);

let randomNumber = process.argv[2];


// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);
let vehicle;

if (randomNumber == 0) {
    vehicle = "bus";
} else if (randomNumber == 1) {
    vehicle = "car";
} else if (randomNumber == 2) {
    vehicle = "magic carpet";
} else if (randomNumber == 3) {
    vehicle = "";
}

let accident = "flat tire";
let tardinessInMinutes = 0; // value in minutes

console.log("Value of vehicle: ", vehicle);
console.log("Value of accident: ", accident);

if (vehicle == "bus") {
    console.log("John takes the bus.");
    tardinessInMinutes += 5;
} else if (vehicle == "car") {
    console.log("John drives his car.");
    tardinessInMinutes += 1;
} else if (vehicle == "magic carpet") {
    console.log("John uses his magic carpet.");
} else {
    console.log("John doesn't know how to get to school.");
    tardinessInMinutes += 1000;
}

if (accident == "flat tire") {

    if (vehicle == "car") {
        console.log("John had a flat tire but luckily he carries a spare tire. He is a little late to school.");
        tardinessInMinutes += 15;
    } else if (vehicle == "bus") {
        console.log("A tire on the bus fell off and left John stranded. The next bus came 3 hours later.");
        tardinessInMinutes += 180;
    }  
} else {
    console.log("John's morning was normal. Nothing unusual happened.");
    tardinessInMinutes += 2;
}

if (tardinessInMinutes >= 15) {
    console.log(`John arrived ${tardinessInMinutes} minutes late to school. He was expelled on the spot.`);
} else if (tardinessInMinutes > 0 && tardinessInMinutes < 15) {
    console.log("John arrived a little late; his teacher wasn't too upset.");
} else {
    console.log("John arrived on time!");
}