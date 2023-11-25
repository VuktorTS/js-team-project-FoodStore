import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import { FILTER_KEY } from './helpers/storage-keys';
import localStorage from './helpers/local-storage';
import 'npm:slim-select/dist/slimselect.css';
import '../css/index.css';

function createCardsMarkup(products) {
  const markupCardArray = products.map(
    ({ img, name, category, size, popularity, price } = products) => {
      return `
      <li class="card">
      <div class="bg_img">
        <img src="${img}" class="img_card" alt="" />
      </div>
      <div class="text_wrapped">
        <h3 class="text_name_prod">${name}</h3>
        <div class="wrapper_info">
          <p class="text_title">Category:</p>
          <span class="text_subtitle">${category}</span>
          <p class="text_title">Size:</p>
          <span class="text_subtitle">${size}</span>
          <p class="text_title">Popularity:</p>
          <span class="text_subtitle">${popularity}</span>
        </div>
      </div>
      <div class="wrapper_price">
        <span class="text_price">${price}</span>
        <span>
          <svg class="cart_svg" width="18" height="18">
            <use href="./images/icons.svg#icon-shopping-cart"></use>
          </svg>
        </span>
      </div>
    </li>
      `;
    }
  );

  return markupCardArray.join('');
}

const storageSave = localStorage.loadFromLocalStorage(FILTER_KEY);

const filters = {
  categories: new ProductsAPI(),
  formRef: document.querySelector('.form_filters'),
  ulRef: document.querySelector('.wrapper_card'),
  select: new SlimSelect({
    events: {
      beforeChange: newVal => {
        getProductsCategory(newVal[0].value);
        localStorage.saveToLocalStorage(FILTER_KEY, {
          ...storageSave,
          categories: newVal[0].value,
        });
      },
    },
    select: '#categories',
    settings: {
      showSearch: false,
      placeholderText: !getValueCategories()
        ? 'Categories'
        : getValueCategories(),
    },
  }),
};
checkStorage();

filters.formRef.addEventListener('submit', onSubmit);

function getValueCategories() {
  if (!localStorage.loadFromLocalStorage(FILTER_KEY)) {
    return null;
  }
  return localStorage.loadFromLocalStorage(FILTER_KEY).categories;
}

function onSubmit(e) {
  e.preventDefault();
  const { search } = filters.formRef;
  console.log(storageSave);
  localStorage.saveToLocalStorage(FILTER_KEY, {
    ...storageSave,
    keyword: search.value,
  });
  const products = localStorage.loadFromLocalStorage('products');
  const value = search.value.toLowerCase();
  if (search.value.length) {
    const newArr = products.filter(el => el.name.toLowerCase().includes(value));
    filters.ulRef.innerHTML = createCardsMarkup(newArr);
  } else {
    const category = localStorage.loadFromLocalStorage(FILTER_KEY).categories;
    getProductsCategory(category);
  }
}

async function renderMarkUpProducts() {
  const result = await fetchProducts();
  const markup = createCardsMarkup(result);
  filters.ulRef.insertAdjacentHTML('beforeend', markup);
}

async function getProductsCategory(value) {
  const response = await filters.categories.getProducts({
    category: value,
  });
  const result = await response.results;
  localStorage.saveToLocalStorage('products', result);

  const keyword = localStorage.loadFromLocalStorage(FILTER_KEY).keyword;
  if (keyword) {
    const products = localStorage.loadFromLocalStorage('products');
    const filteredArr = products.filter(el => {
      el.name.toLowerCase().includes(keyword);
    });
    filters.ulRef.innerHTML = createCardsMarkup(filteredArr);
    return;
  }
  const markup = createCardsMarkup(result);
  filters.ulRef.innerHTML = markup;
}

function checkStorage() {
  if (storageSave) {
    getProductsCategory(storageSave.categories);
    return;
  }
  renderMarkUpProducts();
}

async function fetchProducts() {
  const response = await filters.categories.getProducts();
  const result = await response.results;
  return result;
}

filters.categories
  .getProductCategories()
  .then(data => {
    return data.map(el => {
      return {
        text: el,
        value: el,
      };
    });
  })
  .then(data => {
    const text = getValueCategories();
    filters.select.setData([{ placeholder: true, text: text }, ...data]);
  });
