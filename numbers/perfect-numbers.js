// Codewars Perfect Number Verifier
// A perfect number is a number in which the sum of its divisors
// (excluding itself) are equal to itself. Write a function that can verify if
// the given integer n is a perfect number, and return true if it is, or return
// false if not.

function isPerfect(n) {
  if (n === 1) { return false }
  let sum = 1;
  let count = 2;
  const sqrt = Math.floor(Math.sqrt(n));
  while (count <= sqrt) {
    if (!(n % count)) {
      sum += count;
      if ((n / count) !== count) {
        sum += (n / count);
      }
    }
    count++;
  }
  return n === sum;
}

const result = isPerfect(16);
console.log(result);

// Perfect number - число, сумма делителей которого (не включая само число)
// равна самому числу
// Делители (числа на которые число делится без остатка) можно получить
// проитерировавшись от 1 до квадратного корня из числа включительно
// Если число делится на текущее значение i без остатка то это 1-ый делитель,
// второй делитель это результат деления числа на i (если i делит число без
// остатка значит и обратное число будет делить число без остатка)
// При этом необходимо проверить, чтобы результат деления числа на i
// не равнялся i (чтобы исключить дублирование i в результате) такое может
// случиться н-р 16 / 4 = 4 (дублирование 4-ки)
// Сложность в этом случае O(Math.sqrt(n))
