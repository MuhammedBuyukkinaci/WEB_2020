function getTotal(a,b,c){
    return a + b + c;
}

console.log(getTotal(10,20,30));

let numbers = [10,20,30];

//ES5

console.log(getTotal.apply(null,numbers));

//ES6

console.log(getTotal(...numbers));

let arr1 = ['two','three'];
let arr2 = ['one','four','five'];

arr1.push(...arr2);
console.log(arr1);

arr1.unshift(...arr2);
console.log(arr1);

let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tags = [h1,...divs];

tags.forEach(tag => tag.style.backgroundColor = 'green');

console.log(tags);

//Desctructing

[a,b,c,...rest] = ['a','b','c','d','e','f','g'];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

//Maps: key/value pairs -- collections

let val;

const numbers_map = new Map();
//keys & values
numbers_map.set(1,'one');
numbers_map.set(2,'two');
numbers_map.set(3,'three');

val = numbers_map;

value_1 = numbers_map.get(1);

console.log(value_1);

for (var [key,value] of numbers_map){
    console.log(key + ' = ' + value);
}

for (var key of numbers_map.keys()){
    console.log( ' key = ' + key );
}

for (var value of numbers_map.values()){
    console.log( ' value = ' + value );
}

//sets --collections -- unique value

var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(1);//not added because it is also available

console.log(mySet);