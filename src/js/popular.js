import { POPULAR_KEY, DISCOUNT_KEY } from './helpers/storage-keys';
import { ProductsAPI } from './helpers/food-api';
import storage from './helpers/local-storage';

function createPopularProductsMarkup(products) {
  const markupPopularProductsArray = products.map(
    ({ img, name, category, size, popularity, _id }) => {
      return `
        <li class="popular-item" id = "${_id}"><div class="product-card">
        <div class="popular-product-icon"><img src="${img}" alt="${name}"></div>
        <!-- Картки зображень -->
        <div class="product-details">
            <p class="popular-name">${name}</p>
        <p class="popular-text">Category: <span class="popular-span popular-category">${category}</span></p>
        <div class="row">
        <p class="popular-text">Size: <span class="popular-span popular-size">${size}</span></p>
        <p class="popular-text">Popularity: <span class="popular-span popular-size">${popularity}</span></p>
    </div>
        </div>
        <button class="add-to-bascket" data-id="${_id}"></button>
      </div></li>
        `;
    }
  );

  return markupPopularProductsArray.join('');
}

function createDiscountProductsMarkup(products) {
  const markupDiscountProductsArray = products.map(
    ({ img, name, _id, price }) => {
      return `
      <li class="discount-item" id = "${_id}">
      <div class="discount-image-bg">
        <img src="${img}" alt="${name}" class="discount-image" />
      </div>
      <div class="discount-info">
        <h3 class="discount-name">${name}</h3>
        <div class="discount-price-btn-wrapper">
          <p class="discount-price">${price}</p>
          <button type="button" class="button discount-btn" data-id="${_id}">
          </button>
        </div>
      </div>
      <img
        src="./images/discount.png"
        alt="discount sticker"
        class="discount-sticker"
      />
    </li>
      `;
    }
  );

  return markupDiscountProductsArray.join('');
}

function modalPopular(product) {
  return `<div class="backdrop is-hidden" data-modal>
  <div class="modal">
    <button type="button" class="modal-close-btn" data-modal-close>
      <svg class="modal-close-icon">
        <use href="./images/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="modal-content">
      <div class="modal-main-row">
        <div class="modal-image-bg">
          <img src="./images/image2.png" alt="" class="modal-image" />
        </div>
        <div class="modal-description-wrapper">
          <div class="modal-list-wrapper">
            <h3 class="modal-product-name">Pumpkin</h3>
            <ul class="modal-list">
              <li class="modal-list-item">
                <p>Category: <span class="modal-span">Fresh Produce</span></p>
              </li>
              <li class="modal-list-item">
                <p>Size: <span class="modal-span">1 medium-sized</span></p>
              </li>
              <li class="modal-list-item">
                <p>Popularity: <span class="modal-span">0</span></p>
              </li>
            </ul>
          </div>
          <p class="modal-text">
            A round, orange vegetable with a thick shell and seeds inside. It is
            often used in cooking and baking for its sweet and earthy flavor.
          </p>
        </div>
      </div>
      <div class="modal-bottom-row">
        <h3 class="modal-price">$2.99</h3>
        <button type="button" class="modal-btn">
          Add to
          <svg class="modal-btn-icon">
            <use href="./images/icons.svg#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`;
}

const popular = {
  api: new ProductsAPI(),
  popularRef: document.querySelector('.popular-container'),
  discountRef: document.querySelector('.discount-list'),
};
popular.popularRef.addEventListener('click', onClickPopular);
renderPopular();
renderDiscounts();

async function renderPopular() {
  const response = await popular.api.getPopularProducts();
  storage.saveToLocalStorage(POPULAR_KEY, response);
  const markup = createPopularProductsMarkup(response);
  popular.popularRef.innerHTML = markup;
}

async function renderDiscounts() {
  const response = await popular.api.getDiscountProducts();
  const result = response.slice(0, 2);
  storage.saveToLocalStorage(DISCOUNT_KEY, result);
  const markup = createDiscountProductsMarkup(result);
  popular.discountRef.innerHTML = markup;
}

function onClickPopular(e) {
  const popUpElement = e.target.closest('li');
  if (popUpElement) {
    const arr = storage.loadFromLocalStorage(POPULAR_KEY);
    const selected = arr.find(el => el._id === popUpElement.id);
  }
}
