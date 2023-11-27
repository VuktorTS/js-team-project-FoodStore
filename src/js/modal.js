import { ProductsAPI } from './helpers/food-api';

const modal = {
  api: new ProductsAPI(),
  wrapperModal: document.createElement('div'),
};

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

modal.wrapperModal.classList.add('backdrop');
modal.wrapperModal.classList.add('is-hidden');
modal.wrapperModal.setAttribute('data', 'modal');
document.body.appendChild(modal.wrapperModal);

function displayModal(markUp) {
  if (markUp) {
    modal.wrapperModal.innerHTML = markUp;
    modal.wrapperModal.classList.remove('is-hidden');
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
  modal.wrapperModal.classList.add('is-hidden');
  modal.wrapperModal.innerHTML = '';
}

function onClickModal(e) {
  const popUpElement = e.target.closest('li');
  if (popUpElement) {
    fetchById(popUpElement.id).then(data => {
      const markUp = modalPopular(data);
      displayModal(markUp);
    });
  }
}

async function fetchById(id) {
  const response = await modal.api.getProductById(id);
  return response;
}

export { onClickModal };
