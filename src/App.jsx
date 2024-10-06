import React from "react";
import "animate.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AdminProducts from "./components/Admin/Products.jsx";
import Orders from "./components/Admin/Orders";
import Dashboard from "./components/Admin/Dashboard";
import Customers from "./components/Admin/Customers";
import Payments from "./components/Admin/Payments";
import Settings from "./components/Admin/Settings";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Products from "./components/Products.jsx";
import Category from "./components/Category.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import PreGuard from "./components/Guard/PreGuard.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category" element={<Category />} />
          <Route element={<PreGuard />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/contact" element={<Contact />} />

          <Route path="/admin">
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<Settings />} />
            <Route path="auth" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
