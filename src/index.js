import { getMinutes } from "date-fns";

function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  const stringArr = string.split("");
  const reversedArr = stringArr.reverse();
  const rejoinedString = reversedArr.join("");
  return rejoinedString;
}

const calculator = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return Math.trunc(x / y);
  },
};

function caesarCipher(string, shiftFactor) {
  let stringArr = string.split("");
  stringArr = stringArr.map((char) => {
    // gets base from current char's charCode
    const base = char.charCodeAt(0) < 91 ? 65 : 97;

    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      const shiftedChar =
        ((char.charCodeAt(0) - base + shiftFactor) % 26) + base;

      return String.fromCharCode(shiftedChar);
    } else {
      return char;
    }
  });
  // console.log(`${stringArr}`);

  const rejoinedString = stringArr.join("");
  return rejoinedString;
}

function analyzeArray(arr) {
  const getAverage = () => {
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    return sum / arr.length;
  };

  const getMin = () => {
    const sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    return sortedArr[0];
  };

  const getMax = () => {
    const sortedArr = arr.sort(function (a, b) {
      return a - b;
    });
    return sortedArr[arr.length - 1];
  };

  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: arr.length,
  };
}

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
