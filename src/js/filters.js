import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';

const product = new ProductsAPI();

// product.getProductCategories().then(data => console.log(data));

const arr = ['apple', 'orange', 'banana'];

let test = arr.map(el => {
  return {
    text: el,
    value: el,
  };
});

const select = new SlimSelect({
  label: 'label',
  select: '#categories',
  settings: {
    showSearch: false,
  },
});

select.setData([{ placeholder: true, text: 'Categories' }, ...test]);
