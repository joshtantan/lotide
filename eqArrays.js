const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let i = 0;

    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }

      i++;
    }
    
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
