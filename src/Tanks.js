import React from 'react';
import SubMenuTemplate from './SubMenuTemplate';

const Tanks = () => {
  return (
    <div className='content'>  <SubMenuTemplate
    subPath='/storage/tanks'
    mainPath='/storage'
      mainHeading="Storage Tanks"
      submenuTitle="Tanks"
      image='/image/storage1.jpg'
      content="Our tanks are meticulously engineered to accommodate various liquids and volumes, ensuring safe storage in a range of industries. With a commitment to durability and precision, HES delivers tanks that meet regulatory standards while providing seamless integration into your operations."
    /></div>
  );
};

export default Tanks;