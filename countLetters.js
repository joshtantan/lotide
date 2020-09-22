const assertEqual = function(actual, expected) {
  if (typeof actual === "string") {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
    }
  }
};

const countLetters = words => {
  const letterCounter = {};

  for (const letter of words) {
    if (letterCounter[letter]) {
      letterCounter[letter] += 1;
    } else {
      letterCounter[letter] = 1;
    }
  }

  return letterCounter;
};

// Test code
const testResult = countLetters("lighthouse in the house");

assertEqual(testResult["l"], 1);
assertEqual(testResult["i"], 2);
assertEqual(testResult["g"], 1);
assertEqual(testResult["h"], 4);
assertEqual(testResult["t"], 2);
assertEqual(testResult["o"], 2);
assertEqual(testResult["u"], 2);
assertEqual(testResult["s"], 2);
assertEqual(testResult["e"], 3);
assertEqual(testResult["n"], 1);

module.exports = countLetters;
