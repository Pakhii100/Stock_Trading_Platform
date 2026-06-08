import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path='/support' element={<SupportPage/>} />
    </Routes>
  </BrowserRouter>
);
