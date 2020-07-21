function addToDo() {

    var a = document.getElementById('text-box').value;
    if(a == '') {
        setErrorMessage('Please Enter Something!!!!');
    }

    var newItem = document.createElement('li');
    newItem.innerHTML = a;

    var crossButton = document.createElement('button');
    crossButton.innerText = 'X';
    newItem.appendChild(crossButton);
    
    var list = document.getElementById('list');
    list.appendChild(newItem);

    document.getElementById('text-box').value = ''; 
}

function closeList() {
    var newList = document.getElementById("list");
    newList.removeChild(newList.childNodes[0]);
  }