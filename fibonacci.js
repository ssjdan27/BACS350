const prompt = require("prompt-sync")();
const goldenRatio = 1.618033988749895;

function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const n = parseInt(prompt("Enter the number of terms: "), 10);
if (isNaN(n) || n < 0) {
  console.log("Please enter a non-negative integer.");
} else {
  const fibNumbers = [];
  for (let i = 0; i < n; i++) {
    fibNumbers.push(fibonacci(i));
  }

  console.log("Fibonacci sequence:");
  fibNumbers.forEach(function (element) {
    console.log(element);
  });

  console.log();

  fibNumbers.forEach(function (_, index) {
    if (index > 0) {
      const ratio = fibNumbers[index] / fibNumbers[index - 1];
      const difference = Math.abs(ratio - goldenRatio);
      console.log(
        `Ratio of F(${index})/F(${index - 1}) = ${ratio.toFixed(
          10
        )} (Difference from golden ratio: ${difference.toFixed(10)})`
      );
    }
  });
}
