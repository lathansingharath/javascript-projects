let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //With a delimiter, it puts whole string into an array with the string as one element
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("s"));

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr.join(""));


//3) Do split or join change the original string/array?
console.log(str);//orginal string doesn't change
console.log(arr);//orginal array doesn't change

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
arrCargoHold =  cargoHold.split(",");
console.log("\n",arrCargoHold);
arrCargoHold.sort();
console.log(arrCargoHold);

let strCargoHold = arrCargoHold.join(",");
console.log("\n",strCargoHold);




