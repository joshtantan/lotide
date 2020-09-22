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

const findKeyByValue = (obj, val) => {
  if (obj && val) {
    for (const key in obj) {
      if (obj[key] === val) {
        return key;
      }
    }
  }
};

// Test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
