let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: () => Math.ceil(Math.random() * 10)
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: () => Math.ceil(Math.random() * 10)
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: () => Math.ceil(Math.random() * 10)
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: () => Math.ceil(Math.random() * 10)
};

let tinyAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: () => Math.ceil(Math.random() * 10)
};

// After you have created the other object literals, add the astronautID property to each one.
let randID = () => {
   return Math.ceil(Math.random() * 10);
}; 

let a = randID();
let b = randID();
let c = randID();
let d = randID();
let e = randID();

superChimpOne["astronautID"] = a;
while (b === a ) {
   b = randID();
 
}
while (c === b || c === a ) {
   c = randID();
    
}
while (d === c || d === b  || d === a ) {
   d = randID();
   
}
while (e === d || e === c || e === b || e === a) {
   e = randID();
  
}
superChimpOne["astronautID"] = a;
salamander["astronautID"] = b;
superChimpTwo["astronautID"] = c;
dog["astronautID"] = d;
tinyAnimal["astronautID"] = e;

// Create an array to hold the animal objects.
let crewArr = [superChimpOne,salamander,superChimpTwo,dog,tinyAnimal];

// Print out the relevant information about each animal.
 
console.log(crewArr);
// Start an animal race!



