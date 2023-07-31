
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import News from './components/News'
import Contact from './pages/Contact';
import About from './pages/About';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
       
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />       
        </Routes>
      </div>
      </Router>
    )
  }
}


