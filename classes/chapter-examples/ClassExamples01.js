//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);
let dog = new Astronaut("Dog",3,70);

console.log(fox);
console.log(fox.age, fox.color);
fox.age = 9;
fox.color = 'red';
fox.petName = "Scrappy";
dog.petName = "Puppy power";

console.log(fox);
console.log(fox.age, fox.color,fox.petName);
console.log(dog);


//Try modifying or adding properties below.