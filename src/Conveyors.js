import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const Conveyors = () => {
  const title = 'Conveyors';
  const content = (
    <div>
      <p>
      Discover the power of seamless material transportation with our conveyor systems. Whether it's for assembly lines, warehouses, or production facilities, HES offers a variety of conveyor solutions tailored to your requirements. Our conveyors are engineered for reliability, efficiency, and easy maintenance, ensuring smooth material flow in your operations.</p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/bulk1.jpg'];
  

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images}  mainPath='/bulkmovement' subPath='/bulkmovement/conveyors' submenuTitle='Conveyors' /></div>
  );
};

export default Conveyors;