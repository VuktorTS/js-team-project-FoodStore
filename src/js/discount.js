import { createDiscountProductsMarkup } from './helpers/create-markup';
import { ProductsAPI } from './helpers/food-api';
import {
  saveToLocalStorage,
  saveUniqueElements,
} from './helpers/local-storage';
import { PRODUCTS_KEY } from './helpers/storage-keys';
import { onClickModal } from './helpers/modal';

const discount = {
  api: new ProductsAPI(),
  discountRef: document.querySelector('.discount-list'),
};

discount.discountRef.addEventListener('click', onClickModal);

async function renderDiscounts() {
  const response = await discount.api.getDiscountProducts();
  const result = response.slice(0, 2);
  saveUniqueElements(PRODUCTS_KEY, result);
  // saveToLocalStorage(DISCOUNT_KEY, result);
  const markup = createDiscountProductsMarkup(result);
  discount.discountRef.innerHTML = markup;
}

renderDiscounts();
