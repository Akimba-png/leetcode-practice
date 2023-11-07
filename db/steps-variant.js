// Задача на числа Фибоначчи
// Поиск максимального кол-ва вариантов, с помощью которых можно достичь
// n-ой ступени
// При условии, что шагать можно по одной ступени или через одну
// (т.е. шагать на одну ступень или сразу на две)

// Ключевое понимание, что кол-во вариантов для n-ой ступени складывается из
// суммы вариантов из (n - 1) + (n - 2)
// Чтобы узнать кол-во вариантов n-ой ступени нужно знать кол-во вариантов для
// предыдущих двух, до них тоже нужно дошагать.
// до каждой следующей ступени можно добраться одним или двумя шагами
// с предыдущих

function findVar(n) {
  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}

const result = findVar(2);
console.log(result);
