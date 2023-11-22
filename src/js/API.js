import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export class ProductsAPI {
  static options = {
    page: 1,
    limit: 5,
    keyword: '',
    category: '',
    byABC: false,
    byPrice: false,
    byPopularity: false,
    id:'',
  };

  async getProducts() {
    const response = await axios.get('/products', {
      params: {
        page: this.options.page,
        limit: this.options.limit,
        keyword: this.options.keyword,
        category: this.options.category,
        byABC: this.options.byABC,
        byPrice: this.options.byPrice,
        byPopularity: this.options.byPopularity,
      },
    });
    return response.data;
  }

  async getPopularProducts() {
    const response = await axios.get('/products/popular', {
      params: {
        page: this.options.page,
        limit: this.options.limit,
        keyword: this.options.keyword,
        category: this.options.category,
        byABC: this.options.byABC,
        byPrice: this.options.byPrice,
        byPopularity: this.options.byPopularity,
      },
    });
    return response.data;
  }

  async getDiscountProducts() {
    const response = await axios.get('/products/discount', {
      params: {
        page: this.options.page,
        limit: this.options.limit,
        keyword: this.options.keyword,
        category: this.options.category,
        byABC: this.options.byABC,
        byPrice: this.options.byPrice,
        byPopularity: this.options.byPopularity,
      },
    });
    return response.data;
  }

  async getProductCategories() {
    const response = await axios.get('/products/categories', {
      params: {
        page: this.options.page,
        limit: this.options.limit,
        keyword: this.options.keyword,
        category: this.options.category,
        byABC: this.options.byABC,
        byPrice: this.options.byPrice,
        byPopularity: this.options.byPopularity,
      },
    });
    return response.data;
  }

  async getProductById(id) {
    const response = await axios.get(`/products/${id}`, {
      params: {
        page: this.options.page,
        limit: this.options.limit,
        keyword: this.options.keyword,
        category: this.options.category,
        byABC: this.options.byABC,
        byPrice: this.options.byPrice,
        byPopularity: this.options.byPopularity,
        id: this.options.id,
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
