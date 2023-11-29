import { ProductsAPI } from './food-api';
import { createModalMarkup } from './create-markup';
import { onClickAddedProductInCart } from './on-click';

const modal = {
  api: new ProductsAPI(),
  wrapperModal: document.createElement('div'),
};

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
  const closeBtn = document.querySelector('.backdrop');
  closeBtn.addEventListener('click', onCloseModal);
}
function onCloseModal(event) {
  if (
    !event.target.classList.contains('backdrop') &&
    !event.target.closest('.modal-close-icon')
  ) {
    return;
  }
  closeModal();
}

function closeModal() {
  const closeBtn = document.querySelector('.backdrop');
  modal.wrapperModal.classList.add('is-hidden');
  closeBtn.removeEventListener('click', onCloseModal);
  // modal.wrapperModal.innerHTML = '';
}

function onClickModal(e) {
  const popUpElement = e.target.closest('li');

  if (!e.target.closest('.js-btn') && popUpElement) {
    fetchById(popUpElement.id).then(data => {
      const markUp = createModalMarkup(data);
      displayModal(markUp);
    });
  }
  if (e.target.closest('.js-btn') && popUpElement) {
    onClickAddedProductInCart(e);
  }
}

async function fetchById(id) {
  const response = await modal.api.getProductById(id);
  return response;
}

export { onClickModal };
