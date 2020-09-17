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

const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }

    results.push(item);
  }

  return results;
};

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2], true);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"], true);