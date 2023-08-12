import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <NavLink to="/">
          <img src='/image/Huzefa Engineering-01color.png' alt="Logo" className="logo" />
        </NavLink>
      </div>
      <h2>Products</h2>
      <ul>
        <li>
          <NavLink to="/products/heat-exchanger" activeClassName="active" className="option-box">
          {/* <img src='/image/heatexchanger.png'/> */}
          <span>Heat Exchanger</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/pressurevessel" activeClassName="active" className="option-box">
            <span>Pressure Vessel</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/supplies" activeClassName="active" className="option-box">
            <span>Supplies</span>
          </NavLink>
        </li>
        {/* Add more products as needed */}
      </ul>
      
    </div>
  );
};

export default Sidebar;