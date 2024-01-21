/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line*/

 for (let i = 0; i < 21; i++) {
  console.log(i);
  }

 // b. Print only the ODD values from 3 - 29, one number per line.
 for (let i = 3; i < 30; i += 2) {
  console.log(i);
 }

 // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
 for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
 }
 // d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
for (let i = 50; i >= 20; i--) {
  if  (i % 3 === 0) {
    console.log(i,"is a multiple of 3");
  } else {
    console.log(i, "is not a multiple of 3");
  }

}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let str = "LaunchCode";
let strArray = [1, 5, "LC101","blue", 42];
/*
Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.*/
for (let i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

//b. Print each character of the string - in reverse order - to a new line. */ 

for (let i = str.length - 1; i >=0; i--) {
  
  console.log(str[i]);
}

//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

let numArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let oddNumArray = [];
let evenNumArray = [];

//a. One array contains the even numbers, and the other holds the odds.
for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    evenNumArray.push(numArray[i]);
  } else {
    oddNumArray.push(numArray[i]);
  }

}

//b. Print the arrays to confirm the results. 
console.log("Here are the original array with all numbers\n",numArray);
console.log("Here are the numbers in an array with only even numbers\n",evenNumArray);
console.log("here are the numbers in an array with only odd numbers\n",oddNumArray);