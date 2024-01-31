let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tinyAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = Math.ceil(Math.random() * 10);
salamander["astronautID"] = Math.ceil(Math.random() * 10);
superChimpTwo["astronautID"] = Math.ceil(Math.random() * 10);
dog["astronautID"] = Math.ceil(Math.random() * 10);
tinyAnimal["astronautID"] = Math.ceil(Math.random() * 10);

// Create an array to hold the animal objects.
let animalArr = [superChimpOne,superChimpTwo,salamander,dog,tinyAnimal];
console.log(animalArr);

// Print out the relevant information about each animal.

// Start an animal race!