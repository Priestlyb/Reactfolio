import './style.css';
import React from 'react';
import Navbar from './components/nav/nav';
import Layout from './components/page/Layout';
import Truth from './components/page/truth/truth';
import Brickwallengineeringltd from './components/page/brickwallengineeringltd/brickwallengineeringltd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/truth' element={<Truth />} />
          <Route path='/brickwallengineeringltd' element={<Brickwallengineeringltd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
