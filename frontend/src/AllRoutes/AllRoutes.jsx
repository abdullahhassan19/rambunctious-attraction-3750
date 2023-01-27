import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Components/address/Address";
import Cart from "../Components/cart/Cart";
import Covid19 from "../Pages/Covid19";
import HomePage from "../Pages/HomePage";
import { LabTests } from "../Pages/LabTestsPage/LabTests";

import PaymentSuccess from "../Pages/PaymentSuccessPage";
import AllProductPage from "../Pages/products/AllProductPage";
import SingleProductPage from "../Pages/products/SingleProductPage";
import Summary from './../Components/summary/Summary';
import Payment from './../Components/payment/Payment';
import OTP from './../Components/otp/OTP';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/labtests" element={<LabTests />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/address' element={<Address />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/payment/otp' element={<OTP />} />
        <Route path="/askdoctor" element={<LabTests />} />
        <Route path="/ayurveda" element={<LabTests />} />
        <Route path="/careplan" element={<LabTests />} />
        <Route path="/covid" element={<Covid19 />} />
      </Routes>
    </>
  );
};


export default AllRoutes;