import { loadFromLocalStorage } from './local-storage';
import { CART_KEY } from './storage-keys';
import icons from '../../images/icons.svg';
import discount from '../../images/discount.png';
import shoppingBasket from '../../images/yellow-shopping-basket.png';

function createCartMarkup(products) {
  
  if (products.length !== 0) {
    return products
      .map(({ img, name, category, size, price, _id }) => {
        
        return `
            <li class="products-item" id="${_id}">
            <div class="cart-product-img-container">
              <img
                src="${img}"
                alt="${name}"
              />
            </div>
            <div class="product-info">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${name}</h3>
              <button type="button" id="${_id}" aria-label="delete-item" data-id="${_id}" class="cart-delete-btn">
              <svg class="icon-delete-product">
                <use href="${icons}#icon-close"></use>
              </svg>
            </button>
            </div>
              <ul class="product-info-list">
                <li class="product-info-item">
                  <p class="cart-category-text">
                    Category:
                    <span class="cart-category-name">${category}</span>
                  </p>
                </li>
                <li class="product-info-item">
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${size}</span>
                  </p>
                </li>
              </ul>
              <p class="cart-product-price">$${price}</p>
            </div>            
          </li>
            `;
      })
      .join('');
  } else {
    return `
          <div class="cart-empty-product">
            <img
              src="${shoppingBasket}"
              alt="empty"
              class="cart-epmpty-img"
            />
            <p class="cart-empty-title">
              Your basket is <span class=cart-empty-accent> empty...</span>
            </p>
            <p class="cart-empty-text">
              Go to the main page to select your favorite products and add them to the cart.
            </p>
          </div>`;
  }
}

function createCardsMarkup(products) {
  const markupCardArray = products.map(
    ({ img, name, category, size, popularity, price, _id }) => {
      const isInCart = loadFromLocalStorage(CART_KEY);
      let paste = '';
      let isAddedProduct = true;

      if (isInCart && isInCart.some(item => item._id === _id)) {
        paste = `<svg class="cart_svg" width="18" height="18"><use href="${icons}#icon-check"></use></svg>`;
      } else {
        paste = `<svg class="cart_svg" width="18" height="18"><use href="${icons}#icon-shopping-cart"></use></svg>`;
        isAddedProduct = false;
      }

      return `
            <li class="card" id="${_id}">
            <div class="bg_img">
              <img src="${img}" class="img_card" alt="${name}" />
            </div>
            <div class="text_wrapped">
              <h2 class="text_name_prod">${name}</h2>
              <div class="wrapper_info">
                <p class="text_title">Category:</p>
                <span class="text_subtitle">${category}</span>
                <p class="text_title">Size:</p>
                <span class="text_subtitle">${size}</span><br/>
                <p class="text_title">Popularity:</p>
                <span class="text_subtitle">${popularity}</span>
              </div>
            </div>
            <div class="wrapper_price">
              <span class="text_price">$${price}</span>
              <button type="button" id="${_id}" aria-label="add-item" data-id="${_id}" data-is-added=${isAddedProduct} class="products-cart-btn js-btn">
                ${paste}
              </button>
            </div>
          </li>
            `;
    }
  );
  return markupCardArray.join('');
}
function createModalMarkup({
  img,
  name,
  category,
  size,
  popularity,
  price,
  desc,
  _id,
}) {
  const isInCart = loadFromLocalStorage(CART_KEY);
  let isProductAdded = true;
  let textBtnisProductAdded = 'Add to';

  if (isInCart && isInCart.some(item => item._id === _id)) {
    textBtnisProductAdded = 'Remove from';
  } else {
    textBtnisProductAdded = 'Add to';
    isProductAdded = false;
  }

  return `
            
              <div class="modal" data-modal-id = "${_id}">
                <button type="button" id="${_id}" aria-label="close-modal" class="modal-close-btn" data-modal-close>
                  <svg class="modal-close-icon">
                    <use href="${icons}#icon-close"></use>
                  </svg>
                </button>
                <div class="modal-content">
                  <div class="modal-main-row">
                    <div class="modal-image-bg">
                      <img src="${img}" alt="${name}" class="modal-image" />
                    </div>
                    <div class="modal-description-wrapper">
                      <div class="modal-list-wrapper">
                        <h3 class="modal-product-name">${name}</h3>
                        <ul class="modal-list">
                          <li class="modal-list-item">
                            <p>Category: <span class="modal-span">${category}</span></p>
                          </li>
                          <li class="modal-list-item">
                            <p>Size: <span class="modal-span">${size}</span></p>
                          </li>
                          <li class="modal-list-item">
                            <p>Popularity: <span class="modal-span">${popularity}</span></p>
                          </li>
                        </ul>
                      </div>
                      <p class="modal-text">
                        ${desc}
                      </p>
                    </div>
                  </div>
                  <div class="modal-bottom-row">
                    <h3 class="modal-price">$${price}</h3>
                    <button type="button" id="${_id}" aria-label="add-modal" class="modal-btn js-btn" data-is-added=${isProductAdded} data-id="${_id}">
                      ${textBtnisProductAdded}
                     <svg class="cart_svg" width="18" height="18"><use href="${icons}#icon-shopping-cart"></use></svg>
                    </button>
                  </div>
                </div>
              
            `;
}

