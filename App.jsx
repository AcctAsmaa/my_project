import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Purchase from './Pages/Purchase';
import Prime from './Pages/Prime';
import CreateAccount from './Pages/CreateAccount'; 
import PrimePage from './Pages/PrimePage';
import Cart from './Pages/Cart';

import BuyAgain from './Pages/BuyAgain'; 
import Nav from './components/Nav'; 
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
            <Nav /> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />  
          <Route path="/BuyAgain" element={<BuyAgain />} />
          <Route path="/PrimePage" element={<PrimePage />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/Prime" element={<Prime />} />
        </Routes>
      </div>
      <Footer/>

    </Router>
  );
}

export default App;
