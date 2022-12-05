import './style.css';
import React from 'react';
import Navbar from './components/nav/nav';
import Layout from './components/page/Layout';
import Truth from './components/page/truth/truth';
import Quotelachemise from './components/page/quotelachemise/quotelachemise';
import Huntamazonfinds from './components/page/huntamazonfinds/huntamazonfinds';
import Gregoryuniversityexitform from './components/page/gregory-university-exit-form/gregory-university-exit-form';
import Up from './components/page/up/up';
import Getcrackerjack from './components/page/getcrackerjack/getcrackerjack';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Layout />} />
          <Route path='/truth' element={<Truth />} />
          <Route path='/quotelachemise' element={<Quotelachemise />} />
          <Route path='/huntamazonfinds' element={<Huntamazonfinds />} />
          <Route path='/gregoryuniversityexitform' element={<Gregoryuniversityexitform />} />
          <Route path='/up' element={<Up />} />
          <Route path='/getcrackerjack' element={<Getcrackerjack />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