function createPopularProductsMarkup(products) {
  const markupPopularProductsArray = products.map(
    ({ img, name, category, size, popularity, _id }) => {
      const isInCart = loadFromLocalStorage(CART_KEY);
      let paste = '';
      let isAddToCart = 'add-to-basket';
      let isAddedProduct = true;

      if (isInCart && isInCart.some(item => item._id === _id)) {
        paste = `<svg class="popular-basket" width="18" height="18"><use href="${icons}#icon-check"></use></svg>`;
        isAddToCart += ' add';
      } else {
        paste = `<svg class="popular-basket" width="18" height="18"><use href="${icons}#icon-shopping-cart"></use></svg>`;
        isAddedProduct = false;
      }

      return `
            <li class="popular-item" id = "${_id}"><div class="product-card">
            <div class="popular-product-icon"><img src="${img}" alt="${name}"></div>
            
            <div class="product-details">
                <p class="popular-name">${name}</p>
            <p class="popular-text">Category: <span class="popular-span popular-category">${category}</span></p>
            <div class="row">
            <p class="popular-text">Size: <span class="popular-span popular-size">${size}</span></p>
            <p class="popular-text">Popularity: <span class="popular-span popular-size">${popularity}</span></p>
        </div>
            </div>
            <button class="${isAddToCart} js-btn" id="${_id}" aria-label="popular-add-item" data-is-added=${isAddedProduct} data-id="${_id}">${paste}</button>
          </div></li>
            `;
    }
  );

  return markupPopularProductsArray.join('');
}

function createDiscountProductsMarkup(products) {
  const markupDiscountProductsArray = products.map(
    ({ img, name, _id, price }) => {
      const isInCart = loadFromLocalStorage(CART_KEY);
      let paste = '';
      let isAddedProduct = true;

      if (isInCart && isInCart.some(item => item._id === _id)) {
        paste = `<svg class="cart_svg" width="18" height="18"><use href="${icons}#icon-check"></use></svg>`;
      } else {
        paste = `<svg class="cart_svg" width="18" height="18"><use href="${icons}#icon-shopping-cart"></use></svg>`;
        isAddedProduct = false;
      }
      return `
            <li class="discount-item" id = "${_id}">
            <div class="discount-image-bg">
              <img src="${img}" alt="${name}" class="discount-image" />
            </div>
            <div class="discount-info">
              <h3 class="discount-name">${name}</h3>
              <div class="discount-price-btn-wrapper">
                <p class="discount-price">${price}</p>
                <button type="button" id="${_id}" aria-label="discount-add-item" class="button discount-btn js-btn" data-is-added=${isAddedProduct} data-id="${_id}">
                  ${paste}
                </button>
              </div>
            </div>
            <img
              src="${discount}"
              alt="discount sticker"
              class="discount-sticker"
            />
          </li>
            `;
    }
  );

  return markupDiscountProductsArray.join('');
}
export {
  createCardsMarkup,
  createCartMarkup,
  createModalMarkup,
  createPopularProductsMarkup,
  createDiscountProductsMarkup,
};
