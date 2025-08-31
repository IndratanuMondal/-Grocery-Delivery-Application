const products = [
    { id: 1, name: 'ice-crime', price: 2.5 },
    { id: 2, name: 'Bananas', price: 1.2 },
    { id: 3, name: 'Carrots', price: 1.0 },
    { id: 4, name: 'Tomatoes', price: 3.0 }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
    showCart();  
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(itemDiv);
    });
    document.getElementById('shopping-cart').classList.remove('hidden');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    showCart();
}

document.getElementById('cart-button').addEventListener('click', showCart);

document.getElementById('checkout-button').addEventListener('click', () => {
    const checkoutDiv = document.getElementById('checkout-summary');
    checkoutDiv.innerHTML = ""; 

    if (cart.length === 0) {
        checkoutDiv.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    checkoutDiv.innerHTML = "<h3>Checkout Summary</h3>";

    let total = 0;
    cart.forEach(item => {
        checkoutDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    checkoutDiv.innerHTML += `<h4>Total: $${total.toFixed(2)}</h4>`;
});

displayProducts();
