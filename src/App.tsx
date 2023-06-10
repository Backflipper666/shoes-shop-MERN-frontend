import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components

import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Navbar/>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
