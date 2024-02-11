// launchcode.test.js code:
const launching = require('../index.js');
//const launchOutput = require('../index.js');

describe("Testing launchcode", function() {

  // Write your unit tests here!
  test("Check to see if organization is nonprofit", function () {
    expect(launching.launchcode.organization).toEqual("nonprofit");
  });
  test ("Check to the executive director is Jeff ",function () {
    expect(launching.launchcode.executiveDirector).toEqual("Jeff");
  });
  test("The percentage of cool employees should be 100% ", function () {
    expect(launching.launchcode.percentageCoolEmployees).toBe(100);
  });
  test("Should have java, science, and math as the offered programs ", function() {
    expect(launching.launchcode.programsOffered[0]).toBe("java");
    expect(launching.launchcode.programsOffered[1]).toBe("science");
    expect(launching.launchcode.programsOffered[2]).toBe("math");
    expect((launching.launchcode.programsOffered).length).toBe(3);

  });
  
  test("Number is divisible by 2", function () {
    expect(launching.launchOutput(4)).toEqual("Launch!");
  });
  test("Number is divisible by 3", function () {
    expect(launching.launchOutput(9)).toEqual("Code!");
  });
  test("Number is divisible by 5", function () {
    expect(launching.launchOutput(25)).toEqual("Rocks!");
  });

  test("Number is divisible by 2 and 3 ", function() {
    expect(launching.launchOutput(6)).toEqual("LaunchCode!");
  });
  test("Number is divisible by 3 and 5 ", function() {
    expect(launching.launchOutput(15)).toEqual("Code Rocks!");
  });
  test("Number is divisible by 2 and 5 ", function() {
    expect(launching.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  });
  test("Number is divisible by 2 and 3 and 5 ", function() {
    expect(launching.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });
  test("Number is not divisible by 2 or 3 or 5 ", function() {
    expect(launching.launchOutput(1)).toEqual("Rutabagas! That doesn't work.");
  });



});