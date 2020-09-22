const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it('returns {h: [0], e: [1], l: [2, 3], o: [4]} for "hello"', () => {
    const actual = letterPositions("hello");

    const expected = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    };

    assert.deepEqual(actual, expected);
  });
  it('returns {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]} for "lighthouse in the house"', () => {
    const actual = letterPositions("lighthouse in the house");

    const expected = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
      " ": [10, 13, 17]
    };

    assert.deepEqual(actual, expected);
  });
});
