import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './component/3-Organisms/Home/Home';
import SideMenu from './component/3-Organisms/SideMenu/SideMenu';
import Header from './component/3-Organisms/Header/Header';
import Footer from './component/3-Organisms/Footer/Footer';

import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      {isOpen && <SideMenu />}
      <main className="main">
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
