import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import { FILTER_KEY, PRODUCTS_KEY, CATEGORY_KEY } from './helpers/storage-keys';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './helpers/local-storage';
import { createCardsMarkup } from './helpers/create-markup';
import 'npm:slim-select/dist/slimselect.css';
import '../css/index.css';

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
          saveToLocalStorage(FILTER_KEY, {
            keyword: null,
            category: null,
          });
          renderMarkUpProducts();
          return;
        }
        const storageSave = loadFromLocalStorage(FILTER_KEY);
        if (selected !== 'Show all') {
          saveToLocalStorage(FILTER_KEY, {
            ...storageSave,
            category: newVal[0].value,
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
  if (!loadFromLocalStorage(FILTER_KEY)) {
    return null;
  }
  return loadFromLocalStorage(FILTER_KEY).category;
}

function onSubmit(e) {
  e.preventDefault();
  const storageSave = loadFromLocalStorage(FILTER_KEY);
  const { search } = filters.formRef;
  saveToLocalStorage(FILTER_KEY, {
    ...storageSave,
    keyword: search.value,
  });
  renderMarkUpProducts();
}

async function renderMarkUpProducts() {
  const result = await fetchProducts();
  saveToLocalStorage(PRODUCTS_KEY, result);
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
  const storageSave = loadFromLocalStorage(FILTER_KEY);
  const response = await filters.categories.getProducts({
    keyword: storageSave.keyword,
    category: storageSave.category,
    limit: 9,
  });
  const result = await response.results;
  return result;
}

if (!loadFromLocalStorage(CATEGORY_KEY)) {
  filters.categories
    .getProductCategories()
    .then(data => {
      data.push('Show all');
      saveToLocalStorage(CATEGORY_KEY, data);
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
} else {
  const category = loadFromLocalStorage(CATEGORY_KEY);
  const text = loadFromLocalStorage(FILTER_KEY).category;
  const newData = category.map(el => {
    return {
      text: el,
      value: el,
    };
  });
  filters.select.setData([{ placeholder: true, text: text }, ...newData]);
}

function checkSearchValue() {
  const keyword = loadFromLocalStorage(FILTER_KEY);
  if (!keyword) return;
  filters.inputRef.value = keyword.keyword;
}

function checkStorage() {
  if (!loadFromLocalStorage(FILTER_KEY)) {
    saveToLocalStorage(FILTER_KEY, {
      keyword: null,
      category: null,
    });
  }
}
