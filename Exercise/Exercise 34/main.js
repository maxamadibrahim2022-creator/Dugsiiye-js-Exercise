// Exercise 4: Adding and Removing Elements
// Task: Create two buttons—one to add a new list item to a list and another to remove the last item from the list. 
// Implement the `addItem` and `removeItem` functions as shown in the example.



// Solution
const list = document.querySelector('#list')
function addList(){
    const newList = document.createElement('li')
    newList.textContent = 'cabdiraxmaan'
    list.appendChild(newList)
}

function  deleteList(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else{
        alert('Wax latiro malaha')
    }
    
}