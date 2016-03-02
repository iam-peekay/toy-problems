/**
 * A prime number is a whole number that has no other
 * divisors other than itself and 1. Write a function
 * that accepts a number and returns true if it's
 * a prime number, false if it's not.
*/

function primeTester(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    return false;
  }
  if (n === 1) {
    return false;
  }

  var upperLimit = Math.sqrt(Math.abs(n));
  for (var i = 2; i < upperLimit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/* Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). Check out the Sieve
 * of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
*/

function primeSieve(start, end) {
  var current = 2;
  var primes = range(0, end + 1);
  while (current < end) {
    // mark all multiples of current as not prime
    for (var i = current + current; i <= end; i += current) {
      primes[i] = null;
    }
    // find the next current
    do {
      current += 1;
      // continue to advance it until we hit a prime number
      // or we are out of range.
    } while (!primes[current] && current <= end)
  }
  return primes.slice(2).filter(function(val) {
    return val && val >= start;
  });
}

var range = function (start, end) {
  var result = [];
  for (var i = start; i < end; i++) { result.push(i); }
  return result;
};
