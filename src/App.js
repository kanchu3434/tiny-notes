import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Addnote from './view/Addnote/Addnote';
import Home from './view/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-note' element={<Addnote />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
