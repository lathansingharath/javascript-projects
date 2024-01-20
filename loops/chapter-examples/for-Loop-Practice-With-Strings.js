// Create a string variable containing your name.
let myName = "Lathan Singharath";

// Write a for loop that prints each character in your name on a different line.
if (myName.includes(" ")) {
    myName = myName.replace(" ","");
}



for (let i = 0; i < myName.length; i++){
    
    console.log(myName[i]);
    
} 