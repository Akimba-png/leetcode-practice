// LeetCode Plus One
// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in
// left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function addOne (digits) {
  const initString = digits.join('');
  const number = BigInt(initString) + BigInt(1);
  const resultString = number.toString();
  return resultString.split('');
};

const result = addOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
console.log(result);

// Максимальное число в js 9.007.199.254.740.991
// 9 * 10 (в пятнадцатой степени)
// Для операций над числами выше этого числа следует использовать BigInt
