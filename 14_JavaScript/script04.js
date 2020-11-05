//Date Object
let d = new Date();//Current Date

let birtday = new Date(1990,12,3);//Creating a date object, 3 Aralık 1990
let birtday2 = new Date(1991,12,3);//Creating a date object, 3 Aralık 1990

//let birtday2 = new Date('3/12/1990');//Creating a date object, 3 Aralık 1990

console.log(typeof birtday,typeof birtday2);

// console.log(birtday.getDate() , birtday2.getDate());
// console.log(birtday.getFullYear() , birtday2.getFullYear());
// console.log(birtday.getMonth() , birtday2.getMonth());

var ms = birtday2 - birtday;
var second = ms / 1000;
var dakika = second/60;
var saat = dakika / 60;
var gun = saat / 24;

// console.log("=============");
// console.log(ms);
// console.log(second);
// console.log(dakika);
// console.log(saat);
// console.log(gun);
// console.log("=============");

//console.log("milisecond" + );

//Set Methods

d.setFullYear(2010);
d.setMonth(5);
d.setHours(10);

//Get Methods

console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear() - birtday.getFullYear())
console.log(d.getMonth() - birtday.getMonth())
console.log(d.getDate() - birtday.getDate())


console.log(d);
console.log(typeof d);


///Numbers

var a = isNaN('20');
var b = isNaN('a20');

console.log(a);
console.log(b);

var c = Math.PI;
console.log(c);

///Strings

const fn = 'A';
const ln = "B";
const age = 35;

let val;

val = fn + ln

console.log(val);

val = fn + ln + age;

console.log(val);

val = 'ABCDEF';
val = val[1];
console.log(val);

//Replacing all same pattern in a string
var string = "elma armut kiraz elma nar";
console.log(string.replace(/elma/g,'karpuz'));
