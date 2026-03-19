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

function ceaserCipher (str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const cipher = "bcdefghijklmnopqrstuvwxyza";

    const isLowerCase = (letter) => {
        if (letter == letter.toLowerCase() && letter!= letter.toUpperCase()) {
            return true;
        } 
        return false;
    };

    const isUpperCase = (letter) => {
        if (letter == letter.toUpperCase() && letter != letter.toLowerCase()) {
            return true;
        }
        return false;
    };

    const lowerCipher = (letter) => {
        const index = letters.indexOf(letter);
        let cipherCharacter = cipher[index];
        return cipherCharacter;
    };

    if (typeof str !== "string") {
        return "not a string";
    }

    let cipherOutput = ""; //Sets output of current output to blank, next for loop encrypts and fills each letter with encrypted one

    for (let i = 0; i < str.length; i++) {
        if (isUpperCase(str[i]) || isLowerCase(str[i])) {
            if (isLowerCase(str[i])) {
                cipherOutput += lowerCipher(str[i]);
            } else if (isUpperCase(str[i])){
                cipherOutput += lowerCipher(str[i].toLowerCase()).toUpperCase();
            }
        } else {
            cipherOutput += str[i];
        }
    }

    return cipherOutput;

}

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.ceaserCipher = ceaserCipher;