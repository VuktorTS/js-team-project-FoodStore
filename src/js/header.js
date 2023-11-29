import {
  loadFromLocalStorage,
  removeFromLocalStorage,
} from './helpers/local-storage';
import { CART_KEY, POPULAR_KEY, PRODUCTS_KEY } from './helpers/storage-keys';

function amountProductsInCart() {
  const count = loadFromLocalStorage(CART_KEY) ?? [];
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = `(${count.length})`;
}
removeFromLocalStorage(PRODUCTS_KEY);
amountProductsInCart();

export { amountProductsInCart };
