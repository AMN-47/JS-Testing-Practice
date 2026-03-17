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
test("A calculator object that contains functions for the basic operations: ADD", () => {
    expect(practice.calculator(1,1)).toBe(1);
});

test("A calculator object that contains functions for the basic operations: SUBTRACT", () => {
    expect(practice.calculator(2,1)).toBe(1);
});

test("A calculator object that contains functions for the basic operations: MULTIPLY", () => {
    expect(practice.calculator(2,3)).toBe(6);
});

test("A calculator object that contains functions for the basic operations: DIVIDE", () => {
    expect(practice.calculator(10,2)).toBe(5);
});