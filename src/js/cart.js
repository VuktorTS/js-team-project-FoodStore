import Scrollbar from 'smooth-scrollbar';
Scrollbar.init(document.querySelector('#my-scrollbar'), {
  alwaysShowTracks: true,
});
import { ProductsAPI } from './helpers/food-api';
const productsApi = new ProductsAPI();
productsApi.getProducts({ category: 'Prepared_Foods' }).then(res => {
  console.log('res: ', res);
});
console.log('ok');
