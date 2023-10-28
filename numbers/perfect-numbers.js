// Codewars Perfect Number Verifier
// A perfect number is a number in which the sum of its divisors
// (excluding itself) are equal to itself. Write a function that can verify if
// the given integer n is a perfect number, and return true if it is, or return
// false if not.

function isPerfect(n) {
  let count = 1;
  let sum = 0;
  const topCount = Math.ceil(Math.sqrt(n));
  while (count < topCount) {
    if (!(n % count)) {
      sum += count;
      if ((n / count) !== n) {
        sum += n / count;
      }
    }
    count++;
  }
  return sum === n;
}

// Все делители для числа n можно найти итерацией от 1 до корня из числа n
// (Math.ceil(Math.sqrt(n)) не включая его) и если при очередной итерации
// n делится число без остатка, то в результат можно добавить
// само число и n / count (если n / count !== n)
// сложность в этом случае получается O(Math.sqrt(n))
