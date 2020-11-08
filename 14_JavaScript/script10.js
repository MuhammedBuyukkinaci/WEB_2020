//Event Listeners

const btn = document.querySelector('#li1')

btn.addEventListener('click',function(e){
    let val;
    val = e;
    val = e.target;
    console.log(val);
    console.log("btn clicked");
    e.preventDefault();
})

const btn2 = document.querySelector('#li2')

btn2.addEventListener('mouseover',btnclick)

function btnclick(){
    console.log("btn mouseover");
    let val2 = document.getElementById('li2');
    val2.classList.add("text-uppercase");
}

const btn3 = document.querySelector('#li3')
const btn4 = document.querySelector('#li4')
const ul = document.querySelector('#id_ul')
const h1 = document.querySelector('h1');

function eventhandler(event){
    console.log(`event type: ${event.type}`);
    h1.textContent = `Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;
    
}

btn3.addEventListener('click',eventhandler);

btn4.addEventListener('dblclick',eventhandler);

// btn4.addEventListener('mousedown',eventhandler);
// btn4.addEventListener('mouseup',eventhandler);

// ul.addEventListener('mouseenter',eventhandler);
// ul.addEventListener('mouseleave',eventhandler);
// ul.addEventListener('mouseover',eventhandler);
// ul.addEventListener('mouseout',eventhandler);


ul.addEventListener('mousemove',eventhandler)

//Keyboard Events


