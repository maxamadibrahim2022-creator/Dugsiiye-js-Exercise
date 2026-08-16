                // Exercise : Creating and Using Promises
// Task: Create a function that returns a Promise, which resolves after a 2-second delay with a success message. 
// Handle the Promise using .then() to log the success message, and add a .catch() block to handle any potential errors.



                        // Solutioncle
function getUserData() {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve({ id: 1, name: "cumar" });
      } else {
        reject("wax data ah lama soo helin");
      }
    },1000);
  });
}

getUserData()
    .then((data) => console.log("Use Data", data))
    .catch((err) => console.log(err));
