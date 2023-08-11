
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import News from './components/News'
import Contact from './pages/Contact';
import About from './pages/About';
import General from './pages/General'
import Business from './pages/Business'
import Entertainment from './pages/Entertainment'
import Health from './pages/Health'
import Science from './pages/Science'
import Sports from './pages/Sports'
import Technology from './pages/Technology'
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
       
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/general" element={<General />} />  
        <Route exact path="/business" element={<Business />} />  
        <Route exact path="/entertainment" element={<Entertainment />} />     
        <Route exact path="/health" element={<Health />} />  
        <Route exact path="/science" element={<Science />} />  
        <Route exact path="/sports" element={<Sports />} /> 
        <Route exact path="/technology" element={<Technology />} />    
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />       
        </Routes>
      </div>
      </Router>
    )
  }
}


