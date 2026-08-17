// Exercise 3: Using Async/Await with Promises

// Task: Rewrite the function from Exercise 27 to use `async` and `await` 
// instead of `.then()` and `.catch()`. Ensure that the success message is 
// logged only after the data is fetched.


// Solution
function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const succes = true;
        if(succes){
            resolve({id:3, name:"maxamad"})
        }else{
            reject("data lama soo celin");
        }
        },100)
    })
}

async function displayUserData(){
    try{
        //success status
        const user = await getUserData();
        console.log(user)
    }catch(err){
        // error
        console.log(err)
    }
}
displayUserData();