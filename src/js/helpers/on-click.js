import { loadFromLocalStorage, saveToLocalStorage } from './local-storage';
import { CART_KEY, PRODUCTS_KEY } from './storage-keys';
import { amountProductsInCart } from '../header';
import icons from '../../images/icons.svg';

function onClickAddedProductInCart(event) {
  const jsBtn = event.target.closest('.js-btn');
  const idProduct = jsBtn.dataset.id;
  const isAddedCart = jsBtn.dataset.isAdded;

  if (!JSON.parse(isAddedCart)) {
    const allBtnAddedCart = document.querySelectorAll(
      `[data-id="${idProduct}"]`
    );
    allBtnAddedCart.forEach(buttonChangeInnerHtml => {
      buttonChangeInnerHtml.innerHTML = `<svg class="cart_svg"><use href="${icons}#icon-check"></use></svg>`;
      buttonChangeInnerHtml.classList.add('add');
    });

    const product = loadFromLocalStorage(PRODUCTS_KEY).filter(
      ({ _id }) => idProduct === _id
    );
    const productsCart = loadFromLocalStorage(CART_KEY) ?? [];
    productsCart.push(product[0]);

    saveToLocalStorage(CART_KEY, productsCart);
    amountProductsInCart();
    jsBtn.dataset.isAdded = true;
  } else {
    const allBtnAddedCart = document.querySelectorAll(
      `[data-id="${idProduct}"]`
    );
    allBtnAddedCart.forEach(buttonChangeInnerHtml => {
      buttonChangeInnerHtml.innerHTML = `<svg class="cart_svg"><use href="${icons}#icon-shopping-cart"></use></svg>`;
      buttonChangeInnerHtml.classList.remove('add');
    });

    jsBtn.dataset.isAdded = false;
    const product = loadFromLocalStorage(CART_KEY).filter(
      ({ _id }) => idProduct !== _id
    );

    saveToLocalStorage(CART_KEY, product);
    amountProductsInCart();
  }
}

export { onClickAddedProductInCart };
