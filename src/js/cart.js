import Scrollbar from 'smooth-scrollbar';
Scrollbar.init(document.querySelector('#my-scrollbar'), {
  alwaysShowTracks: true,
});

function createCartMarkup(products) {
  const markupCartArray = products.map(
    ({ _id, img, name, category, size, price }) => {
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
                  <p class="cart-product-price">${price}</p>
                </div>
                <button type="button" data-id="${_id}" class="cart-delete-btn">
                  <svg class="icon-delete-product">
                    <use href="./images/icons.svg#icon-close"></use>
                  </svg>
                </button>
              </li>
            `;
    }
  );

  return markupCartArray.join('');
}
