const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it('returns "drama" for obj: {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"} val: "The Wire"', () => {
    const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
    };

    const expected = "drama";
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(actual, expected);
  });
  it('returns undefined for obj: {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"} val: "That \'70s Show"', () => {
    const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
    };

    const expected = undefined;
    const actual = findKeyByValue(bestTVShowsByGenre);
    assert.strictEqual(actual, expected);
  });
});

// // Test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);