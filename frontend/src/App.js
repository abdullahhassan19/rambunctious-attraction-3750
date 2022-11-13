import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Summary from './components/summary/Summary';
import Address from './components/address/Address';
import Payment from './components/payment/Payment';
import OTP from './components/otp/OTP';


function App() {
  return (
    <div className="App">
    <Routes >
      <Route path='/cart' element={<Cart />} />
      <Route path='/summary' element={<Summary />} />
      <Route path='/address' element={<Address />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/payment/otp' element={<OTP />} />
    </Routes>
    </div>
  );
}

export default App;
