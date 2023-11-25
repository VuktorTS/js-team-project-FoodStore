import {loadFromLocalStorage} from "./local-storage";

const products = 
    [
        {
          "_id": "640c2dd963a319ea671e383b",
          "name": "Ackee",
          "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
          "desc": "A fruit that is native to West Africa, but is also grown in the Caribbean, and is often used in traditional Jamaican dishes such as ackee and saltfish.",
          "category": "Fresh_Produce",
          "price": 8.99,
          "size": "16 oz",
          "is10PercentOff": false,
          "popularity": 3
        },
        {
          "_id": "640c2dd963a319ea671e365b",
          "name": "Chicken",
          "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e365b.png",
          "price": 9.99,
          "size": "1.5 kg",
          "category": "Meat_&_Seafood",
          "is10PercentOff": false,
          "popularity": 2
        },
        {
          "_id": "640c2dd963a319ea671e3860",
          "name": "Allspice",
          "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3860.png",
          "category": "Pantry_Items",
          "price": 2.99,
          "size": "1.5oz",
          "is10PercentOff": false,
          "popularity": 1
        }
      ]



      function createCartMarkup(products) {
        const markupCartArray = products.map(({img, name, category, size, price} = products) => {
            return `
                <li class="products-item">
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
                        <p class="cart-product-price">$${price}</p>
                    </div>
                </li>
            `;
        });
    
        return markupCartArray.join('');
    }
    
    function createCardsMarkup (products) {
        const markupCardArray = products.map(({_id, img, name, category, size, popularity, price} = products) => {
            const isInCart = loadFromLocalStorage(_id);

            const cartSvg = isInCart
                ? '<svg class="cart_svg" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>'
                : '<svg class="cart_svg" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';    
            
            return `
            <li class="card">
            <div class="bg_img">
              <img src="${img}" class="img_card" alt="" />
            </div>
            <div class="text_wrapped">
              <h3 class="text_name_prod">${name}</h3>
              <div class="wrapper_info">
                <p class="text_title">Category</p>
                <span class="text_subtitle">${category}</span>
                <p class="text_title">Size</p>
                <span class="text_subtitle">${size}</span>
                <p class="text_title">Popularity</p>
                <span class="text_subtitle">${popularity}</span>
              </div>
            </div>
            <div class="wrapper_price">
              <span class="text_price">${price}</span>
              <span>
                ${cartSvg}
              </span>
            </div>
          </li>
            `;
        });
    
        return markupCardArray.join('');
    }
    function createModalMarkup (products) {
        const markupModalArray = products.map(({img, name, category, size, popularity, price, desc} = products) => {
        

            const isInCart = loadFromLocalStorage(_id);

            const cartSvg = isInCart
                ? '<svg class="modal-btn-icon" width="18" height="18"><use href="./images/icons.svg#icon-check"></use></svg>'
                : '<svg class="modal-btn-icon" width="18" height="18"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';
            return `
            <div class="backdrop is-hidden" data-modal>
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
                    <button type="button" class="modal-btn">
                      Add to
                      ${cartSvg}
                    </button>
                  </div>
                </div>
              </div>
            `;
        });
        return markupModalArray.join('');
    }

    function createPopularProductsMarkup (products) {
        const markupPopularProductsArray = products.map(({img, name, category, size, popularity} = products) => {

            const isInCart = loadFromLocalStorage(_id);

            const cartSvg = isInCart
                ? '<svg class="popular-bascket" width="28" height="28"><use href="./images/icons.svg#icon-check"></use></svg>'
                : '<svg class="popular-bascket" width="28" height="28"><use href="./images/icons.svg#icon-shopping-cart"></use></svg>';

            return `
            <li class="popular-item"><div class="product-card">
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
            <button class="add-to-bascket">${cartSvg}</button>
          </div></li>
            `;
        });
    
        return markupPopularProductsArray.join('');
    }
    
    export {createCardsMarkup, createCartMarkup, createModalMarkup, createPopularProductsMarkup, products}