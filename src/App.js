import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
