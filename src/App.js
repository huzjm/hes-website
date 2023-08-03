
import './App.css';
import { NavLink,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Homepage from './Homepage';
import TopBar from './TopBar';
import HeatExchanger from './HeatExchanger';
import PressureVessel from './PressureVessel';
import Supplies from './Supplies';
const App = () => {

  return (
    <Router>
    <div className="app">
      <TopBar/>
    <div className="logo-sidebar-container">
      
      <Sidebar  />
      
      <Routes>
          <Route path="/" element={<Homepage />} />
         
           <Route path="/products/heat-exchanger" element={<HeatExchanger />} />
           <Route path="/products/supplies" element={<Supplies />} />
           <Route path="/products/pressurevessel" element={<PressureVessel />} />
        </Routes>
        </div>
    </div>
     </Router>
  );
};

export default App;