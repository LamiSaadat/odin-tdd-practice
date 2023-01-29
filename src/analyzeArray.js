const analyzeArray = (array) => {
  if (!isValidArray(array)) {
    return "Not an array";
  } else {
    let sumOfArr = array.reduce((a, b) => a + b, 0);

    let length = array.length;

    let average = sumOfArr / length;

    let min = Math.min(...array);

    let max = Math.max(...array);

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return analyzedArray;
  }
};

const isValidArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = analyzeArray;
