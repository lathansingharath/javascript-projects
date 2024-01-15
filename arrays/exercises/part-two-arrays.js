let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
console.log("The current array has the following items:\n",cargoHold);
cargoHold[cargoHold.indexOf("slinky")] = "space tether";
console.log("WIth one item taken out, the array now has the following items:\n",cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.
let removedLastItem = cargoHold.pop(); //pop() removes the last element from the array and returns the value
console.log(`${removedLastItem} was removed from the arrage`);
console.log("The updated array is\n",cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
let removedFirstItem =  cargoHold.shift();//shift() removes the first element and returns the value
console.log(`${removedFirstItem} has been removed from the array`);
console.log("The updated array is:\n",cargoHold);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log("An item has been added to the front and end of the array. The updated array is:\n",cargoHold);

//5) Use a template literal to print the final array and its length.
let cargoHoldLenght =  cargoHold.length;
console.log(`After all the changes, the array now has ${cargoHoldLenght} items. Below is the updated array.\n${cargoHold}`);


