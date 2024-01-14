//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
let letterJ = language[language.indexOf("J")];
let letterS = language[language.indexOf("S")];
console.log(letterJ+letterS);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for \"JavaScript\" is ${letterJ}${letterS}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`${language.slice(language.indexOf("J"),language.indexOf("J") + 4).toUpperCase()} is not as fun as ${language}`);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = "title case";
let capResult = notTitleCase.replace("t","T");
capResult = capResult.replace("c","C");
console.log(capResult);


