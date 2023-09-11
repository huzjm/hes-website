
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Homepage from './Pages/Homepage';
import TopBar from './Layout/TopBar';
import HeatExchanger from './Pages/HeatExchanger';

import Supplies from './Pages/Supplies';
import FloatingButton from './Layout/FloatingButton';

import Gratings from './Pages/Gratings';
import Footer from './Layout/Footer';
import StorageTanks from './Pages/StorageTanks';
import BulkMovement from './Pages/BulkMovement';
import PreFabricated from './Pages/PreFabricated';
import Portable from './Pages/Portable';


import Navbar from './Layout/NavBar';

import ShopInShop from './Pages/ShopInShop';
import ContactUs from './Pages/ContactUs';


const App = () => {
  
  return (
    
    <Router>
      
    <div className="app">
      
      <TopBar/>
      <Navbar/>

      
    <div className="logo-sidebar-container">
      
      
      
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
         <Route path="/ShopInShop" element = {<ShopInShop/>}/>
           <Route path="/heatexchanger" element={<HeatExchanger />} />
           
           <Route path="/supplies" element={<Supplies />} />
         
           <Route path="/gratings" element={<Gratings />} />
        
           <Route path="/storage" element={<StorageTanks />} />
          
           <Route path="/bulkmovement" element={<BulkMovement />} />
           <Route path="/prefab" element={<PreFabricated />} />
           
           <Route path="/portable" element={<Portable />} />
          
        </Routes>
        </div>
        <FloatingButton />
        <Footer />
    </div>
     </Router>
  );
};

export default App;