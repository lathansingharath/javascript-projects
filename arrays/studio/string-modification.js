const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
let removedStr = str.slice(0,3);
let removedStr2 = str.slice(removedStr.length);
newStr = removedStr2+removedStr;

console.log(`The current string is ${str}`);
console.log(`The new string is ${newStr}`);
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = Number(input.question("How many letters would you like to relocate? "));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let removedUserInputStr;
let switchedUserInputStr;
if (userInput < str.length) {
    removedUserInputStr = str.slice(0,userInput);
    switchedUserInputStr = str.slice(userInput);
    console.log(switchedUserInputStr+removedUserInputStr);
} else {
    console.log(`You chose more than ${str.length} letters. Therefore by default, three will get relocated.`);

}

