//let names = [];

let names = ['a','b','c','d'];

let years = [1,2,3,5,[3,4],undefined,null];

//add
names.push('e');//add last
names.unshift('0');//add first

//remove
names.pop();//remove last
names.shift();//remove first

console.log(names);
console.log(typeof names);

console.log(years);
console.log(typeof years);

//Defining a function
function over18(year){
    let age = 2018 -year;
    return age >= 18;
}

console.log(over18(1988));

