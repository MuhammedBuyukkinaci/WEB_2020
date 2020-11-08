//Event Bubbling
const ul = document.querySelector('#id_ul');
const div = document.querySelector('#div01');
const li = document.querySelector('#li1')
const a = document.querySelector('#a01')


// ul.addEventListener('click',function(e){
//     console.log('ul');
// });

// div.addEventListener('click',function(e){
//     console.log('div');
// });

// li.addEventListener('click',function(e){
//     console.log('li');
//     e.stopPropagation();
// });

// a.addEventListener('click',function(e){
//     console.log('a');
// });

//Event Capturing

ul.addEventListener('click',function(e){
    console.log('ul');
},true);

div.addEventListener('click',function(e){
    console.log('div');
},true);

li.addEventListener('click',function(e){
    console.log('li');
    e.stopPropagation();
},true);

a.addEventListener('click',function(e){
    console.log('a');
},true);
