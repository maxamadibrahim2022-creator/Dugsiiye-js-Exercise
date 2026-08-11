
                            // **Exercise:**
// 1. Use the `reduce()` method to multiply all the numbers in the array `[1, 2, 3, 4, 5]` together.



                            // solution
const numbers = [1,2,3,4,5];
const multiply = numbers.reduce((Total , multiply) => Total * multiply, 1);
console.log(multiply);      // Output: 120.