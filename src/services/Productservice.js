import axios from "axios";

const BASE_URL = "/api/v1";

class ProductService {
  getProducts() {
    return axios.get(`${BASE_URL}/stlist`);
  }

  getProductById(id) {
    return axios.get(`${BASE_URL}/students/${id}`);
  }

  addproduct(product) {
    return axios.post(`${BASE_URL}/insertStudent`, product);
  }

  updateProduct(id, products) {
    return axios.post(`${BASE_URL}/updatestudent/${id}`, products);
  }

  deleteProduct(id) {
    return axios.delete(`${BASE_URL}/deletestudent/${id}`);
  }
}

export default new ProductService();