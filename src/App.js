// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Intro from './components/Intro/intro';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default App;
