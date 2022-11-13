import { Route, Routes } from 'react-router-dom';
import './App.css';
import Address from './components/address/Address';
import Cart from './components/cart/Cart';
import OTP from './components/otp/OTP';
import Payment from './components/payment/Payment';
import Summary from './components/summary/Summary';

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
