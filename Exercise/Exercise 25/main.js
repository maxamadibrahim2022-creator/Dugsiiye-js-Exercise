//                 **Exercise:**
// 1. Use the spread operator to combine two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
// 2. Create a function `multiply` that takes any number of arguments and returns their product using the rest parameter.




                    // Solution One: spread oparetor
const numbers =  [1,2,3];
const allNumbers = [...numbers, 4,5,6];
console.log(allNumbers);


                    // Solution Two: rest oparetor
function multiply (...number){
    return number.reduce((total, multiply) => total * multiply, 1);
}
console.log(multiply(2,2,3));