// Exercise 1: Implementing Your Own Callbacks

// Task: Expand on the example provided. Implement two more callback functions: 
// `multiply` and `divide`. 
// Use the `operate` function to perform these operations on two numbers.

// Requirements:
// 1. Create a `multiply` function that takes two numbers and returns their product.
// 2. Create a `divide` function that takes two numbers and returns their quotient.
// 3. Use the `operate` function to perform multiplication and division,
//  logging the results to the console.



// Solution:
function operate(a, b, callback){
    return callback(a, b);
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

console.log("multiply: ", operate(4, 5, multiply))
console.log("divide: ", operate(21 , 3, divide));