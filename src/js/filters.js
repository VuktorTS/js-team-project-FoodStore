import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import { FILTER_KEY } from './helpers/storage-keys';
import localStorage from './helpers/local-storage';
import 'npm:slim-select/dist/slimselect.css';
import '../css/index.css';

const storageSave = localStorage.loadFromLocalStorage(FILTER_KEY);

const filters = {
  categories: new ProductsAPI(),
  inputRef: document.querySelector('filter'),
  formRef: document.querySelector('.form_filters'),
  select: new SlimSelect({
    events: {
      beforeChange: newVal => {
        localStorage.saveToLocalStorage(FILTER_KEY, {
          ...storageSave,
          categories: newVal[0].value,
        });
      },
    },
    select: '#categories',
    settings: {
      showSearch: false,
      placeholderText: getValueCategories(),
    },
  }),
};

filters.formRef.addEventListener('submit', onSubmit);

filters.categories.getProducts('Deli').then(data => console.log(data));
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

function getValueCategories() {
  if (!localStorage.loadFromLocalStorage(FILTER_KEY)) {
    return 'Categories';
  }
  return localStorage.loadFromLocalStorage(FILTER_KEY).categories;
}

function onSubmit(e) {
  e.preventDefault();
  const { search } = filters.formRef;
  localStorage.saveToLocalStorage(FILTER_KEY, {
    ...storageSave,
    search: search.value,
  });
}
