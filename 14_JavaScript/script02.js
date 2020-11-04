////Değişkenler
var age;
console.log(age);

age=20;
console.log(age);

var fullname="abc";
console.log(fullname);

fullname="def";
console.log(fullname);


//Değişken tanımlama kuralları
//Sayısal ifade ile başlayamaz.
//Boşluk olmaz
//Özel kodlar(for while) vs ile değişken ismi olmaz.

//Aşağıdakiler geçerli
var yas1;
var _yas2;
var $yas3;

//var ın muadilleri: let, const

////Değişken Tipleri
///Primitive types 

let a="abc";
console.log(typeof a);

let b=20;
console.log(typeof b);

let c=20.5;
console.log(typeof c);

let d=true;
console.log(typeof d);

//typeof'un null için object döndürmesi, JS'in bir bug'ı.
let e=null;
console.log(typeof e);

let f;
console.log(typeof f);

///Reference types(objects)

//Arrays
let names =['a','b','c'];
console.log(typeof names);

//Object
let cities ={'adana':'a','mersin':'b'};
console.log(typeof cities);

//Function
var CA = function(){
    return 0;
}

console.log(typeof CA)

////Tür dönüşümü

let num1 = 5;
let num2 = 10;

console.log(num1 + num2);

num1 = String(num1)
num2 = String(num2)

console.log(num1 + num2);

num1 = Number(num1)
num2 = Number(num2)

console.log(num1 + num2);

let current_date = new Date().getFullYear();
console.log(current_date);
