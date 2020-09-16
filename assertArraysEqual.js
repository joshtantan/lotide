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
    console.log(`✅ Assertion Passed: "${actualArr}" === "${expectedArr}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actualArr}" === "${expectedArr}"`);
  }
};

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);