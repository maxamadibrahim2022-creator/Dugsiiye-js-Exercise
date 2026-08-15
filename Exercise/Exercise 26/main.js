                        // ### **Exercise: 
            // Blocking vs. Non-Blocking Code**
// - **Task:** Implement a simple blocking function that simulates a delay of 2 seconds before returning a message. Then, implement a non-blocking version of the same function using `setTimeout`.


                    // Solution One
// synchronous
console.log("synchronous Solution One 🔥🔥🔥✅✅✅✅")
function fetchUserDatasync(){
    alert ("ii sax Eng Exercise 26 ")
    return ("Hadda ayaa laguu saxayaa Eng")
}
console.log("Wali laguuma saxin Exercise 26 Eng")
const Teacher = fetchUserDatasync();
console.log(Teacher);




                    // Solution Two
// Asynchronous
console.log("Asynchronous Solution Two ✅✅✅✅🔥🔥✅")
function getUserData(callback){
    setTimeout(()=>{
        const student = ("mahadsanid Eng");
        callback(student);
    },4000)
}
getUserData(function(student){
    console.log(student);
});
console.log("waan kuu saxay Eng");

