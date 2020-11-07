//for loop
for(let i=1; i<10; i++){

    if(i %2 == 0){
        console.log(i + ' çift');
    }
    else{
        console.log(i + ' tek');
        
    }

}

//while
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//do-while

console.log("do while");

let j = 0;
do {
    console.log(j);
    j++;
}while(j == 10)


//using loops and arrays together

let cars = ['a','b','c']

//Classical For
for(let i=0; i < cars.length; i++){
    console.log(cars[i]);
}

//For In
for(let i in cars){
    console.log(`index : ${i} value: ${cars[i]}`);
}

//forEach
cars.forEach(function(item){
    console.log(item);
})

//map function

people = [
    {fn:'a',ln:'b'},
    {fn:'c',ln:'d'},
    {fn:'e',ln:'f'}
]

let val = people.map(function(item){
    return item.fn + '_' + item.ln;
});

console.log(val);