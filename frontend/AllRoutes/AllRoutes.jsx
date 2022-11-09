import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PaymentSuccess from "../Pages/PaymentSuccessPage";
import CartPage from "../Pages/CartPage";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
};
// Category

export default AllRoutes;
