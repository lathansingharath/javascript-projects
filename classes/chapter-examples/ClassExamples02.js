// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name = "John Doe", age = 43, mass = 54){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
   
}

let tortoise = new Astronaut('Speedy', 120);
let wolf = new Astronaut("Dance",22,89);
let dog = new Astronaut("Srappy",4,70,"Blue");

console.log(tortoise.name, tortoise.age, tortoise.mass);
console.log(wolf.name,wolf.age,wolf.mass);
console.log(dog);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!