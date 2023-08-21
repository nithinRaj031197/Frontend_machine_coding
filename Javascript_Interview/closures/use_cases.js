// 1. Encapsulation
function createCounter() {
  let count = 0; // Private variable

  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// In this example, the createCounter function encapsulates the count variable within its scope. The inner function (closure) can access and modify count, but it's not accessible from outside the closure.

// 2. Data Persistence:
function createEventHandler() {
  let clickCount = 0;

  return function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times.`);
  };
}

const buttonClickHandler = createEventHandler();
buttonClickHandler(); // Button clicked 1 times.
buttonClickHandler(); // Button clicked 2 times.
// Here, the closure retains the clickCount variable's state across multiple function calls, allowing you to persist data between calls.

// 3. Currying and Partial Application:
function createMultiplier(factor) {
  return function (number) {
    return factor * number;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
// This example demonstrates currying using closures. The createMultiplier function returns a closure that "bakes in" the specified factor for multiplication, creating specialized multiplier functions.

// 4. Module Patterns:
const Module = (function () {
  let privateData = "I'm private";

  function privateFunction() {
    console.log(privateData);
  }

  return {
    publicFunction: function () {
      privateFunction();
    },
  };
})();

Module.publicFunction(); // Outputs: "I'm private"
// Closures enable the creation of module patterns, where you encapsulate functionality within a closure to create a clean and organized structure.

// 5. Memoization:
function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("From Cache");
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

const expensiveFunction = function (x, y) {
  console.log("Calculating...");
  return x + y;
};

const memoizedExpensiveFunction = memoize(expensiveFunction);
console.log(memoizedExpensiveFunction(3, 5)); // Outputs: "Calculating..." 8
console.log(memoizedExpensiveFunction(3, 5)); // Outputs: "From Cache" 8
// This example showcases memoization using closures. The memoize function returns a closure that caches the results of expensive function calls based on their arguments.

// These examples illustrate how closures can be applied to different scenarios, providing solutions that leverage the power of closures in JavaScript.
