//Function decleration
function yashesapla(item){
    return 2018 - item;
}

let val = yashesapla(1945);
console.log('Yas ' + val);

//function expression
const sum = function(a,b){
    return a + b;
}
console.log(sum(10,20));


//arguments ile fonksyiona gönreilen argument'lara ulaşma
function sumall(){
    let calculated = 0
    for(let i =0; i < arguments.length;i++){
        calculated += arguments[i];
    }
    return calculated;
}

console.log(sumall(10,20,30,50));

//window object

//open with live server

console.log(window.scrollX);
console.log(window.scrollY);
console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.host);
console.log(window.location.protocol);
console.log(window.location.protocol);

//window.location.href = 'https://muhammedbuyukkinaci.com';

//window.location.reload();

//Scopes


