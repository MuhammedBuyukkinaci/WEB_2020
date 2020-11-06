//if else
const age = 18;
const year = 2020

if(age == 18 || year > 2020){
    console.log("Condition accepted");
}
else{
    console.log("Condition Rejected");
}

if(age == 18 && year > 2020){
    console.log("Condition accepted");
}
else{
    console.log("Condition rejected");
}


//switch case

var category = 'telefon';

switch(category){
    case 'telefon':
        console.log('telefon');    
        break;

    case 'telefon':
        console.log('telefon');    
        break;

    default:
        console.log("Wrong case");
}

var day;

day = new Date().getDay();

console.log(day);


switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('haftaici');    
        break;

    case 0:
    case 6:
        console.log('haftasonu');    
        break;

    default:
        console.log("Wrong number");
}

var val = prompt("who is there?");
console.log(val);

//Object Literals

let person= {
    firstname: 'cinar',
    birthdate: 2000,
    lastname: 'cinar2'
}

console.log(new Date().getFullYear());

console.log(person);

console.log(person.firstname);

console.log(person['lastname']);
