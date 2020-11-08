//local storage

let val;
let hobies = ['a','b','c'];

//set item
const firstname = localStorage.setItem('firstname','Muhammed');
const lastname = localStorage.setItem('lastname','BK');

//get item
val = localStorage.getItem('firstname');
val = localStorage.getItem('lastname');

console.log(val);

//remove item
//localStorage.removeItem('firstname');

//clear item, to remove all items
localStorage.clear();

//set array to storage
localStorage.setItem('firstname','Muhammed');
localStorage.setItem('lastname','BK');
localStorage.setItem('hobies',JSON.stringify(hobies));//

val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);

console.log(localStorage);



//session storage

const city = sessionStorage.setItem('city','istanbul');
const country = sessionStorage.setItem('country','turkey');

//console.log(sessionStorage);