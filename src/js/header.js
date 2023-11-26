import {CART_KEY} from "./helpers/storage-keys";
const cartCounter = document.getElementById('cart-counter');
const updatedCartCount = 0;
cartCounter.textContent = `(${CART_KEY})`;