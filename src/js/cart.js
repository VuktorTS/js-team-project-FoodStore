import Scrollbar from 'smooth-scrollbar';
import { amountProductsInCart } from './header';

const productsList = document.querySelector('.products-list');
// const data = [
//   {
//     _id: '640c2dd963a319ea671e383b',
//     name: 'Ackee',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
//     category: 'Fresh_Produce',
//     price: 8.99,
//     size: '16 oz',
//     is10PercentOff: false,
//     popularity: 7517,
//   },
//   {
//     _id: '640c2dd963a319ea671e3860',
//     name: 'Allspice',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png',
//     category: 'Pantry_Items',
//     price: 2.99,
//     size: '1.5oz',
//     is10PercentOff: false,
//     popularity: 3112,
//   },
//   {
//     _id: '640c2dd963a319ea671e3861',
//     name: 'Almond Extract',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
//     category: 'Pantry_Items',
//     price: 4.99,
//     size: '2oz',
//     is10PercentOff: false,
//     popularity: 2157,
//   },
//   {
//     _id: '640c2dd963a319ea671e385f',
//     name: 'Almond Milk',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png',
//     category: 'Beverages',
//     price: 3.99,
//     size: '1L',
//     is10PercentOff: false,
//     popularity: 980,
//   },
//   {
//     _id: '640c2dd963a319ea671e3814',
//     name: 'Almonds',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png',
//     category: 'Pantry_Items',
//     price: 8.99,
//     size: '16 oz bag',
//     is10PercentOff: false,
//     popularity: 1125,
//   },
//   {
//     _id: '640c2dd963a319ea671e385e',
//     name: 'Ancho Chillies',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
//     category: 'Pantry_Items',
//     price: 4.99,
//     size: '100g',
//     is10PercentOff: false,
//     popularity: 3006,
//   },
//   {
//     _id: '640c2dd963a319ea671e3865',
//     name: 'Anchovy Fillet',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png',
//     category: 'Meat_&_Seafood',
//     price: 3.49,
//     size: '2oz',
//     is10PercentOff: false,
//     popularity: 599,
//   },
//   {
//     _id: '640c2dd963a319ea671e3660',
//     name: 'Apple Cider Vinegar',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png',
//     price: 6.99,
//     size: '500 ml',
//     category: 'Pantry_Items',
//     is10PercentOff: false,
//     popularity: 683,
//   },
//   {
//     _id: '640c2dd963a319ea671e3825',
//     name: 'Apples',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png',
//     category: 'Fresh_Produce',
//     price: 1.5,
//     size: '1 lb',
//     is10PercentOff: false,
//     popularity: 538,
//   },
//   {
//     _id: '640c2dd963a319ea671e37bf',
//     name: 'Apricot',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bf.png',
//     category: 'Fresh_Produce',
//     price: 0.79,
//     size: 'Per Piece',
//     is10PercentOff: false,
//     popularity: 79,
//   },
//   {
//     _id: '640c2dd963a319ea671e3812',
//     name: 'Apricot Jam',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3812.png',
//     category: 'Pantry_Items',
//     price: 4.99,
//     size: '16 oz jar',
//     is10PercentOff: false,
//     popularity: 60,
//   },
//   {
//     _id: '640c2dd963a319ea671e3661',
//     name: 'Asparagus',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3661.png',
//     price: 4.99,
//     size: '250 g',
//     category: 'Fresh_Produce',
//     is10PercentOff: false,
//     popularity: 81,
//   },
//   {
//     _id: '640c2dd963a319ea671e3662',
//     name: 'Aubergine',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3662.png',
//     price: 2.99,
//     size: '1 kg',
//     category: 'Fresh_Produce',
//     is10PercentOff: false,
//     popularity: 62,
//   },
//   {
//     _id: '640c2dd963a319ea671e365f',
//     name: 'Avocado',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365f.png',
//     price: 1.99,
//     size: 'Each',
//     category: 'Fresh_Produce',
//     is10PercentOff: false,
//     popularity: 79,
//   },
//   {
//     _id: '640c2dd963a319ea671e3663',
//     name: 'Baby Plum Tomatoes',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3663.png',
//     price: 3.99,
//     size: '200 g',
//     category: 'Fresh_Produce',
//     is10PercentOff: false,
//     popularity: 98,
//   },
//   {
//     _id: '640c2dd963a319ea671e37a9',
//     name: 'Baby Squid',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a9.png',
//     category: 'Meat_&_Seafood',
//     price: 14.99,
//     size: '1 lb',
//     is10PercentOff: false,
//     popularity: 53,
//   },
//   {
//     _id: '640c2dd963a319ea671e3664',
//     name: 'Bacon',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3664.png',
//     price: 7.99,
//     size: '500 g',
//     category: 'Meat_&_Seafood',
//     is10PercentOff: false,
//     popularity: 92,
//   },
//   {
//     _id: '640c2dd963a319ea671e37f9',
//     name: 'Baguette',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f9.png',
//     category: 'Breads_&_Bakery',
//     price: 2.99,
//     size: 'One loaf',
//     is10PercentOff: false,
//     popularity: 35,
//   },
//   {
//     _id: '640c2dd963a319ea671e3816',
//     name: 'Baked Beans',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3816.png',
//     category: 'Pantry_Items',
//     price: 1.99,
//     size: '16 oz can',
//     is10PercentOff: false,
//     popularity: 2,
//   },
//   {
//     _id: '640c2dd963a319ea671e3665',
//     name: 'Baking Powder',
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png',
//     price: 1.99,
//     size: '250 g',
//     category: 'Pantry_Items',
//     is10PercentOff: false,
//     popularity: 5,
//   },
// ];

