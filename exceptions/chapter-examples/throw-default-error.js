const input = require("readline-sync");
//let userInput = input.question("Please enter a number ");

let userInput = Number(input.question("Please enter a number "));
    
let multiplyByTwo = (num) => {
    return userInput * 2;   
};

let myError = (message) => {
    return message = "still too high";
};


try {

   if (multiplyByTwo(userInput) > 25) {
    throw myError ("Number is too high ");
   }
} catch (err) {
    console.error(err);
} finally {
    console.log ("the end of error handling")
}

