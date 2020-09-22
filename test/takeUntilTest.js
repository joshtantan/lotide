const takeUntil = require("../takeUntil");
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const fn = x => x < 0;
    assert.deepEqual(takeUntil(data, fn), [1, 2, 5, 7, 2]);
  });
  it(`returns ["I've", "been", "to", "Hollywood"] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]`, () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const fn = x => x === ',';
    assert.deepEqual(takeUntil(data, fn), ["I've", "been", "to", "Hollywood"]);
  });
});
