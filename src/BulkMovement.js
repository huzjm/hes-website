import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const BulkMovement = () => {
  const title = 'Bulk Movement';
  const content = (
    <div>
      <p>
      Welcome to our Bulk Movement Section

Efficiently handle your material transport needs with HES's range of bulk movement solutions. From conveyors to hoppers and bucket elevators, our products are designed to streamline your processes and enhance productivity. Click on the subheadings below to explore specific types of bulk movement equipment:


      </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/bulk1.jpg','/image/bulk4.jpg','/image/bulk5.jpg','/image/bulk7.jpg'];
  const subMenus = [
    { label: 'Conveyors', path: '/bulkmovement/conveyors' },
    { label: 'Hoppers', path: '/bulkmovement/hoppers' },
    { label: 'Bucket Elevators', path: '/bulkmovement/bucketelevators' },
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images} subMenus={subMenus} mainPath='/bulkmovement'/></div>
  );
};

export default BulkMovement;
