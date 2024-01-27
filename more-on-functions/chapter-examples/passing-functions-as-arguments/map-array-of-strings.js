let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
function takeFistLetter (Fname) {
    return Fname[0];
}

let firstInitials = names.map(takeFistLetter);

console.log(`${firstInitials}`);

//THe next block of code does the same thing as about but uses anonymous function instead

let nameFirstInit = function (firstN) {
    return firstN[0];
    
}

firstInitials = names.map(nameFirstInit);
console.log(firstInitials);

//The next block of code does the same but this time the anonymous function is an arguement in map method

firstInitials = names.map(function (nameOne) {
    return nameOne[0];
});

console.log(firstInitials);
