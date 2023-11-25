console.log('popular-js')


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
  const productIcon = document.querySelector(`.product-card[data-id] .popular-basket`);
    productIcon.setAttribute('href', './images/icons.svg#icon-check');
    console.log('button changed')
};
Array.from(document.querySelectorAll('.add-to-basket')).map((button) => {
  button.addEventListener('click', (event) => {
      const productId = event.target.closest('.product-card').getAttribute('data-id');
    addToBasket(productId);
  });
});



// const handleClick = () => {
//   console.log('Кнопка натиснута');
//   saveToLocalStorage('greeting', 'Привіт');
// };

// document.querySelectorAll('.add-to-basket').forEach((button) => {
//   button.addEventListener('click', handleClick);
// });



