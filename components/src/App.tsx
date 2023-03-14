import {Routes, Route, Link} from 'react-router-dom';
import reactLogo from './assets/react.svg';
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
        <Route path="/" element={<Layout/>}>
          <Route index element={<Mainpage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>
      </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </div>
  );
}

export default App;
