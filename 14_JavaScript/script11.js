//Keyboard events

const input = document.querySelector('#search_here');

// input.addEventListener('keydown',eventhandler);
// input.addEventListener('keyup',eventhandler);
// input.addEventListener('keypress',eventhandler);

// input.addEventListener('focus',eventhandler);
// input.addEventListener('blur',eventhandler);
// input.addEventListener('cut',eventhandler);
input.addEventListener('paste',eventhandler);

function eventhandler(e){
    console.log(`'event type ${e.type}` );
    // console.log('key code:' + e.keycode);
    // console.log('value: ' + e.target.value);

    //e.target.style.backgroundColor = 'red';

    e.preventDefault();

}

const form = document.querySelector('form');

form.addEventListener('submit',eventhandler)

