import { ProductsAPI } from './helpers/food-api';

export const footerRefs = {
  formBtn: document.querySelector('.footer-form-btn'),
  form: document.querySelector('.footer-form'),
};
footerRefs.formBtn.addEventListener('click', onFormBtnClick);
async function onFormBtnClick(e) {
  e.preventDefault();

  try {
    const inputData = footerRefs.form.elements[0].value;
    const subscriptionObj = {
      email: inputData,
    };

    const api = new ProductsAPI();
    const response = await api.subscribeToNewProducts(
      JSON.stringify(subscriptionObj)
    );

    customAlert.alert(`${response.message}`);
    document
      .querySelector('.pure-material-button-contained')
      .addEventListener('click', ok);
  } catch (err) {
    const errorMessage = err.response.data.message;

    customAlert.alert(errorMessage);
    document
      .querySelector('.pure-material-button-contained')
      .addEventListener('click', ok);
  }
}

// Custom alert Function=========================================
export function CustomAlert() {
  this.alert = function (message) {
    document.body.innerHTML =
      document.body.innerHTML +
      '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');

    let winH = window.innerHeight;
    dialogoverlay.style.height = winH + 'px';
    var bodyHeight = document.body.clientHeight;
    dialogbox.style.bottom = 0 - bodyHeight + winH * 1.5 + 'px';

    dialogoverlay.style.display = 'block';
    dialogbox.style.display = 'block';

    document.getElementById('dialogboxbody').innerHTML = message;
    document.getElementById('dialogboxfoot').innerHTML =
      '<button class="pure-material-button-contained active">OK</button>';
  };
}

let customAlert = new CustomAlert();
export function ok() {
  document.getElementById('dialogbox').style.display = 'none';
  document.getElementById('dialogoverlay').style.display = 'none';
}
// Custom alert Function End=========================================
