import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components

import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
