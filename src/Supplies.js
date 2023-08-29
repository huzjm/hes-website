import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const Supplies= () => {
  const title = 'General Supplies';
  const content = (
    <div>
      <p>
      Welcome to our General Supplies Section

Find a comprehensive range of general supplies to support your fabrication needs. HES offers a selection of high-quality products that complement your operations, from welding equipment to essential hardware. Explore our offerings and enhance your work environment with reliable tools and supplies. </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/supplies1.jpg','/image/supplies2.jpg','/image/supplies3.jpg'];
  

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images}  mainPath='/supplies'/></div>
  );
};

export default Supplies;