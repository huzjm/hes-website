import React from 'react';
import './App.css'
import SubMenuTemplate from './SubMenuTemplate';
const PressureVessel = () => {
  const title = 'Storage Tanks';
  const mainPath='/storage'; 
  const subPath='/storage/pressurevessel'; 
  const submenuTitle='Pressure Vessels';
  const content = (
    <div>
      <p>
      Experience the pinnacle of pressure vessel technology with HES. Our pressure vessels are designed to withstand varying pressure levels, offering unmatched safety and reliability. Whether it's for chemical processing or industrial applications, our vessels are crafted to excel in demanding environments.

Feel free to integrate these content sections into your website, customizing them as needed to match your branding and emphasize your company's expertise and capabilities.
</p>
     
    </div>
  );
  const images = '/image/pressurevessel.jpg';
  

  return (
   <div className='content'> <SubMenuTemplate mainHeading={title} content={content} image={images}  mainPath={mainPath} subPath={subPath} submenuTitle={submenuTitle} /></div>
  );
};

export default PressureVessel;