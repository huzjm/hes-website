
import './App.css';
import { NavLink,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

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
import Footer from './Footer';
import StorageTanks from './StorageTanks';
import BulkMovement from './BulkMovement';
import PreFabricated from './PreFabricated';
import Portable from './Portable';
import Tanks from './Tanks';
import Conveyors from './Conveyors';
import Hoppers from './Hoppers';
import BucketElevators from './BucketElevators';
import Sheds from './Sheds';
import Railings from './Railings';
import Ladders from './Ladders';

import Navbar from './NavBar';

import ShopInShop from './ShopInShop';
import ContactUs from './ContactUs';
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
           <Route path="/heatexchanger/shellandtube" element={<ShellandTube />} />
           <Route path="/heatexchanger/platefin" element={<PlateFin />} />
           <Route path="/supplies" element={<Supplies />} />
           <Route path="/pressurevessel" element={<PressureVessel />} />
           <Route path="/gratings" element={<Gratings />} />
           <Route path="/gratings/ms" element={<MSGratings />} />
           <Route path="/gratings/ss" element={<SSGratings />} />
           <Route path="/storage" element={<StorageTanks />} />
           <Route path="/storage/tanks" element={<Tanks />} />
           <Route path="/storage/pressurevessel" element={<PressureVessel />} />
           <Route path="/bulkmovement" element={<BulkMovement />} />
           <Route path="/prefab" element={<PreFabricated />} />
           <Route path="/prefab/sheds" element={<Sheds />} />
           <Route path="/prefab/railings" element={<Railings />} />
           <Route path="/prefab/ladders" element={<Ladders />} />
           <Route path="/portable" element={<Portable />} />
           <Route path="/bulkmovement/conveyors" element={<Conveyors />} />
           <Route path="/bulkmovement/hoppers" element={<Hoppers />} />
           <Route path="/bulkmovement/bucketelevators" element={<BucketElevators />} />
        </Routes>
        </div>
        <FloatingButton />
        <Footer />
    </div>
     </Router>
  );
};

export default App;