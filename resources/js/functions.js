//Conditions for input to be added to list or return error
function conditions(val, item, err) {
    if (val) {
        addItemTodo(val);
        item.value='';
    } else {
        err();
    }
}

//Error message if input is not valid
let error = function() {
    alert('Please input something into the field');
}

//Remove button to remove item from list
function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;

    parent.removeChild(item);
}

//Complete button moves item to completed list
function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;

    let target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

//Adds new item to list
function addItemTodo(text) {
    let list = document.getElementById('todo');

    let item = document.createElement('li');
    item.innerText = text;
    
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

//Add click event for removing item
    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    //Add click event for completing item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}