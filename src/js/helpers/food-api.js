import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class ProductsAPI {
   constructor () {
    this.page = 1;
    this.limit = 5;
    this.keyword = '';
    this.category = '';
    this.byABC = false;
    this.byPrice = false;
    this.byPopularity = false;
    this.id ='';
  }

  async getProducts() {
    const response = await axios.get('/products', {
      params: {
        page: this.page,
        limit: this.limit,
        keyword: this.keyword,
        category: this.category,
        byABC: this.byABC,
        byPrice: this.byPrice,
        byPopularity: this.byPopularity,
      },
    });
    return response.data;
  }

  async getPopularProducts() {
    const response = await axios.get('/products/popular', {
      params: {
        page: this.page,
        limit: this.limit,
        byPopularity: this.byPopularity,
      },
    });
    return response.data;
  }

  async getDiscountProducts() {
    const response = await axios.get('/products/discount', {
      params: {
        page: this.page,
        limit: this.limit,
        byPrice: this.byPrice,
      },
    });
    return response.data;
  }

  async getProductCategories() {
    const response = await axios.get('/products/categories', {
      params: {
        page: this.page,
        limit: this.limit,
        category: this.category,
      },
    });
    return response.data;
  }

  async getProductById(id) {
    const response = await axios.get(`/products/${id}`, {
      params: {
        page: this.page,
        limit: this.limit,
        id: this.id,
      },
    });
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

// const api = new ProductsAPI();
// const test = api.getProducts();
// console.log("test:", test);