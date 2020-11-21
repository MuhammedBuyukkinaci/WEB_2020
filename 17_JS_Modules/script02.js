// Storage Controller

const StorageController = (function(){

    return {
        storeProduct: function(product){
            let products;
            if(localStorage.getItem('products') ===null){
                products = [];
                products.push(product);
            }else{
                products = JSON.parse( localStorage.getItem('products') );
                products.push(product);
            }
            localStorage.setItem('products',JSON.stringify(products));
        },
        getProducts: function(){
            let products;
            if(localStorage.getItem('products') == null ){
                products = [];
            } else{
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        },
        updateProduct: function(){
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function(prd,index){
                if(product.id == prd.id){
                    products.splice(index,1,product);
                }
            });

            localStorage.setItem('products',JSON.stringify(products));
        },
        deleteProduct: function(id){

            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function(prd,index){
                if(id == prd.id){
                    products.splice(index,1);
                }
            });

            localStorage.setItem('products',JSON.stringify(products));
        }
    }
    
})();

// Product Controller

const ProductController = (function(){

    //private

    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        //products: [],
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice:0
    }

    //public

    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        },
        getProductById: function(id){
            let product = null;

            data.products.forEach(function(prd){
                if(prd.id == id){
                    product = prd;
                }
            })

            return product;
        },
        setCurrentProduct : function(product){
            data.selectedProduct = product;

        },
        getCurrentProduct: function(){
            return data.selectedProduct;
        },
        addProduct: function(name,price){
            let id;

            if(data.products.length >0){
                id = data.products[data.products.length-1].id + 1;
            }else{
                id = 0;
            }

            const newProduct = new Product(id,name, parseFloat(price) );

            data.products.push(newProduct);

            return newProduct;

            },

        updateProduct: function(name,price){

            let product = null;

            data.products.forEach( function(prd){
                if(prd.id == data.selectedProduct.id){
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            } )

            return product;

        },

        deleteProduct: function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id);
                data.products.splice(index,1);
            })
        },

        getTotal: function(){
            let total = 0;

            data.products.forEach(function(item){
                total += item.price;
            })

            data.totalPrice = total;
            return data.totalPrice;

        }

        }
    }



 )();

// UI controller

const UIController = (function(){

    const Selectors = {
        productList: "#item-list",
        productListItems: "#item-list tr",
        addButton: '.addBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard : '#productCard',
        totalTL: '#total-tl',
        totalDolar: '#total-dolar',
        updateButton:'.updateBtn',
        cancelButton: '.cancelBtn',
        deleteButton: '.deleteBtn',
    }

    return {
        createProductList: function(products){
            let html = ``;

            products.forEach(prd =>{
                html += `
                <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>
                        <td class="text-right">
                            <i class="far fa-edit edit-product">
                            </i>
                        </td>
                </tr>
                `
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },

        getSelectors: function(){
            return Selectors;
        },

        
        addProduct : function(prd){

            document.querySelector(Selectors.productCard).style.display = 'block';

            var item = `
            <tr>
                <td>${prd.id}</td>
                <td>${prd.name}</td>
                <td>${prd.price} $</td>
                <td class="text-right">
                    <i class="far fa-edit edit-product">
                    </i>
                </td>
            </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item; 
        },

        updateProduct: function(prd){
            let updatedItem =null;

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item;

                }
            });

            return updatedItem;
        },


        clearInputs: function(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },

        clearWarnings: function(){
            const items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.classList.remove('bg-warning');
                }
            });
        },

        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total*4.5;

        },
        addProductToForm: function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },

        deleteProduct: function(){
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.remove();
                }
            });
        },

        addingState : function(item){

            UIController.clearWarnings();

            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.updateButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';

        },
        editState : function(tr){

            tr.classList.add('bg-warning');
            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.updateButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';
        }

       

    }


})();


// App controller

const App = (function(ProductCtrl, UICtrl,StorageCtrl){

    const UISelectors = UICtrl.getSelectors();

    //Load evebt listeners
    const loadEventListeners = function(){
        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit);

        //edit product click

        document.querySelector(UISelectors.productList).addEventListener('click',productEditClick);

        //edit product submit

        document.querySelector(UISelectors.updateButton).addEventListener('click',editProductSubmit);

        //cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener('click',cancelUpdate);

        document.querySelector(UISelectors.deleteButton).addEventListener('click',deleteProductSubmit);

        }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;

        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== '' && productPrice !== ''){
            //Add product
            const newProduct = ProductCtrl.addProduct(productName,productPrice);
            //console.log(newProduct);

            // ADD İTEM TO LİST
            UIController.addProduct(newProduct);

            //add product to LS

            StorageCtrl.storeProduct(newProduct);

            //get total

            const total = ProductCtrl.getTotal();

            //show total on UI
            UIController.showTotal(total);

            //Clear inputs
            UIController.clearInputs();

            


        }

        //console.log(productName,productPrice);

        e.preventDefault();
    }

    const productEditClick = function(e){

        if(e.target.classList.contains('edit-product')){
            //console.log('icon clicked');

            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent
            
            // get selected product

            const product = ProductCtrl.getProductById(id);

            //set current product
            ProductCtrl.setCurrentProduct(product);

            UICtrl.clearWarnings();

            //add product to UI
            UICtrl.addProductToForm();


            UICtrl.editState(e.target.parentNode.parentNode);

        }
        

        e.preventDefault();

    }

    const editProductSubmit = function(e){
        //console.log('update button clicked');

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== '' && productPrice !== ''){

            //update product

            const updatedProduct = ProductCtrl.updateProduct(productName,productPrice);

            //update ui
            let item = UICtrl.updateProduct(updatedProduct);

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);
            //update storage
            StorageCtrl.updateProduct(updatedProduct);

            UICtrl.addingState();

        }

        e.preventDefault();
    }

    const cancelUpdate = function(e){
        console.log('cancel button');

        UICtrl.addingState();

        UICtrl.clearWarnings();

        e.preventDefault();

    }

    const deleteProductSubmit = function(e){
        //console.log('delete event');

        //get selected product

        const selectedProduct = ProductCtrl.getCurrentProduct();

        //delete product
        ProductCtrl.deleteProduct(selectedProduct);

        // delete ui
        UICtrl.deleteProduct();

        //get total
        const total = ProductCtrl.getTotal();

        //show total
        UICtrl.showTotal(total);

        //delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        UICtrl.addingState();

        if(total==0){
            UICtrl.hideCard();
        }


        e.preventDefault();
    }
    

    return {
        init: function(){
            console.log('starting app');

            UIController.addingState();

            const products = ProductCtrl.getProducts();

            if(products.length ==0){
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products);
            }

            //get total
            const total = ProductCtrl.getTotal();

            //show total
            UICtrl.showTotal(total);

            //load event listeners
            loadEventListeners();

        }
    }


})(ProductController,UIController,StorageController);


App.init();