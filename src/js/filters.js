import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import { FILTER_KEY, PRODUCTS_KEY } from './helpers/storage-keys';
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
checkStorage();

const filters = {
  categories: new ProductsAPI(),
  formRef: document.querySelector('.form_filters'),
  inputRef: document.querySelector('.filter'),
  ulRef: document.querySelector('.wrapper_card'),
  notFoundRef: document.querySelector('.notfound_wrapper'),
  select: new SlimSelect({
    events: {
      beforeChange: newVal => {
        const selected = newVal[0].value;
        if (selected === 'Show all') {
          filters.inputRef.value = '';
          localStorage.saveToLocalStorage(FILTER_KEY, {
            keyword: null,
            categories: null,
          });
          renderMarkUpProducts();
          return;
        }
        const storageSave = localStorage.loadFromLocalStorage(FILTER_KEY);
        if (selected !== 'Show all') {
          localStorage.saveToLocalStorage(FILTER_KEY, {
            ...storageSave,
            categories: newVal[0].value,
          });
        }
        renderMarkUpProducts();
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

checkSearchValue();
renderMarkUpProducts();

filters.formRef.addEventListener('submit', onSubmit);

function getValueCategories() {
  if (!localStorage.loadFromLocalStorage(FILTER_KEY)) {
    return null;
  }
  return localStorage.loadFromLocalStorage(FILTER_KEY).categories;
}

function onSubmit(e) {
  e.preventDefault();
  const storageSave = localStorage.loadFromLocalStorage(FILTER_KEY);
  const { search } = filters.formRef;
  localStorage.saveToLocalStorage(FILTER_KEY, {
    ...storageSave,
    keyword: search.value,
  });
  renderMarkUpProducts();
}

async function renderMarkUpProducts() {
  const result = await fetchProducts();
  localStorage.saveToLocalStorage(PRODUCTS_KEY, result);
  const markup = createCardsMarkup(result);
  if (!markup.length) {
    filters.notFoundRef.classList.remove('hidden');
    filters.ulRef.innerHTML = '';
    return;
  }
  filters.notFoundRef.classList.add('hidden');
  filters.ulRef.innerHTML = markup;
}

async function fetchProducts() {
  const storageSave = localStorage.loadFromLocalStorage(FILTER_KEY);
  const response = await filters.categories.getProducts({
    keyword: storageSave.keyword,
    category: storageSave.categories,
    limit: 9,
  });
  const result = await response.results;
  return result;
}

filters.categories
  .getProductCategories()
  .then(data => {
    data.push('Show all');
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

function checkSearchValue() {
  const keyword = localStorage.loadFromLocalStorage(FILTER_KEY);
  if (!keyword) return;
  filters.inputRef.value = keyword.keyword;
}

function checkStorage() {
  if (!localStorage.loadFromLocalStorage(FILTER_KEY)) {
    localStorage.saveToLocalStorage(FILTER_KEY, {
      keyword: null,
      categories: null,
    });
  }
}
