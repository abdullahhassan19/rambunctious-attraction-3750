import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";

import PaymentSuccess from "../Pages/PaymentSuccessPage";
import AllProductPage from "../Pages/products/AllProductPage";
import SingleProductPage from "../Pages/products/SingleProductPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </>
  );
};
// Category

export default AllRoutes;