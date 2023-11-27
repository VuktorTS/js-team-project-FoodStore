import { loadFromLocalStorage } from './helpers/local-storage';
import { CART_KEY } from './helpers/storage-keys';

function amountProductsInCart() {
  const count = loadFromLocalStorage(CART_KEY) ?? [];
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = `(${count.length})`;
}
amountProductsInCart();

export { amountProductsInCart };
