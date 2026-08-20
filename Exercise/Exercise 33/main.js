// Exercise 3: Changing Content
// Task: Create a button that, when clicked, changes the text and HTML content of different elements on the page.
//  Implement the `changeContent` function as shown in the example.



// Solution

// Change Header
const header = document.querySelector('#header');
function changeHeader(){
    header.textContent = "My Name Mohamed Ibrahim Abdirahman";
};

// change Text
const text = document.querySelector('.text');
function changeParagraph(){
    text.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est minima nulla eos harum facere dolores neque? Iste impedit aliquam necessitatibus, et quos dignissimos consectetur vitae harum repellat! Dolore, minima ipsa!';
};