import { PRODUCTS_KEY } from './helpers/storage-keys';
import { ProductsAPI } from './helpers/food-api';
import {
  saveToLocalStorage,
  saveUniqueElements,
} from './helpers/local-storage';
import { onClickModal } from './helpers/modal';

import { createPopularProductsMarkup } from './helpers/create-markup';

const popular = {
  api: new ProductsAPI(),
  popularRef: document.querySelector('.popular-container'),
  discountRef: document.querySelector('.discount-list'),
};
popular.popularRef.addEventListener('click', onClickModal);
renderPopular();

async function renderPopular() {
  const response = await popular.api.getPopularProducts();
  // saveToLocalStorage(POPULAR_KEY, response);
  saveUniqueElements(PRODUCTS_KEY, response);
  const markup = createPopularProductsMarkup(response);
  popular.popularRef.innerHTML = markup;
}
