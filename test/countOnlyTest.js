const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe("#countOnly", () => {
  it('returns {Jason: 1, Fang: 2} for allItems: ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] and itemsToCount: {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
  
    const theseFirstNamesOnly = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};
    const actual = countOnly(firstNames, theseFirstNamesOnly);
    const expected = {Jason: 1, Fang: 2};
    
    assert.deepEqual(actual, expected);
  });
});
