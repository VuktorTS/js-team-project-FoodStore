import SlimSelect from 'slim-select';
import { ProductsAPI } from './helpers/food-api';
import 'npm:slim-select/dist/slimselect.css';
import '../css/index.css';

const filters = {
  categories: new ProductsAPI(),
  select: new SlimSelect({
    events: {
      beforeChange: newVal => {
        console.log(newVal[0].value);
      },
    },
    select: '#categories',
    settings: {
      showSearch: false,
      placeholderText: 'Categories',
    },
  }),
};

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
    filters.select.setData([
      { placeholder: true, text: 'Categories' },
      ...data,
    ]);
  });
