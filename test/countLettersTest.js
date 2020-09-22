const countLetters = require("../countLetters");
const assert = require('chai').assert;

describe("#countLetters", () => {
  it('returns {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1, " ": 3} for "lighthouse in the house"', () => {
    const actual = countLetters("lighthouse in the house");

    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
      " ": 3
    };
    
    assert.deepEqual(actual, expected);
  });
});
