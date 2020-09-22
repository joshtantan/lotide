const without = require("../without");
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it('returns [2, 3] for inputArr: [1, 2, 3] removeArr: [1]', () => {
    const data = [1, 2, 3];
    const remove = [1];
    assert.deepEqual(without(data, remove), [2, 3]);
  });
  it(`returns ["1", "2"] for inputArr: ["1", "2"] removeArr: [1, 2, "3"]`, () => {
    const data = ["1", "2"];
    const remove = [1, 2, "3"];
    assert.deepEqual(without(data, remove), ["1", "2"]);
  });
  it(`returns ["hello", "world"] for inputArr: ["hello", "world", "lighthouse"] removeArr: ["lighthouse"]`, () => {
    const data = ["hello", "world", "lighthouse"];
    const remove = ["lighthouse"];
    assert.deepEqual(without(data, remove), ["hello", "world"]);
  });
});
