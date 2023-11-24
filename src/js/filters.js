import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import 'npm:slim-select/dist/slimselect.css';
import '../css/index.css';

const product = new ProductsAPI();

const select = new SlimSelect({
  label: 'label',
  select: '#categories',
  settings: {
    showSearch: false,
  },
});

const arr = ['apple', 'orange', 'banana'];

let test = arr.map(el => {
  return {
    text: el,
    value: el,
  };
});

select.setData([{ placeholder: true, text: 'Categories' }, ...test]);
