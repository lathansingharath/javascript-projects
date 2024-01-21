const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLev;
let numAstro;
let shuttleAlt = 20000;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


  startingFuelLev = Number(input.question("What is the starting fuel level? " ));
  while (startingFuelLev < 5000 || startingFuelLev > 30000) {
    startingFuelLev = Number(input.question("Invalid. Please enter the correct fuel level "));
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  numAstro = Number(input.question("How many astronauts are going? "));

  while (numAstro > 7) {
    numAstro = Number(input.question("Too many astronauts. Please enter the correct amount "));
  }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let fuelConsume = numAstro * 100;
while (startingFuelLev > 0) {
  if (startingFuelLev >= fuelConsume) {
    startingFuelLev -= fuelConsume;
    shuttleAlt += 50;
  } else {
    break;
  }

}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("The shuttle gained an altitude of",shuttleAlt,"km");
if (shuttleAlt >=+ 2000) {
  console.log("Orbit achieved")
} else {
  console.log("Failed to reach orbit.");
}