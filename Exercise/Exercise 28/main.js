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