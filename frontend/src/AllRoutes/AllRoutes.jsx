import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Covid19 from "../Pages/Covid19";
import HomePage from "../Pages/HomePage";

import PaymentSuccess from "../Pages/PaymentSuccessPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/covid" element={<Covid19 />} />
      </Routes>
    </>
  );
};
// Category

export default AllRoutes;
