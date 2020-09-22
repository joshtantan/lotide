const middle = function(array) {
  let midArr = [];
  const arrLength = array.length;

  if (arrLength > 2) {
    if (arrLength % 2 === 0) {
      let midLowIndex = (arrLength / 2) - 1;
      midArr.push(array[midLowIndex]);

      let midHighIndex = ++midLowIndex;
      midArr.push(array[midHighIndex]);
    } else {
      let midIndex = Math.ceil(arrLength / 2) - 1;
      midArr.push(array[midIndex]);
    }
  }
  
  return midArr;
};

module.exports = middle;
