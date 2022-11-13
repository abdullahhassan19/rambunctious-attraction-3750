import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Covid19 from "../Pages/Covid19";
import HomePage from "../Pages/HomePage";
import { LabTests } from "../Pages/LabTestsPage/LabTests";

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
        <Route path="/labtests" element={<LabTests />} />
        <Route path="/askdoctor" element={<LabTests />} />
        <Route path="/ayurveda" element={<LabTests />} />
        <Route path="/careplan" element={<LabTests />} />
        <Route path="/covid" element={<Covid19 />} />
      </Routes>
    </>
  );
};


export default AllRoutes;