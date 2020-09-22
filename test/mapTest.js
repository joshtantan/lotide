const map = require("../map");
const assert = require('chai').assert;

describe("#map", () => {
  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[0]);
    const expected = ["g", "c", "t", "m", "t"];
    assert.deepEqual(actual, expected);
  });
  it('returns ["d", "l", "o", "r", "m"] for ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[word.length - 1]);
    const expected = ['d', 'l', 'o', 'r', 'm'];
    assert.deepEqual(actual, expected);
  });
  it('returns ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"] for ["ground", "control", "to", "major", "tom"]', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word + word);
    const expected = ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"];
    assert.deepEqual(actual, expected);
  });
});
