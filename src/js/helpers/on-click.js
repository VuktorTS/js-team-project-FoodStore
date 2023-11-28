import { loadFromLocalStorage, saveToLocalStorage } from './local-storage';
import { CART_KEY, PRODUCTS_KEY } from './storage-keys';
import { amountProductsInCart } from '../header';

function onClickAddedProductInCart(event) {
  const jsBtn = event.target.closest('.js-btn');
  console.log('jsBtn: ', jsBtn);
  const idProduct = jsBtn.dataset.id;
  console.log('idProduct: ', idProduct);
  const isAddedCart = jsBtn.dataset.isAdded;
  console.log('isAddedCart: ', isAddedCart);
  if (!JSON.parse(isAddedCart)) {
    const product = loadFromLocalStorage(PRODUCTS_KEY).filter(
      ({ _id }) => idProduct === _id
    );
    console.log('product: ', product);
    const productsCart = loadFromLocalStorage(CART_KEY) ?? [];
    productsCart.push(product[0]);

    saveToLocalStorage(CART_KEY, productsCart);
    amountProductsInCart();
    jsBtn.dataset.isAdded = true;
    jsBtn.innerHtml = '';
  }
}

export { onClickAddedProductInCart };
