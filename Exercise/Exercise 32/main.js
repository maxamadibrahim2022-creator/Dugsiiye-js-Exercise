//Exercise 2: Selecting Elements
//Task: Use `querySelector` and `querySelectorAll` to select elements from an HTML structure of your choice. 
// Log the selected elements to the console to verify the selections.



// solution

// getElementsByTagName 
const tag = document.getElementsByTagName('h1');
console.log(tag);
// getElementById
const id = document.getElementById('about');
console.log(id);
// getElementsByClassName
const classname = document.getElementsByClassName('text');
console.log(classname);

// Eng exercise 32 intaan hoos ku qoran ayaa quseesa , intaa kore marka aan qoray ayaan arkat in aan loo baahneen.
//  marka halkeeda ha iska yaalaano


// querySelector
const selector = document.querySelector('#about');
console.log(selector)
// querySelectorAll
const All = document.querySelectorAll('p')[0];
console.log(All);