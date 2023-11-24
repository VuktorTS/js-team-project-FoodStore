const products = 
    [
        {
          "_id": "640c2dd963a319ea671e383b",
          "name": "Ackee",
          "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
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
        const markupCardArray = products.map(({img, name, category, size, popularity, price} = products) => {
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
                <svg class="cart_svg" width="18" height="18">
                  <use href="./images/icons.svg#icon-shopping-cart"></use>
                </svg>
              </span>
            </div>
          </li>
            `;
        });
    
        return markupCardArray.join('');
    }

    export {createCardsMarkup, createCartMarkup}