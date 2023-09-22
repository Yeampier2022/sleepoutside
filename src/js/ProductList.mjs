import { renderListWithTemplate } from './utils.mjs';

// && product.Id = '985PR' && product.Id = '344YJ'

function productCardTemplate(product) {
  if (product.Id == '880RR' || product.Id == '985RF' || product.Id == '344YJ' || product.Id == '985PR') {
    return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}&category=${product.category}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
  }
}

    // 1 Write a method in productList.js that will filter our list of products to just the four (4) we need.

    
    // 2 Use that method to show only those four (4) tents.


export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }



}
