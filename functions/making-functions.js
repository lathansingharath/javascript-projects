const input = require('readline-sync');

//let userCharInput = input.question("Please pick a character. If no character is picked, a default will be assigned ");
function makeLine(size,userInput = "#") {
    let hashes = "";
    for (let i = 0; i < size; i++) {
        hashes += userInput;
    }
    return hashes;
}

//console.log(makeLine(6,"&"));

function makeSquare (size) {
    let squareHashes = "";
    squareHashes = makeRectangle(size,size);
    return squareHashes;
}
//console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangleHashes = "";
    for (let i = 0; i < height; i++) {
        rectangleHashes += "\n" +makeLine(width);
    }

    return rectangleHashes;
}

//console.log(makeRectangle(11,5));

function makeDownwardStairs(height) {
    let makeDownwardStairsHashes = "";
    for (let i = 1; i <= height; i++) {
        makeDownwardStairsHashes += makeLine(i) + "\n";
    }

    return makeDownwardStairsHashes;
}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let makeSpaceLineHashes = "";
    let totalSpaceNum ="";
    for (let i = 0; i < numSpaces; i++) {
        totalSpaceNum += " ";
    }
    return makeSpaceLineHashes = totalSpaceNum + makeLine(numChars,"&") + totalSpaceNum;
}

//console.log(makeSpaceLine(3,10));

function makeIsoscelesTriangle(height) {
    let makeIsoscelesTriangleHashes = " ";
    for (i = 0;i < height; i++) {
        makeIsoscelesTriangleHashes += "\n" + makeSpaceLine(height - i - 1, 2 * i + 1);
    }
    return makeIsoscelesTriangleHashes;
}

//console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamondHashes = "";
    for (let i = 0; i < height; i++) {
    }
    diamondHashes = makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height));
    return diamondHashes;
}

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

console.log(makeDiamond(6));
