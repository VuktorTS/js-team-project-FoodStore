import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class ProductsAPI {
  constructor() {}

  async getProducts(newParametrs) {
    const response = await axios.get('/products', {
      params: {
        ...newParametrs,
      },
    });
    return response.data;
  }

  async getPopularProducts(newParametrs) {
    const response = await axios.get('/products/popular', {
      params: {
        ...newParametrs,
      },
    });
    return response.data;
  }

  async getDiscountProducts() {
    const response = await axios.get('/products/discount');
    return response.data;
  }

  async getProductCategories() {
    const response = await axios.get('/products/categories');
    return response.data;
  }

  async getProductById(id) {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  }

  async createOrder(orderData) {
    const response = await axios.post('/orders', orderData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  async subscribeToNewProducts(subscriptionData) {
    const response = await axios.post('/subscription', subscriptionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}
