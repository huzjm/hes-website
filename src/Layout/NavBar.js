import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router
import './NavBar.css'
const menuItems = [
  {
    mainCategory: '/heatexchanger',
    label: 'Heat Exchangers',
    hasSubMenus: true,

    
   
    subMenus: [
      { label: 'Shell and Tube', path: '/heatexchanger/shellandtube' },
      { label: 'Plate Fin', path: '/heatexchanger/platefin' },
      // Add more submenus for Heat Exchangers
    ],
  },
  {
    mainCategory: '/gratings',
    label: 'Gratings',
    hasSubMenus:true,
   
    
    subMenus: [
      { label: 'MS Gratings', path: '/gratings/MS' },
      { label: 'SS Gratings', path: '/gratings/SS' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: '/storage',
    label: 'Storage Tanks',
    hasSubMenus: true,
   
    subMenus: [
      { label: 'Tanks', path: '/storage/tanks' },
      { label: 'Pressure Vessels', path: '/storage/pressurevessel' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: '/bulkmovement',
    label: 'Bulk Movement',
    hasSubMenus: true,
   
    subMenus: [
      { label: 'Conveyors', path: '/bulkmovement/conveyors' },
      { label: 'Hoppers', path: '/bulkmovement/hoppers' },
      { label: 'Bucket Elevators', path: '/bulkmovement/bucketelevators' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: '/prefab',
    label: 'Pre-Fabricated',
    hasSubMenus: true,
    
    subMenus: [
      { label: 'Sheds', path: '/prefab/sheds' },
      { label: 'Railings', path: '/prefab/railings' },
      { label: 'Monkey Ladders', path: '/prefab/ladders' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: '/portable',
    label: 'Portable Offices',
    hasSubMenus: false, 
    
  },

  {
    mainCategory: '/shopinshop',
    label: 'ShopInShop',
    
hasSubMenus:false,
  },
  
];

function NavBar() {
  
  return (
    <nav>
      <ul className={`menu`}>
      {menuItems.map((item, index) => (
        <li key={index} className={item.hasSubMenus ? 'submenu' : ''}>
          {item.hasSubMenus ? (
             <NavLink to={item.mainCategory}>{item.label}</NavLink>
          ) : (
            <NavLink to={item.mainCategory}>{item.label}</NavLink>
          )}
          
        </li>
      ))}
      </ul>
    </nav>
  );
}

export default NavBar;