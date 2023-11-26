import {saveToLocalStorage, loadFromLocalStorage} from "./helpers/local-storage";
import {CART_KEY} from "./helpers/storage-keys";

const count = loadFromLocalStorage(CART_KEY);
// console.log('count:',count);
const cartCounter = document.getElementById('cart-counter');
cartCounter.textContent = `(${count.length})`;