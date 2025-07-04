import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/kids" element={<KidsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;