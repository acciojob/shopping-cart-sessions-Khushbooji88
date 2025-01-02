// This is the boilerplate code given for you
// You can modify this code
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cart = [];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ''; // Clear the cart list first
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} <button class="remove-from-cart-btn" data-id="${item.id}">Remove from Cart</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId); // Remove item from cart
  renderCart(); // Update the cart display
}

// Clear cart
function clearCart() {
  cart = []; // Clear the cart array
  renderCart(); // Update the cart display
}

// Event listener for 'Add to Cart' button
productList.addEventListener('click', function(event) {
  if (event.target.className === 'add-to-cart-btn') {
    addToCart(parseInt(event.target.getAttribute('data-id')));
    renderCart();
  }
});

// Event listener for 'Remove from Cart' button
document.getElementById("cart-list").addEventListener('click', function(event) {
  if (event.target.className === 'remove-from-cart-btn') {
    removeFromCart(parseInt(event.target.getAttribute('data-id')));
    renderCart();
  }
});

// Event listener for 'Clear Cart' button
document.getElementById("clear-cart-btn").addEventListener('click', function() {
  clearCart();
});

// Initial render
renderProducts();