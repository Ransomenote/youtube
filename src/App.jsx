import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/reports" element={Reports} />
          <Route path="/products" element={Products} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
