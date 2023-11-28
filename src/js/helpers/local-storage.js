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
export {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
  addPoductInCart,
};
