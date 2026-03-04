import React, { useEffect, useState } from "react";
import Productservice from "../services/Productservice";
import { Link } from "react-router-dom";

function Viewproduct() {

  const [product, setproduct] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    Productservice.getProducts()
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => console.error(err));
  };

  const searchById = () => {
    if (!id) {
      alert("Please enter Product ID");
      return;
    }

    Productservice.getProductById(id)
      .then((res) => {
        setSearchedProduct(res.data);
      })
      .catch(() => {
        alert("Product not found");
        setSearchedProduct(null);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📋 Product List</h2>

      {/* 🔍 Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Product ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control w-25 d-inline"
        />
        <button
          onClick={searchById}
          className="btn btn-primary ms-2"
        >
          Search
        </button>
      </div>

      {/* 🔎 Display Searched Product */}
      {searchedProduct && (
        <div className="card p-3 mb-4">
          <h5 className="mb-3">Searched Product</h5>
          <p><strong>ID:</strong> {searchedProduct.id}</p>
          <p><strong>Name:</strong> {searchedProduct.sname}</p>
          <p><strong>Brand:</strong> {searchedProduct.brand}</p>
          <p><strong>Cost:</strong> {searchedProduct.cost}</p>
        </div>
      )}

      {/* 📋 Full Product Table */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          {product.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.sname}</td>
              <td>{s.brand}</td>
              <td>{s.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔙 Back Button */}
      <div className="d-grid gap-2 col-3 mx-auto mt-4">
        <Link to="/Home" className="btn btn-primary text-center">
          Back to Home
        </Link>
      </div>

    </div>
  );
}

export default Viewproduct;