import React from 'react';

import {BrowserRouter} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'
import Skills from './components/Skills/index'
import Courses from './components/Courses/index'
import Projects from './components/Projects/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Description />
      <Skills />
      <Courses />
      <Projects />
    </BrowserRouter>
  );
}

export default App;
