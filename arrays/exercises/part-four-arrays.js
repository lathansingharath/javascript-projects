let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let combinedArray = holdCabinet1.concat(holdCabinet2);
console.log("Here is the first array",holdCabinet1);
console.log("Here is the 2nd array:",holdCabinet2);
console.log("Here is the combined array:",combinedArray);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("Two elements from the first array",holdCabinet1.slice(holdCabinet1.length-2))
console.log(holdCabinet1);

console.log("Two elements from the 2nd array:",holdCabinet2.slice(1,3))
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log("\nThis is the first array\n",holdCabinet1);
console.log("Reversing the first array");
holdCabinet1.reverse();
console.log(holdCabinet1);

console.log("\nThis is the 2nd array \n",holdCabinet2);
console.log("Sorting the 2nd array");
holdCabinet2.sort();
console.log(holdCabinet2);
