// Exercise : Fetching JSON Data from a File

// Simulate fetching JSON data from a file by creating a function that returns a Promise resolving to a JSON object after a 
// delay. Use `fetch` to simulate this behavior, and parse the JSON data to a JavaScript object. Ensure that other code can run
//  while waiting for the JSON data to be fetched.



// Solution
async function fetchData(){
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
}
fetchData();