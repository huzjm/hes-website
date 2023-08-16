
import './App.css';
import { NavLink,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Homepage from './Homepage';
import TopBar from './TopBar';
import HeatExchanger from './HeatExchanger';
import PressureVessel from './PressureVessel';
import Supplies from './Supplies';
import FloatingButton from './FloatingButton';
import ShellandTube from './ShellandTube';
import PlateFin from './PlateFin';
import MSGratings from './MSGratings';
import SSGratings from './SSGratings';
import Gratings from './Gratings';
const App = () => {

  return (
    <Router>
    <div className="app">
      <TopBar/>
    <div className="logo-sidebar-container">
      
      <Sidebar  />
      
      <Routes>
          <Route path="/" element={<Homepage />} />
         
           <Route path="/heat-exchanger" element={<HeatExchanger />} />
           <Route path="/heat-exchanger/shellandtube" element={<ShellandTube />} />
           <Route path="/heat-exchanger/platefin" element={<PlateFin />} />
           <Route path="/supplies" element={<Supplies />} />
           <Route path="/pressurevessel" element={<PressureVessel />} />
           <Route path="/gratings" element={<Gratings />} />
           <Route path="/gratings/MS" element={<MSGratings />} />
           <Route path="/gratings/SS" element={<SSGratings />} />
        </Routes>
        </div>
        <FloatingButton />
    </div>
     </Router>
  );
};

export default App;