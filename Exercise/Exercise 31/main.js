// Exercise : Making HTTP GET Requests
// Task: Write a function that makes a GET request to fetch a list of users from an API using the fetch API. 
// Log the response data, and handle any errors that occur.


// Instructions:
// Use the fetch API to make a GET request to https://jsonplaceholder.typicode.com/users.
// Log the list of users to the console.
// Handle any errors by logging them to the console.


// Solution
async function getData(){
    try{
        // Get Request users
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log("User Response: ",response);
        // !Response.ok (404)
        if(!response.ok){
            throw new Error (`HTTP error! status: ${response.status}`);
        }else{
            // Response to json Data
            const data = await response.json();
            console.log("User Data: ",data);
        }
    }catch (error){
        console.log(error);
    }
}
getData();