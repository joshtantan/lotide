const findKey = (obj, callback) => {
  if (obj && callback) {
    for (const key in obj) {
      if (callback(obj[key])) {
        return key;
      }
    }
  }
};

module.exports = findKey;
