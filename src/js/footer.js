import { ProductsAPI } from './helpers/food-api';

const footerRefs = {
  formBtn: document.querySelector('.footer-form-btn'),
  form: document.querySelector('.footer-form'),
};
console.log('footer');
footerRefs.formBtn.addEventListener('click', onFormBtnClick);
async function onFormBtnClick(e) {
  e.preventDefault();
  // console.log('on btn click');
  // try {
  const inputData = footerRefs.form.elements[0].value;
  // console.dir(inputData);
  const subscriptionObj = {
    email: inputData,
  };
  // console.log(subscriptionObj);
  const api = new ProductsAPI();
  console.log(api);

  // const response = await api.getProductsByName(JSON.stringify(subscriptionObj));

  // console.dir(response);
  // } catch (error) {
  //   console.log(error);
  // }
}
