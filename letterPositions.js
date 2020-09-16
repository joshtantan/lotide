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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

// Test code
let testResults = letterPositions("hello");

assertArraysEqual(testResults["h"], [0], true);
assertArraysEqual(testResults["e"], [1], true);
assertArraysEqual(testResults["l"], [2, 3], true);
assertArraysEqual(testResults["o"], [4], true);

testResults = letterPositions("lighthouse in the house");

assertArraysEqual(testResults["l"], [0], true);
assertArraysEqual(testResults["i"], [1, 11], true);
assertArraysEqual(testResults["g"], [2], true);
assertArraysEqual(testResults["h"], [3, 5, 15, 18], true);
assertArraysEqual(testResults["t"], [4, 14], true);
assertArraysEqual(testResults["o"], [6, 19], true);
assertArraysEqual(testResults["u"], [7, 20], true);
assertArraysEqual(testResults["s"], [8, 21], true);
assertArraysEqual(testResults["e"], [9, 16, 22], true);
assertArraysEqual(testResults["n"], [12], true);
