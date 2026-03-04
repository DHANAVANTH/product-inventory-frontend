import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Product Inventory Management System
      </h2>

      <div className="row justify-content-center">

        {/* Add Product */}
        <div className="col-md-4 mb-3">
          <div className="card shadow p-4 text-center">
            <h4>➕ Add Product</h4>
            <p className="text-muted">Create a new product record</p>
            <Link to="/add" className="btn btn-primary mt-2">
              Go
            </Link>
          </div>
        </div>

        {/* View Product */}
        <div className="col-md-4 mb-3">
          <div className="card shadow p-4 text-center">
            <h4>👁 View Product</h4>
            <p className="text-muted">View products</p>
            <Link to="/view" className="btn btn-success mt-2">
              Go
            </Link>
          </div>
        </div>

        {/* Manage Product */}
        <div className="col-md-4 mb-3">
          <div className="card shadow p-4 text-center">
            <h4>🛠 Manage Product</h4>
            <p className="text-muted">Edit or remove product</p>
            <Link to="/updatedelete" className="btn btn-warning mt-2">
              Go
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;