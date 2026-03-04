import React, { useEffect, useState } from "react";

import Productservice from "../services/Productservice";
import { Link } from "react-router-dom";
function Viewproduct() {
  const [product, setproduct] = useState([]);
const [id, setId] = useState("");
  useEffect(() => {
    loadProducts();
  }, []);


const searchById = () => {
  Productservice.getProductById(id)
    .then((res) => {
      setproduct([res.data]); // show only one product
    })
    .catch((err) => {
      alert("Product not found");
    });
};
  const loadProducts = () => {
    Productservice.getProducts()
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📋 Product List</h2>
<input 
  type="text"
  value={id}
  onChange={(e) => setId(e.target.value)}
  placeholder="Enter Product ID"
/>

<button onClick={searchById}>Search</button>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Cost</th>
            {/* <th>Action</th> */}
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
     <div className="d-grid gap-2 col-3 mx-auto mt-4">
        <Link to="/Home" className="btn btn-primary text-center">
          Back to home
        </Link>
      </div>

</div>

  );
}

export default Viewproduct;