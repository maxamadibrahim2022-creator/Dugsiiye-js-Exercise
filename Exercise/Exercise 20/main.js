                            // **Exercise:**
// 1. Use the `map()` method to create a new array that contains the lengths of each string in the array `["apple", "banana", "cherry"]`.


                            // Solution
const fruits = ["Apple", "Banana", "Cherry"];
const Newfruits = fruits.map((fruit) => fruit) ;
console.log("fruit name: " + Newfruits[0] + ", Index number: " + Newfruits[0].length);
console.log("fruit name: " + Newfruits[0] + ", Index number: " + Newfruits[1].length);
console.log("fruit name: " + Newfruits[0] + ", Index number: " + Newfruits[2].length);