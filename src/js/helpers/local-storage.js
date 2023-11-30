const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const removeFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const addPoductInCart = (keyProduct, keyCart, id) => {
  try {
    const product = loadFromLocalStorage(key).some(({ _id }) => {
      _id === id;
    });
    const productsCart = loadFromLocalStorage(key) ?? [];
    const newProductsCart = productsCart.push(product);
    saveToLocalStorage(key, newProductsCart);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const saveUniqueElements = (key, products = []) => {
  const productStorage = loadFromLocalStorage(key) ?? [];

  if (productStorage.length > 0 && products.length > 0) {
    const map = new Map(
      [...products, ...productStorage].map(item => [item._id, item])
    );
    const uniqueProducts = [...map.values()];
    saveToLocalStorage(key, uniqueProducts);
  } else if (productStorage.length > 0 && products.length === 0) {
    saveToLocalStorage(key, productStorage);
  } else {
    saveToLocalStorage(key, products);
  }
};

export {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
  addPoductInCart,
  saveUniqueElements,
};
