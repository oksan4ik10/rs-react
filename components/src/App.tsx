import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

import { Mainpage } from './pages/Mainpage';
import { About } from './pages/About';
import { Notfound } from './pages/404';

import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
