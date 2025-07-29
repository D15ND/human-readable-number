module.exports = function toReadable(number) {
  const numStr = number.toString();
  const len = numStr.length;
  let result = '';

  const numObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (len === 1) {
    result = numObj[numStr];
  } else if (len === 2) {
    if (numStr in numObj) {
      result = numObj[numStr];
    } else {
      const first = numStr[0] + 0;
      const second = numStr[1];
      result = `${numObj[first]} ${numObj[second]}`;
    }
  } else if (len === 3) {
    if (numStr.slice(1, 3) in numObj) {
      const first = numStr[0];
      const second = numStr.slice(1, 3);
      result = `${numObj[first]} hundred ${numObj[second]}`;
    } else if (numStr[2] === '0') {
      const first = numStr[0];
      result = `${numObj[first]} hundred`;
    } else if (numStr[1] === '0') {
      const first = numStr[0];
      const second = numStr[2];
      result = `${numObj[first]} hundred ${numObj[second]}`;
      console.log(result);
    } else {
      const first = numStr[0];
      const second = numStr[1] + 0;
      const third = numStr[2];
      result = `${numObj[first]} hundred ${numObj[second]} ${numObj[third]}`;
    }
  }
  return result;
};
