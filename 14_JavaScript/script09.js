let val;

val = window.document;
val = document.all;

val = document.URL;
val = document.title;
val = document.forms;
val = document.images;
val = document.anchors;
val = document.head;
val = document.body;
val = document.domain;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

//document.getElementById('some_name');

//Single Element

val = document.getElementById('id_h1');//Returns HTMLCollection
console.log(val);

// val = document.getElementById('id_h1').className;
// console.log(val);

val.style.fontSize = '80px';
val.style.color = 'blue';

document.getElementById('id_h1').innerText = 'Changed HTML';
document.getElementById('id_h1').innerHTML = '<i>Changed HTML</i>';

console.log(document.querySelector('#header'));
console.log(document.querySelector('.bg-primary'));
console.log(document.querySelector('ul'));


//Multiple Elements

// class name
// document.getElementsByClassName();

val = document.getElementsByClassName('bg-primary');
console.log(val);

//documents.getElementsByTagName;

val = document.getElementsByTagName('li');
console.log(val);

val = document.querySelectorAll('a');
console.log(val);//returns nodelist. we are capable of using forEach on val

//DOM objeleri üzerinde gezinme

val = document.getElementById('id_h1');
console.log(val.childNodes);
console.log(val.children);

//Element Silme

const tasklist = document.querySelector('#id_h1');

console.log(tasklist);

tasklist.remove();

let removed_item = document.querySelector('#li4');

console.log(removed_item);

removed_item.remove();

removed_item = document.querySelector('#id_ul');

removed_item.children[1].remove();

//Removing Attribute from an element

removed_item = document.querySelector('#id_ul');

removed_item.children[6].removeAttribute('class');

//Replacing elements

// const cardheader = document.querySelector('.bg-info');

// const h3 = document.createElement('h3');
// h3.setAttribute('class','cardheader');
// h3.appendChild(document.createTextNode('New h3 Element'));
// const parent = document.querySelector('.text-center');
// parent.replaceChild(h3,cardheader)

//Adding Element

const li = document.createElement('li');

li.className = 'list-group-item bg-danger mt-2';
li.setAttribute('title','newly added li');

const text = document.createTextNode('text of new item');

li.appendChild(text);

console.log(li);

const a = document.createElement('a');
a.setAttribute('href','#');
a.className = 'delete-item float-right';
a.innerHTML = '<i class = "fas fa-times">';
//append a to li
li.appendChild(a);
//append li to ul
document.querySelector('#id_ul').appendChild(li);


