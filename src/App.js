import React from 'react';

import {BrowserRouter, Router, Route} from 'react-router-dom'


import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import Description from './components/Description/index'
import Skills from './components/Skills/index'
import Courses from './components/Courses/index'
import Projects from './components/Projects/index'
import Contact from './components/Contact/index'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Home />
        <Description />
        <Skills />
        <Courses />
        <Projects />
        <Contact />
    </BrowserRouter>
  );
}

export default App;
