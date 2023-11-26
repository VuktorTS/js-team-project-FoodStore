console.log('discount')



const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};



// import { saveToLocalStorage, loadFromLocalStorage } from './helpers/local-storage';

const addToBasket = (productId) => {
  const basket = loadFromLocalStorage('cart') || {};
    if (basket[productId]) {
      console.log('The product is already added to the cart.');
    return;
  }
  basket[productId] = true;
    saveToLocalStorage('cart', basket);
    console.log('Saved to localStorage:', basket);
  const productIcon = document.querySelector(`.discount-item[data-id] .discount-icon`);
    productIcon.setAttribute('href', './images/icons.svg#icon-check');
    console.log('button changed')
};
Array.from(document.querySelectorAll('.discount-btn')).map((button) => {
  button.addEventListener('click', (event) => {
      const productId = event.target.closest('.discount-item').getAttribute('data-id');
    addToBasket(productId);
  });
});