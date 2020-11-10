import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Description />
    </BrowserRouter>
  );
}

export default App;
