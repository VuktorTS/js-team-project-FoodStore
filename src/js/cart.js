import Scrollbar from 'smooth-scrollbar';

const productsList = document.querySelector('.products-list');
const data = [
  {
    _id: '640c2dd963a319ea671e383b',
    name: 'Ackee',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png',
    category: 'Fresh_Produce',
    price: 8.99,
    size: '16 oz',
    is10PercentOff: false,
    popularity: 3892,
  },
  {
    _id: '640c2dd963a319ea671e3860',
    name: 'Allspice',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png',
    category: 'Pantry_Items',
    price: 2.99,
    size: '1.5oz',
    is10PercentOff: false,
    popularity: 2172,
  },
  {
    _id: '640c2dd963a319ea671e3861',
    name: 'Almond Extract',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3861.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '2oz',
    is10PercentOff: false,
    popularity: 1526,
  },
  {
    _id: '640c2dd963a319ea671e385f',
    name: 'Almond Milk',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385f.png',
    category: 'Beverages',
    price: 3.99,
    size: '1L',
    is10PercentOff: false,
    popularity: 816,
  },
  {
    _id: '640c2dd963a319ea671e3814',
    name: 'Almonds',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png',
    category: 'Pantry_Items',
    price: 8.99,
    size: '16 oz bag',
    is10PercentOff: false,
    popularity: 929,
  },
  {
    _id: '640c2dd963a319ea671e385e',
    name: 'Ancho Chillies',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e385e.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '100g',
    is10PercentOff: false,
    popularity: 1122,
  },
  {
    _id: '640c2dd963a319ea671e3865',
    name: 'Anchovy Fillet',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3865.png',
    category: 'Meat_&_Seafood',
    price: 3.49,
    size: '2oz',
    is10PercentOff: false,
    popularity: 548,
  },
  {
    _id: '640c2dd963a319ea671e3660',
    name: 'Apple Cider Vinegar',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png',
    price: 6.99,
    size: '500 ml',
    category: 'Pantry_Items',
    is10PercentOff: false,
    popularity: 598,
  },
  {
    _id: '640c2dd963a319ea671e3825',
    name: 'Apples',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3825.png',
    category: 'Fresh_Produce',
    price: 1.5,
    size: '1 lb',
    is10PercentOff: false,
    popularity: 454,
  },
  {
    _id: '640c2dd963a319ea671e37bf',
    name: 'Apricot',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37bf.png',
    category: 'Fresh_Produce',
    price: 0.79,
    size: 'Per Piece',
    is10PercentOff: false,
    popularity: 73,
  },
  {
    _id: '640c2dd963a319ea671e3812',
    name: 'Apricot Jam',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3812.png',
    category: 'Pantry_Items',
    price: 4.99,
    size: '16 oz jar',
    is10PercentOff: false,
    popularity: 58,
  },
  {
    _id: '640c2dd963a319ea671e3661',
    name: 'Asparagus',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3661.png',
    price: 4.99,
    size: '250 g',
    category: 'Fresh_Produce',
    is10PercentOff: false,
    popularity: 77,
  },
  {
    _id: '640c2dd963a319ea671e3662',
    name: 'Aubergine',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3662.png',
    price: 2.99,
    size: '1 kg',
    category: 'Fresh_Produce',
    is10PercentOff: false,
    popularity: 59,
  },
  {
    _id: '640c2dd963a319ea671e365f',
    name: 'Avocado',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365f.png',
    price: 1.99,
    size: 'Each',
    category: 'Fresh_Produce',
    is10PercentOff: false,
    popularity: 73,
  },
  {
    _id: '640c2dd963a319ea671e3663',
    name: 'Baby Plum Tomatoes',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3663.png',
    price: 3.99,
    size: '200 g',
    category: 'Fresh_Produce',
    is10PercentOff: false,
    popularity: 96,
  },
  {
    _id: '640c2dd963a319ea671e37a9',
    name: 'Baby Squid',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37a9.png',
    category: 'Meat_&_Seafood',
    price: 14.99,
    size: '1 lb',
    is10PercentOff: false,
    popularity: 40,
  },
  {
    _id: '640c2dd963a319ea671e3664',
    name: 'Bacon',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3664.png',
    price: 7.99,
    size: '500 g',
    category: 'Meat_&_Seafood',
    is10PercentOff: false,
    popularity: 87,
  },
  {
    _id: '640c2dd963a319ea671e37f9',
    name: 'Baguette',
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37f9.png',
    category: 'Breads_&_Bakery',
    price: 2.99,
    size: 'One loaf',
    is10PercentOff: false,
    popularity: 33,
  },
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

saveToLocalStorage(CART_KEY, data);

function createCartMarkup(products) {
  console.log('products: ', products);

  const markupCartArray = products.map(
    ({ _id, img, name, category, size, price }) => {
      return `
<li class="products-item">
                <div class="cart-product-img-container">
                  <img
                    src="${img}"
                    alt="${name}"
                  />
                </div>
                <div class="product-info">
                  <h3 class="cart-product-name">${name}</h3>
                  <ul class="product-info-list">
                    <li class="product-info-item">
                      <p class="cart-category-text">
                        Category:
                        <span class="cart-category-name">${category}</span>
                      </p>
                    </li>
                    <li class="product-info-item">
                      <p class="cart-product-size">
                        Size: <span class="cart-product-size-value">${size}</span>
                      </p>
                    </li>
                  </ul>
                  <p class="cart-product-price">$ ${price}</p>
                </div>
                <button type="button" class="cart-delete-btn">
                  <svg class="icon-delete-product">
                    <use href="./images/icons.svg#icon-close"></use>
                  </svg>
                </button>
              </li>
            `;
    }
  );

  return markupCartArray.join('');
}
const markupCart = createCartMarkup(data);

productsList.innerHTML = markupCart;

Scrollbar.init(document.querySelector('#my-scrollbar'), {
  alwaysShowTracks: true,
});
