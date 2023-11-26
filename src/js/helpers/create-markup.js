import  storage  from './local-storage';
import { CART_KEY } from './storage-keys';



      function createCartMarkup(products) {
        const markupCartArray = products.map(({img, name, category, size, price, _id}) => {
            return `
            <li class="products-item" id="${_id}">
            <div class="cart-product-img-container">
              <img
                src="${img}"
                alt="${name}"
              />
            </div>
            <div class="product-info">
              <h3 class="cart-product-name">${name}</h3>
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
              <p class="cart-product-price">${price}</p>
            </div>
            <button type="button" data-id="${_id}" class="cart-delete-btn">
              <svg class="icon-delete-product">
                <use href="./images/icons.svg#icon-close"></use>
              </svg>
            </button>
          </li>
            `;
        });
    
        return markupCartArray.join('');
    }
    
    function createCardsMarkup (products) {
        const markupCardArray = products.map(({img, name, category, size, popularity, price, _id}) => {
           
            const isInCart = storage.loadFromLocalStorage(CART_KEY);
            let paste = '';
    
    
    if (isInCart && isInCart.some(item => item._id === _id)) {
      paste = '<svg class="cart_svg" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>';
    } else {
      paste = '<svg class="cart_svg" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';
    }

            return `
            <li class="card" id = "${_id}">
            <div class="bg_img">
              <img src="${img}" class="img_card" alt="${name}" />
            </div>
            <div class="text_wrapped">
              <h3 class="text_name_prod">${name}</h3>
              <div class="wrapper_info">
                <p class="text_title">Category:</p>
                <span class="text_subtitle">${category}</span>
                <p class="text_title">Size:</p>
                <span class="text_subtitle">${size}</span>
                <p class="text_title">Popularity:</p>
                <span class="text_subtitle">${popularity}</span>
              </div>
            </div>
            <div class="wrapper_price">
              <span class="text_price">${price}</span>
              <span>
                ${paste}
              </span>
            </div>
          </li>
            `;
        });
    
        return markupCardArray.join('');
    }
    function createModalMarkup (products) {
        const markupModalArray = products.map(({img, name, category, size, popularity, price, desc, _id}) => {
        
            const isInCart = storage.loadFromLocalStorage(CART_KEY);
            let paste = '';
    
    
    if (isInCart && isInCart.some(item => item._id === _id)) {
      paste = '<svg class="modal-btn-icon" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>';
    } else {
      paste = '<svg class="modal-btn-icon" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';
    }
            
            return `
            <div class="backdrop is-hidden" data-modal id = "${_id}">
              <div class="modal">
                <button type="button" class="modal-close-btn" data-modal-close>
                  <svg class="modal-close-icon">
                    <use href="./images/icons.svg#icon-close"></use>
                  </svg>
                </button>
                <div class="modal-content">
                  <div class="modal-main-row">
                    <div class="modal-image-bg">
                      <img src="${img}" alt="${name}" class="modal-image" />
                    </div>
                    <div class="modal-description-wrapper">
                      <div class="modal-list-wrapper">
                        <h3 class="modal-product-name">Pumpkin</h3>
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
                    <h3 class="modal-price">${price}</h3>
                    <button type="button" class="modal-btn" data-id="${_id}>
                      Add to
                      ${paste}
                    </button>
                  </div>
                </div>
              </div>
            `;
        });
        return markupModalArray.join('');
    }

    function createPopularProductsMarkup (products) {
        const markupPopularProductsArray = products.map(({img, name, category, size, popularity, _id}) => {

            const isInCart = storage.loadFromLocalStorage(CART_KEY);
            let paste = '';
    
    
    if (isInCart && isInCart.some(item => item._id === _id)) {
      paste = '<svg class="popular-bascket" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>';
    } else {
      paste = '<svg class="popular-bascket" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';
    }

            return `
            <li class="popular-item" id = "${_id}"><div class="product-card">
            <div class="popular-product-icon"><img src="${img}" alt="${name}"></div>
            <!-- Картки зображень -->
            <div class="product-details">
                <p class="popular-name">${name}</p>
            <p class="popular-text">Category: <span class="popular-span popular-category">${category}</span></p>
            <div class="row">
            <p class="popular-text">Size: <span class="popular-span popular-size">${size}</span></p>
            <p class="popular-text">Popularity: <span class="popular-span popular-size">${popularity}</span></p>
        </div>
            </div>
            <button class="add-to-bascket" data-id="${_id}>${paste}</button>
          </div></li>
            `;
        });
    
        return markupPopularProductsArray.join('');
    }
    

    function createDiscountProductsMarkup (products) {
        const markupDiscountProductsArray = products.map(({img, name, _id}) => {

            const isInCart = storage.loadFromLocalStorage(CART_KEY);
            let paste = '';
    
    
    if (isInCart && isInCart.some(item => item._id === _id)) {
      paste = '<svg class="discount-icon" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>';
    } else {
      paste = '<svg class="discount-icon" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';
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
                <button type="button" class="button discount-btn" data-id="${_id}>
                  ${paste}
                </button>
              </div>
            </div>
            <img
              src="./images/discount.png"
              alt="discount sticker"
              class="discount-sticker"
            />
          </li>
            `;
        });
    
        return markupDiscountProductsArray.join('');
    }
    export {createCardsMarkup, createCartMarkup, createModalMarkup, createPopularProductsMarkup, createDiscountProductsMarkup}