import Scrollbar from 'smooth-scrollbar';

const productsList = document.querySelector('.products-list');
const data = [
  {
    _id: '640c2dd963a319ea671e3816',
    name: 'Baked Beans',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3816.png',
    category: 'Pantry_Items',
    price: 1.99,
    size: '16 oz can',
    is10PercentOff: false,
    popularity: 2,
  },
  {
    _id: '640c2dd963a319ea671e3665',
    name: 'Baking Powder',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png',
    price: 1.99,
    size: '250 g',
    category: 'Pantry_Items',
    is10PercentOff: false,
    popularity: 4,
  },
];
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './helpers/local-storage';
import { CART_KEY } from './helpers/storage-keys';
import { createCartMarkup } from './helpers/create-markup';

const btnDeleteAll = document.querySelector('.delete-btn');
const btnDeleteProduct = document.querySelector('.delete-btn');
const tatalPriceProduct = document.querySelector('.sum-total-product');

const arrProducts = loadFromLocalStorage(CART_KEY) ?? [];

function renderProductInCart(products) {
  const markupCart = createCartMarkup(products);
  productsList.innerHTML = markupCart;
}
function renderTotalPrice() {
  const arrProducts = loadFromLocalStorage(CART_KEY) ?? [];
  const totalPrice = totlPrice(arrProducts);
  tatalPriceProduct.innerHTML = totalPrice;
}
function totlPrice(products) {
  if (!products) {
    return 0;
  }
  return products.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);
}
renderProductInCart(arrProducts);
renderTotalPrice();
console.log(totlPrice([]));

Scrollbar.init(document.querySelector('#my-scrollbar'), {
  alwaysShowTracks: true,
});
