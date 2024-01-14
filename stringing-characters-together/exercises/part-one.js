let num = 1001;

//Returns 'undefined'.
num = String(num);

//Use type conversion to print the length (number of digits) of an integer.
console.log("The lenght of",num,"is",num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimalNum = 3.145673;
decimalNum = String(decimalNum);
let lenDecimalNum = decimalNum.length - 1;
console.log ("The number",decimalNum,"has",decimalNum.length,"characters");
console.log("But",decimalNum,"has",lenDecimalNum,"numbers");


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (decimalNum.indexOf(".") === -1) {
    console.log("This is a integer")
} else {
    console.log("This is a decimal");
}