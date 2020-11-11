import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'
import Skills from './components/Skills/index'
import Card from './components/Skills/Card/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Description />
      <Skills>
        <Card title="JavaScript" />
      </Skills>
    </BrowserRouter>
  );
}

export default App;