import {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
} from './helpers/local-storage';
import { CART_KEY } from './helpers/storage-keys';
import { createCartMarkup } from './helpers/create-markup';
// saveToLocalStorage(CART_KEY, data);

const btnDeleteAll = document.querySelector('.delete-btn-all');
const tatalPriceProduct = document.querySelector('.sum-total-product');
const amountProduct = document.querySelector('.amount-product-in-cart');
const productsCardContainer = document.querySelector('.product-cart');

btnDeleteAll.addEventListener('click', onClickDeleteAll);

function renderProductInCart() {
  const arrProducts = loadFromLocalStorage(CART_KEY) ?? [];
  if (arrProducts.length === 0) {
    productsCardContainer.innerHTML = createCartMarkup(arrProducts);
    return;
  }

  const markupCart = createCartMarkup(arrProducts);
  productsList.innerHTML = markupCart;
  productsList.addEventListener('click', onClickDeleteProduct);
}

function renderTotalPrice() {
  const arrProducts = loadFromLocalStorage(CART_KEY) ?? [];
  const total = totalPrice(arrProducts);
  tatalPriceProduct.innerHTML = total;
}

function chengeAmountProduct() {
  const count = loadFromLocalStorage(CART_KEY) ?? [];
  amountProduct.innerHTML = count.length;
}

function totalPrice(products) {
  if (!products) {
    return 0;
  }

  return products
    .reduce((acc, product) => {
      return (acc += product.price);
    }, 0)
    .toFixed(2);
}

function updateData() {
  renderTotalPrice();
  amountProductsInCart();
  chengeAmountProduct();
}

function onClickDeleteAll(event) {
  removeFromLocalStorage(CART_KEY);
  updateData();
  renderProductInCart();
}
function onClickDeleteProduct(event) {
  if (!event.target.closest('.cart-delete-btn')) {
    return;
  }
  const idProduct = event.target.closest('button').dataset.id;

  const findProduct = loadFromLocalStorage(CART_KEY).filter(
    ({ _id }) => _id !== idProduct
  );
  console.log('findProduct: ', findProduct);

  saveToLocalStorage(CART_KEY, findProduct);
  if (findProduct.length === 0) {
    updateData();
    renderProductInCart();
  }
  event.target.closest('li').remove();
  updateData();
}

renderProductInCart();
updateData();
const scrollbar = new Scrollbar.init(document.querySelector('#my-scrollbar'));
