const findKey = require("../findKey");
const assert = require('chai').assert;

describe("#findKey", () => {
  it('returns "noma" for obj: {"Blue Hill": {stars: 1}, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": {stars: 3}, "Ora": {stars: 2}, "Akelarre": {stars: 3}} callback: x => x.stars === 2', () => {
    const starsDir = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const firstWith2StarsOnly = x => x.stars === 2;

    const expected = "noma";
    const actual = findKey(starsDir, firstWith2StarsOnly);
    assert.strictEqual(actual, expected);
  });
  it('returns "Blue Hill" for obj: {"Blue Hill": {stars: 1}, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": {stars: 3}, "Ora": {stars: 2}, "Akelarre": {stars: 3}} callback: x => x.stars === 1', () => {
    const starsDir = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const firstWith1StarOnly = x => x.stars === 1;

    const expected = "Blue Hill";
    const actual = findKey(starsDir, firstWith1StarOnly);
    assert.strictEqual(actual, expected);
  });
});


// // Test code
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma"); // => "noma"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1), "Blue Hill"); // => "Blue Hill"