import React, { useEffect, useState } from "react";
import Productservice from "../services/Productservice";

function Updatedeleteproducts() {

const [products, setProducts] = useState([]);
const [editId, setEditId] = useState(null);
const [editData, setEditData] = useState({
sname: "",
brand: "",
cost: ""
});

useEffect(() => {
loadProducts();
}, []);

const loadProducts = () => {
Productservice.getProducts()
.then(res => setProducts(res.data))
.catch(err => console.error(err));
};

// Delete
const handleDelete = (id) => {
if (window.confirm("Delete product?")) {
Productservice.deleteProduct(id)
.then(() => loadProducts());
}
};

// Edit Mode Enable
const handleEdit = (product) => {
setEditId(product.id);
setEditData({
sname: product.sname,
brand: product.brand,
cost: product.cost
});
};

// Input Change
const handleChange = (e) => {
setEditData({
...editData,
[e.target.name]: e.target.value
});
};

// Update Save
const handleUpdate = (id) => {
Productservice.updateProduct(id, editData)
.then(() => {
alert("Updated Successfully");
setEditId(null);
loadProducts();
});
};

return ( <div className="container mt-4"> <h2>🛠 Update & Delete Products</h2>

```
  <table className="table table-bordered table-hover mt-3">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Cost</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {products.map(p => (
        <tr key={p.id}>
          <td>{p.id}</td>

          {editId === p.id ? (
            <>
              <td>
                <input name="sname" value={editData.sname} onChange={handleChange} />
              </td>

              <td>
                <input name="brand" value={editData.brand} onChange={handleChange} />
              </td>

              <td>
                <input name="cost" value={editData.cost} onChange={handleChange} />
              </td>

              <td>
                <button className="btn btn-success btn-sm me-2"
                  onClick={() => handleUpdate(p.id)}>
                  Save
                </button>
              </td>
            </>
          ) : (
            <>
              <td>{p.sname}</td>
              <td>{p.brand}</td>
              <td>{p.cost}</td>

              <td>
                <button className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(p)}>
                  Edit
                </button>

                <button className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(p.id)}>
                  Delete
                </button>
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  </table>
</div>


);
}

export default Updatedeleteproducts;
