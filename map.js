const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let i = 0;

    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Return false with arr1[${i}]: ${arr1[i]} and arr2[${i}]: ${arr2[i]}`);
        return false;
      }

      i++;
    }
    
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actualArr, expectedArr, expectedResult) {
  if (eqArrays(actualArr, expectedArr) === expectedResult) {
    console.log(`✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actualArr} === ${expectedArr}`);
  }
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// Test code
const words = ["ground", "control", "to", "major", "tom"];

let results = map(words, word => word[0]);
assertArraysEqual(results, ['g', 'c', 't', 'm', 't'], true);

results = map(words, word => word[word.length - 1]);
assertArraysEqual(results, ['d', 'l', 'o', 'r', 'm'], true);

results = map(words, word => word + word);
assertArraysEqual(results, ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"], true);

module.exports = map;
