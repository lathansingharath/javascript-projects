//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let arrTable = [];
arrTable.push(element1,element2,element26);
console.log("Below is the element table");
console.log(arrTable);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(arrTable[0]);
console.log(arrTable[0][2]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log('\n');
console.log(arrTable[0][2]);
console.log(arrTable[1][0]);
console.log(arrTable[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

//The block of code below is an array for wild animals
let wildAnimal1 = ["bear","dangerous"];
let wildAnimal2 = ["otter","safe"];
let wildAnimal =[wildAnimal1,wildAnimal2];
//console.log(wildAnimal);

//the block of code below if array for pets
let dog1 = ["pitbull","scrappy",3];
let cat1 = ["black","mabel",6];
let pets =[dog1,cat1];
//console.log(pets);

//the block of code below is animals array that is made up of wildanimal and pets arrays
let animals = [wildAnimal,pets]; //animals array is made up of two arrays which are also arrays. 
console.log(animals);
console.log(animals[0][0][1]); //this prints out the 1st index in the animals array(wildAnimal) and the first index of the wildAnimal array(wildAnimall).
//and the 2nd index of wildAnimal1

console.log(animals[1][1][0]);





