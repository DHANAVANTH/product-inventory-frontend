import axios from "axios";

const BASE_URL = "/api/v1";

class ProductService {
  getProducts() {
    return axios.get(`${BASE_URL}/ptlist`);
  }

  getProductById(id) {
    return axios.get(`${BASE_URL}/products/${id}`);
  }

  addproduct(product) {
    return axios.post(`${BASE_URL}/insertproduct`, product);
  }

  updateProduct(id, products) {
    return axios.post(`${BASE_URL}/updateproduct/${id}`, products);
  }

  deleteProduct(id) {
    return axios.delete(`${BASE_URL}/deleteproduct/${id}`);
  }
}

export default new ProductService();
