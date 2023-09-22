import { getLocalStorage, getParam, setLocalStorage } from  './utils.mjs';
import dataSource from './ProductData.mjs';

function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

export default class ProductDetails {
  constructor() {
    this.product = {};
  }
  async init() {
    this.product = await new dataSource(getParam('category')).findProductById(getParam('product'));
    this.renderProductDetails('main');
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addToCart.bind(this));
  }
  addToCart() {
    const cart = getLocalStorage('cart-select') || [];
    cart.push(this.product);
    setLocalStorage('cart-select', cart);
  }

  renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
      'afterBegin',
      productDetailsTemplate(this.product)
    );
  }
}

new ProductDetails().init();
