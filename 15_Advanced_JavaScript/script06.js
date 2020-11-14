//Classes

//ES5

var PersonES5 = function(name,job,birthyear){
    this.name = name;
    this.job = job;
    this.birthyear = birthyear;
}

PersonES5.prototype.calculateAge = function(){
    return new Date().getFullYear() - this.birthyear;
}

var yigit = new PersonES5('yigit','student',2010);
console.log(yigit.calculateAge());

//ES6

class PersonES6{
    constructor(name,job,birthyear){
        this.name = name;
        this.job = job;
        this.birthyear = birthyear;
    }

    calculateAge(){
        return new Date().getFullYear() - this.birthyear;
    }

    static sayHi(){
        console.log('hello there');
    }
}

var emel = new PersonES6('emel','teacher',1990);
console.log(emel.calculateAge());

PersonES6.sayHi();

//console.log(emel.sayHi());

//Subclass

class CustomerES6 extends PersonES6{
    constructor(name,job,birthyear,phone,username){
        super(name,job,birthyear);
        this.phone = phone;
        this.username = username;
    }
}

let customer1 = new CustomerES6('volkan','engineer',1989,'12345','volkan_');

console.log(customer1.calculateAge());