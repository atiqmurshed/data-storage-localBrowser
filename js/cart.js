const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value='';
    productQuantity.value='';


    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


const displayProduct = (Product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText=`${Product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (Product, quantity) => {
   const cart = getStoredShoppingCart();
    cart[Product] = quantity;
    const cartStirngified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStirngified);
}


const displayProductsFromLocalStorage = () => {
    const savedCard = getStoredShoppingCart();
    for(const product in savedCard){
        const quantity = savedCard[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}
displayProductsFromLocalStorage();