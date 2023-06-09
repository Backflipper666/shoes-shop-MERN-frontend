import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components

import Home from './pages/Home';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';
import ShoesItem from './components/ShoesItem/ShoesItem';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<ShoesItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div className="app__footer-wrapper">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
