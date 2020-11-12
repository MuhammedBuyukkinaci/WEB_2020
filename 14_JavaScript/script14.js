//UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//const items = ['item01','item02','item03'];

let items;

//Load items

loadItems();


//call event listener
eventListeners();

function eventListeners(){
    //submit event
    form.addEventListener('submit',addNewItem);

    // delete an item
    taskList.addEventListener('click',deleteItem);

    //deleteall
    btnDeleteAll.addEventListener('click',deleteAllItems);
};

function loadItems(){

    //Getting elements from Local Storage
    items = getItemsfromLS();

    items.forEach(function(item){
        createItem(item);
    })
}

//get items from local storage
function getItemsfromLS(){
    if(localStorage.getItem('items') === null){
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

//set items to LS

function setItemsToLS(text){
    items = getItemsfromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

//delete item from LS
function deleteItemFromLS(text){
    items = getItemsfromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
        
    });

    localStorage.setItem('items',JSON.stringify(items))

}

function createItem(text){
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class = "fas fa-times"> </i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);
}

//add new item
function addNewItem(e){
    //console.log(input.value);
    if(input.value ===''){
        alert('add new item');
    }

    //crateitem
    createItem(input.value);

    //save to LS;
    setItemsToLS(input.value);
    

    //clear input
    input.value = '';

    //console.log(li);


    e.preventDefault();
};

//delete an item
function deleteItem(e){

    if(e.target.className ==='fas fa-times'){
        if (confirm("are you sure")){
            e.target.parentElement.parentElement.remove();

            //delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);

            }
        }

    
    e.preventDefault();
}

function deleteAllItems(e){

    if(confirm("are you sure")){
    //taskList.innerHTML = '';
    // taskList.childNodes.forEach(function(item){
    //     if(item.nodeType === 1 ){
    //         //console.log(item);
    //         item.remove();
    //     }
    // } ) ;

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();

    } 


    e.preventDefault();
}