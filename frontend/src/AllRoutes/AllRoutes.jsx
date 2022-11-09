import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import PaymentSuccess from "../Pages/PaymentSuccessPage";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
};
// Category

export default AllRoutes;
