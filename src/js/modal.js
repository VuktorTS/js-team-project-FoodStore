import { ProductsAPI } from './helpers/food-api';
import { createModalMarkup } from './helpers/create-markup';

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
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'svg') return;
  if (popUpElement) {
    fetchById(popUpElement.id).then(data => {
      console.log('data: ', data);

      const markUp = createModalMarkup(data);
      displayModal(markUp);
    });
  }
}

async function fetchById(id) {
  const response = await modal.api.getProductById(id);
  return response;
}

export { onClickModal };
