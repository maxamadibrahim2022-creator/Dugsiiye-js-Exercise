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