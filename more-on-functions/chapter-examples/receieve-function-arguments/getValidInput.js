const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let testEven = function (num) {
    num = Number(num);
    return num % 2 === 0;
};

let testStartWithA = function(str) {
    return str[0] === "a";

};

let testVowel = function(str) {
    vowelArray = ["a","e","i","o","u","y"];
    return vowelArray.includes(str);


};

console.log(getValidInput("Please enter an even number ",testEven));

// TODO 1: write a validator 
// that ensures input starts with "a"
console.log(getValidInput("Please enter a word that starts with the letter 'a' ",testStartWithA));

// TODO 2: write a validator 
// that ensures input is a vowel
console.log(getValidInput("Please enter a vowel ",testVowel));


// Be sure to test your code!
