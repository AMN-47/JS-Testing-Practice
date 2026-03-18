function capitalize(str) {
    return str = (str.charAt(0)).toUpperCase() + str.slice(1);
} 

function reverseString(str) {
    return str.split("").reverse().join("");
}

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;