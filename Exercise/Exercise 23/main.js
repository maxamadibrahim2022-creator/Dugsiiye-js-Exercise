                // **Exercise:**
// 1. Use object destructuring to extract the `make` and `model` properties from the object `{ make: "Toyota", model: "Corolla", year: 2020 }`.


                // solution
const card = { make: "Toyota", model: "Corolla", year: 2020 };
const {make, model} = card;
console.log(make);
console.log(model);