const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
    // if (index > 2){
    //     throw lathanError("No Bueno!");
    // }
    //throw new lathanError("No Bueno!");
} catch(err) {
    console.log("We caught a TypeError, but our program continues to run!");
    console.log("You tried to access an animal at index:", index);
    console.error(err);//testing
} finally {
    console.log("You tried to access an animal at index:",index);
}

console.log("the code goes on...");
