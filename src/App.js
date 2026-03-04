import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import Addproduct from "./components/addproduct";
import Viewproduct from "./components/viewproduct";

import Updateanddeleteproducts from "./components/updateanddeleteproduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Addproduct/>} />
          <Route path="/view" element={<Viewproduct/>} />
          <Route path="/updatedelete" element={<Updateanddeleteproducts/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
