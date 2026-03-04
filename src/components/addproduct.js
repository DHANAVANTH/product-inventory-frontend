import { useState } from "react";
import Productservice from "../services/Productservice";
import { Link } from "react-router-dom";

function Addproduct({ onProductAdded }) {
  const [product, setproduct] = useState({ sname: "", brand: "", cost: "" });

  const handleChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Productservice.addproduct(product).then(() => {
      alert("product added successfully!");
      if (onProductAdded) onProductAdded();
      setproduct({ sname: "", brand: "", cost: "" });
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">➕ Add Product</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="sname"
                  placeholder="Enter Product name"
                  value={product.sname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  placeholder="Enter Brand"
                  value={product.brand}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">cost</label>
                <input
                  type="number"
                  className="form-control"
                  name="cost"
                  placeholder="Enter cost"
                  value={product.cost}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Save product
                </button>
              </div>
<div class="d-grid gap-8 col-3 mx-auto mt-3">
   <Link to="/Home"class="btn btn-primary" type="button">    Back to home</Link>
 </div>
           
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
