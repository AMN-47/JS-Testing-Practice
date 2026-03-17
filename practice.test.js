const practice = require("./practice");

/*
    A capitalize function that takes a string and returns it with the first character capitalized. - Odin Requirement
*/


test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(practice.capitalize("this is a test")).toBe("This is a test");
});