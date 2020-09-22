const takeUntil = function(arr, callback) {
  const results = [];

  for (let item of arr) {
    if (callback(item)) {
      break;
    }

    results.push(item);
  }

  return results;
};

module.exports = takeUntil;
