const whoWon = require("../RPS.js");

describe ("Who Won", function () {
    test ("It's a tie if player 1 equals player 2 ", function () {
        let output = whoWon ("rock","rock");
        expect(output).toEqual("TIE!");
    });
    test("Player 1 rock beats player 2 scissor", function() {
        let output = whoWon("rock","scissors");
        expect(output).toEqual("Player 1 wins!");
    });
    test("Player 2 paper beats player 1 rock ", function () {
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!");
    });
    test("Player 2 scissors beats player 1 paper ", function () {
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!");
    });
    test("Player 2 rock beats player 1 scissors ", function () {
        let output = whoWon("scissors", "rock");
        expect(output).toEqual("Player 2 wins!");
    });
    test("Player 1 enter invalid input ", function () {
        let output = whoWon("milk", "scissors");
        expect(output).toEqual("Invalid input!");
    });
    test("Player 2 enter invalid input ", function () {
        let output = whoWon("rock", "honey");
        expect(output).toEqual("Invalid input!");
    });
});