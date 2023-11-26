import { POPULAR_KEY, DISCOUNT_KEY } from './helpers/storage-keys';
import { ProductsAPI } from './helpers/food-api';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './helpers/local-storage';

import {
  createPopularProductsMarkup,
  createDiscountProductsMarkup,
} from './helpers/create-markup';

function modalPopular({ name, category, size, popularity, img, price, desc }) {
  return `
  <div class="modal">
    <button type="button" class="modal-close-btn" data-modal-close>
      <svg class="modal-close-icon">
        <use href="./images/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-content">
      <div class="modal-main-row">
        <div class="modal-image-bg">
          <img src="${img}" alt="" class="modal-image" />
        </div>
        <div class="modal-description-wrapper">
          <div class="modal-list-wrapper">
            <h3 class="modal-product-name">${name}</h3>
            <ul class="modal-list">
              <li class="modal-list-item">
                <p>Category: <span class="modal-span">${category}</span></p>
              </li>
              <li class="modal-list-item">
                <p>Size: <span class="modal-span">${size}</span></p>
              </li>
              <li class="modal-list-item">
                <p>Popularity: <span class="modal-span">${popularity}</span></p>
              </li>
            </ul>
          </div>
          <p class="modal-text">
            ${desc}
          </p>
        </div>
      </div>
      <div class="modal-bottom-row">
        <h3 class="modal-price">${price}$</h3>
        <button type="button" class="modal-btn">
          Add to
          <svg class="modal-btn-icon">
            <use href="./images/icons.svg#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
`;
}

const popular = {
  api: new ProductsAPI(),
  popularRef: document.querySelector('.popular-container'),
  discountRef: document.querySelector('.discount-list'),
  wrapperModal: document.createElement('div'),
};
popular.popularRef.addEventListener('click', onClickPopular);
renderPopular();
renderDiscounts();

popular.wrapperModal.classList.add('backdrop');
popular.wrapperModal.classList.add('is-hidden');
popular.wrapperModal.setAttribute('data', 'modal');
document.body.appendChild(popular.wrapperModal);

async function renderPopular() {
  const response = await popular.api.getPopularProducts();
  saveToLocalStorage(POPULAR_KEY, response);
  const markup = createPopularProductsMarkup(response);
  popular.popularRef.innerHTML = markup;
}

async function renderDiscounts() {
  const response = await popular.api.getDiscountProducts();
  const result = response.slice(0, 2);
  saveToLocalStorage(DISCOUNT_KEY, result);
  const markup = createDiscountProductsMarkup(result);
  popular.discountRef.innerHTML = markup;
}
const modal = document.querySelector('.backdrop');

function onClickPopular(e) {
  const popUpElement = e.target.closest('li');
  if (popUpElement) {
    fetchById(popUpElement.id)
      .then(data => {
        const markUp = modalPopular(data);
        displayModal(markUp);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}

function displayModal(markUp) {
  if (markUp) {
    modal.innerHTML = markUp;
    modal.classList.remove('is-hidden');
    setupCloseButton();
  }
}

function setupCloseButton() {
  const closeBtn = document.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
}

function closeModal() {
  modal.classList.add('is-hidden');
  modal.innerHTML = '';
}

async function fetchById(id) {
  const response = await popular.api.getProductById(id);
  return response;
}
