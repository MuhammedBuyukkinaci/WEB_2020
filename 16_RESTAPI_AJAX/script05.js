//Callback

var products = [
    {id:1, name: 'Samsung S8',price: 3000},
    {id:2, name: 'Samsung S7',price: 2000},
    {id:3, name: 'Samsung S6',price: 1000}
]



function addProduct(prd,callback){
    setTimeout( () =>{
        products.push(prd);
        callback();
    } ,2000)
}

function getProducts(){
    setTimeout( () =>{
        products.forEach(p => {
            console.log(p.name);
        });
    } ,1000)
}

addProduct({ id:4, name: 'Samsung S5',price: 500},getProducts);

//getProducts();


//Promise

var p = new Promise(function(resolve,reject){
    if(true){
        resolve('success');
    }else{
        reject('Failed');
    }
})

p.then(function(data){
    console.log(data);
}).catch(function(errror){
    console.log(error);
})


//Promise 2nd example

new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
})

//Promise 3rd example

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve,reject) =>{

    if(isMomHappy){
        const phone = {
            name: 'iphone 8',
            price:4000,
            color: 'silver'
        }

        resolve(phone);
    }else{
        const error = new Error('mom is not happy');
        reject(error);
    }

});

const showtoFriends = function(phone){
    const message = "my new phone: " + phone.name;
    return Promise.resolve(message);
}

const askMom = function(){
    willGetNewPhone.then(showtoFriends).then(message => console.log(message)).catch(error =>{
        console.log(error);
    })
}

askMom();

