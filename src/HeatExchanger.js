import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const HeatExchanger= () => {
  const title = 'Heat Exchangers';
  const content = (
    <div>
      <p>
      Welcome to our Heat Exchangers Section

Discover our comprehensive range of heat exchanger solutions designed to meet your diverse industrial needs. At HES, we bring decades of experience and expertise to provide efficient, reliable, and innovative heat exchange solutions. From shell and tube heat exchangers to plate and fin heat exchangers, we are committed to delivering the highest quality products that enhance your processes and operations.

Whether you're seeking optimized heat transfer for industrial processes or energy systems, our heat exchangers are engineered to perform at their best. Click on the subheadings below to explore specific types of heat exchangers we offer: </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/shellandtube.jpeg','/image/heatexchanger1.jpg','/image/heatexchanger2.jpg'];
  const subMenus = [
    { label: 'Shell and Tube', path: '/heatexchanger/shellandtube' },
    { label: 'Plate Fin', path: '/heatexchanger/platefin' },
   
    
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images} subMenus={subMenus} mainPath='/heatexchanger'/></div>
  );
};

export default HeatExchanger;