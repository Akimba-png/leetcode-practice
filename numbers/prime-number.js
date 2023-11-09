// CodeWars Is a number prime?
// Define a function that takes an integer argument and returns
// a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number
// greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) { return false };
  let count = 2;
  const sqrt = Math.floor(Math.sqrt(num));
  while (count <= sqrt) {
    if (!(num % count)) { return false }
    count++;
    }
  return true;
}

// Prime number (простое число) число большее единицы, которое делится без
// остатка только на само себя и на единицу.
// Все числа, которые могут разделить исходное число без остатка, можем найти
// проитерировавшись от 2 (т.к. 1 уже исключили по условию) до квадратного
// корня из исходного числа включительно. Если хотябы одно из i делит число без
// остатка значит false
