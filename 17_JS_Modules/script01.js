const products = [
    {name:'samsumg s6',price:3000},
    {name:'samsumg s7',price:4000},
    {name:'samsumg s8',price:5000}
];

var ProductController = (function(data){

    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index >=0 ){
            collections.splice(index,1);
        }
    }

    const getProducts = function(){
        return collections;
    }

    //public members

    return {
        addProduct,
        removeProduct,
        getProducts
    }



})(products);



ProductController.addProduct( products[0] );
ProductController.addProduct( products[1] );

ProductController.removeProduct( products[1] );


ProductController.addProduct( products[2] );

console.log(ProductController.getProducts());

//Module Extending. This is like inheritance in JS.

var extended = (function(m){
    m.sayHello = function(){
        console.log('hello from extended module');
    }

    return m;
})(ProductController || {});

extended.sayHello();

console.log(extended.getProducts());
