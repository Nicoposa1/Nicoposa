import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'
import Skills from './components/Skills/index'
import Courses from './components/Courses/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Description />
      <Skills />
      <Courses />
    </BrowserRouter>
  );
}

export default App;
