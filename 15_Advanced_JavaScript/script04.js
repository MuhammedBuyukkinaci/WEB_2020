
//Arrow Functions
//ES5

let welcomeES5 = function(){
    console.log('Hello from ES5');
}

welcomeES5();

let welcomeES6 =() => {
    console.log('Hello from ES6');
}

welcomeES6();


let multiplyES5 = function(x,y){
    return x*y;
}

console.log( multiplyES5(10,5));


// let multiplyES6 = (x,y) => {
//     return x*y;
// }

let multiplyES6 = (x,y) => x*y;


console.log( multiplyES6(3,5));

// ES5
let splitES5 = function(text){
    return text.split(' ');
}

console.log(splitES5("Modern JS Kursu"));

// ES6
let splitES6 = text => text.split(' ');

console.log(splitES5("Modern JS Kursu 2"));


let getproductES5 = function(id,name){
    return {id:id,name:name};
}

console.log(getproductES5('1','telefon'));

let getproductES6 = (id,name) => {
    return {id:id,name:name};
}

console.log(getproductES5('2','fax'));

const phones = [
    {name:'iphone 8',price: 3000},
    {name:'iphone 7',price: 2000},
    {name:'iphone 6',price: 1000},
    {name:'iphone 5',price: 500}
]

//ES5 
let pricesES5 = phones.map(function(phone){
    return phone.price/8;
})

console.log(pricesES5);

//ES6

let pricesES6 = phones.map(phone => phone.price/8);

console.log(pricesES6);

//ES5

const arr = [2,3,4,5,6,7,8,9,20,33,60];

let eventES5 = arr.filter(function(a){
    return a%2 ==0;
})
console.log(eventES5);

let eventES6 = arr.filter(a => a%2 ==0);

console.log(eventES6);

//this keyword

//ES5
let mylist_ES5 = {
    category : 'phone',
    names : ['iphone','htc','huawei'],
    call : function(){
        var self = this;
        this.names.map(function(name){
            console.log(`${self.category} + ${name}`);
        })
    }
}

mylist_ES5.call();

console.log("============");

//ES6
let mylist_ES6 = {
    category : 'phone',
    names : ['iphone','htc','huawei'],
    call : function(){
        this.names.map((name) => {
            console.log(`${this.category} + ${name}`);
        })
    }
}

mylist_ES6.call();


//ES5: 

// function Game(){
//     this.live = 0;
//     this.addlive = function(){
//         this.oneup = setInterval(function(){
//             console.log(++this.live);
//         },1000)
//     }
// }
