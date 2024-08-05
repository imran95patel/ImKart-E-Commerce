import React from "react";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Product from "./components/Admin/Product";
import Orders from "./components/Admin/Orders";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin">
            <Route path="products" element={<Product />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
