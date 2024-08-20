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
    alert(`${product.name} added to cart!`);
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
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
    alert('Proceeding to checkout...');
});

displayProducts();
