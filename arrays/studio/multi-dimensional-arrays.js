const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabArray = food.split(",");
equipmentCabArray = equipment.split(",");
petsCabArray = pets.split(",");
sleepAidsCabArray = sleepAids.split(",");

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHoldArray = [foodCabArray,equipmentCabArray,petsCabArray,sleepAidsCabArray];
console.log("Here are the four cabinets \n",cargoHoldArray);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCabinet = Number(input.question("Please pick from cabinet from 0 to 3 in the cargo "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userCabinet <= 3) {
    console.log(`You've selected the cabinet with the following items:\n${cargoHoldArray[userCabinet]}`);

} else {
    console.log(`Error! No such cabinet exit. Please make another selections`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userCabInput = Number(input.question("Please select a cabinet from 0 to 3 "));
let userItemInput = input.question("What item are you looking for? ");

if (cargoHoldArray[userCabInput].includes(userItemInput)) {
    console.log(`You've selected ${userItemInput}. You're in luck today, we have that in the selected cabinet`);

} else {
    console.log(`Sorry, we do not have ${userItemInput} in the selected cabinet`);

}