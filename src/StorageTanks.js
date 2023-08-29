import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const StorageTanks = () => {
  const title = 'Storage Tanks';
  const content = (
    <div>
      <p>
      Welcome to our Storage Tanks Section

Discover reliable and efficient storage solutions to safeguard your liquids and materials. At HES, we offer a diverse range of storage tanks and pressure vessels, built to industry standards and tailored to your requirements. Click on the subheadings below to explore specific types of storage solutions:


      </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/storage1.jpg','/image/storage2.jpg','/image/storage3.jpg'];
  const subMenus = [
    { label: 'Tanks', path: '/storage/tanks' },
    { label: 'Pressure Vessels', path: '/storage/pressurevessel' },
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images} subMenus={subMenus} mainPath='/storage'/></div>
  );
};

export default StorageTanks;
