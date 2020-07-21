function addToDo() {

    var a = document.getElementById('text-box').value;
    if(a == '') {
        setErrorMessage('Please Enter Something!!!!');
    }

    var newItem = document.createElement('li');
    newItem.innerHTML = a;

    newItem.className += "listItem";

    var crossButton = document.createElement('button');
    crossButton.innerText = 'X';
    newItem.appendChild(crossButton);

    var close = document.getElementById();
    close.parentNode.removeChild(crossButton);

   crossButton.className += "closeButton";
    
    var list = document.getElementById('list');
    list.appendChild(newItem);

    document.getElementById('text-box').value = ''; 
}
