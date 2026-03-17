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

/*
    A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.
Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
Don’t forget to test punctuation. Punctuation, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. 
If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
*/ 
test("A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”", () => {
    expect(practice.ceaserCipher("Zebra!")).toBe("Afcsb!");
});

/*
    An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};
*/ 
test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyseArray([1,8,3,4,2,6])).toBe({average: 4, min: 1, max: 8, length: 6});
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyseArray([1,1,1])).toBe({average: 1, min: 1, max: 1, length: 3});
});

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyseArray([0])).toBe({average: 0, min: 0, max: 0, length: 1});
}); 

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(practice.analyseArray([-1,-1,1,1])).toBe({average: 0, min: -1, max: 1, length: 4});
});