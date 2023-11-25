const cartCounter = document.getElementById('cart-counter');
const cartCount = parseInt(cartCounter.textContent);
function redirectToCartPage() {
window.location.href = 'cart.html';
}
document.querySelector('.shopping-cart-link').addEventListener('click', redirectToCartPage);
const updatedCartCount = 0;
cartCounter.textContent = `(${updatedCartCount})`;