import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Admin } from "./Pages/Admin";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="container grid">
          <h1 className="navbar-item">Logo</h1>
          <h1 className="navbar-item">config</h1>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
