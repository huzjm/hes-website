import React from 'react';
import InfoPageTemplate from './InfoPageTemplate';
import './App.css'
const Gratings = () => {
  const title = 'Gratings';
  const content = (
    <div>
      <p>
      Welcome to our Gratings Section

Explore our range of durable and versatile gratings designed to enhance safety and functionality across various industries. HES takes pride in delivering top-quality gratings, whether you need sturdy MS gratings for heavy loads or corrosion-resistant SS gratings for hygienic environments. Click on the subheadings below to delve into specific types of gratings we offer:
      </p>
      {/* Add more content */}
    </div>
  );
  const images = ['/image/gratings1.jpg','/image/gratings2.jpg','/image/gratings3.jpg','/image/gratings4.jpg'];
  const subMenus = [
    { label: 'MS Gratings', path: '/gratings/ms' },
    { label: 'SS Gratings', path: '/gratings/ss' },
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplate title={title} content={content} images={images} subMenus={subMenus} mainPath='/gratings' /></div>
  );
};

export default Gratings;
