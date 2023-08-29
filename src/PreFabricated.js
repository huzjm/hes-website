import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const PreFabricated = () => {
  const title = 'Pre-Fabricated';
  const content = (
    <div>
      <p>
      Welcome to our Pre-fabricated Structures Section

Experience the convenience and quality of pre-fabricated structures with HES. From sheds to railings and monkey ladders, our products are designed to meet both functional and aesthetic requirements. Click on the subheadings below to explore specific types of pre-fabricated structures:
      </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/prefab1.jpg','/image/prefab2.jpg'];
  const subMenus = [
    { label: 'Sheds', path: '/prefab/sheds' },
    { label: 'Railings', path: '/prefab/railings' },
    { label: 'Monkey Ladders', path: '/prefab/ladders' },
    
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images} subMenus={subMenus} mainPath='/prefab'/></div>
  );
};

export default PreFabricated;
