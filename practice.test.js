const practice = require("./practice");

/*
    A capitalize function that takes a string and returns it with the first character capitalized. - Odin Requirement
*/

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(practice.capitalize("this is a test")).toBe("This is a test");
});

/*
    A reverseString function that takes a string and returns it reversed. - Odin Requirement
*/

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(practice.reverseString("this is a test")).toBe("tset a si siht");
});

/* 
    A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
    Each of these functions should take two numbers and return the correct calculation.
*/
