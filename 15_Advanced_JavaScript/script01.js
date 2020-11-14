//Defining constructors

// function Person(name,birthday,job){
//     this.name = name;
//     this.birthday = birthday;
//     this.job = job;
//     this.calculated_age = function(){
//         return 2020 - this.birthday;
//     }
// }

let Person = function(name,birthday,job){
    this.name = name;
    this.birthday = birthday;
    this.job = job;
    this.calculated_age = function(){
        return 2020 - this.birthday;
    }
}


let ogrenci = new Person('Ali',1990,'doctor');

console.log(ogrenci.name);
console.log(ogrenci.calculated_age());

//Prototype & Inheritance

let Individual = function(name,birthday,job){
    this.name = name;
    this.birthday = birthday;
    this.job = job;
    
}

Individual.prototype.calculated_age = function(){
    return 2020 - this.birthday;
}

Individual.prototype.getname = function(){
    return this.name;
}


let individual = new Individual('Veli',2000,'engineer');

console.log(individual.name);
console.log(individual.calculated_age());
console.log(individual.getname());
console.log(individual.hasOwnProperty('name'));

//Object.craete

let personProto = {
    calculate_age: function(){
        return 2018 - this.birthday;
    }
}

let yigit = Object.create(personProto);
yigit.name = 'yigit';
yigit.birthday = 2010;
yigit.job = 'student';

console.log(yigit);

console.log(yigit.calculate_age());

let temel = Object.create(personProto,
    {name : {value:'emel'},
    birthday: {value: 1989},
    job: {value: 'teacher'}}
    );


//Prorotypal Inheritance

let Member = function(name,birthyear,job){
    this.name = name;
    this.birthyear = birthyear;
    this.job = job;
}

Member.prototype.calculate_age = function(){
    return new Date().getFullYear() - this.birthyear
}

let Teacher = function(name,birthyear,job,subject){
    Member.call(this,name,birthyear,job);
    this.subject = subject;
}


//Inherit the person prototype methods from Member
Teacher.prototype = Object.create(Member.prototype);
//Set teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function(){
    return "greetings to you " + this.name;
}

console.log(Teacher.prototype.constructor);

let hakan = new Teacher('hakan',1990,'teacher','history');


console.log(hakan);
console.log(hakan.calculate_age());

//Built in constructors

var str1 = 'Sadik';
var str2 = new String('Sadik');

var arr = new Array('a','b','c');

Array.prototype.remove = Array.prototype.remove || function(member){
    var index = this.indexOf(member);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}
console.log(arr.remove('c'));

//Sending functions to Arguments, Callback

function MultiplyByTwo(a,b,c,callback){
    let arr = [];
    if( callback && typeof callback === 'function'){

    for(let i=0; i <3; i++){
        arr[i] = callback(arguments[i]*2);
    }
    }   
    return arr;
}

function addOne(a){
    return a + 1;
}

console.log(MultiplyByTwo(3,4,5,addOne));

// Immediate Functions

// function welcome(){
//     var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
//     var today = new Date();

//     var msg = 'Welcome. Today is ' + days[today.getDay()];
//     return msg;

// }

// (funtion()
// ());

// console.log(welcome());



//Functions returning funtions

function Question(hobby){
    switch(hobby){

        case 'car':
            return function(name){
                console.log(name + ' do you have a car?');
            }
            break;
        case 'book':
            return function(name){
                console.log(name + ' what is your favorite book?');
            }
            break;
        case 'software':
            return function(name){
                console.log(name + ' are you interested in JS?');
            }
            break;
    
        default:
            return function(name){
                console.log(name + ' how you doing?');
            }
    }
}

var carQuestion = Question('car');

carQuestion('Ahmet');

//Getters & Setters



// Call Apply Bind
var welcome = function(){
    console.log("Welcome " + this.name);
}

var veli = {name:'veli'};
welcome.call(veli);
welcome.apply(veli);

welcomeveli = welcome.bind(veli);
welcomeveli();

