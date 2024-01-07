// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedM = 17500;
let distanceMarsK = 225000000;
let distaneMoonK = 384400;
const milesPerK = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedM);
console.log(typeof distanceMarsK);
console.log(typeof distaneMoonK);
console.log(typeof milesPerK);

// Calculate a space mission below
let milesToMars = distanceMarsK * milesPerK;
let hoursToMars = milesToMars / shuttleSpeedM;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName,"will take",daysToMars,"days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distaneMoonK * milesPerK;
let hoursToMoon = milesToMoon / shuttleSpeedM;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName,"will take",daysToMoon,"days to reach the Moon.");