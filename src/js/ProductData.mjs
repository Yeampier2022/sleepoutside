function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path);
  }

  async findProductById(id) {
    const products = await convertToJson(await this.getData());
    return products.find((item) => item.Id === id);
  }
}
