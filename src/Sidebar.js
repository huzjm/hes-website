import React, { useState } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import './sidebar.css';
const menuItems = [
  {
    mainCategory: 'heat-exchanger',
    label: 'Heat Exchangers',
    hasSubMenus: true,
    hasImage:true,
    
    activeImage:'heat-exchangeractive.png',
    subMenus: [
      { label: 'Shell and Tube Heat Exchanger', path: '/heat-exchanger/shellandtube' },
      { label: 'Plate Fin Heat Exchanger', path: '/heat-exchanger/platefin' },
      // Add more submenus for Heat Exchangers
    ],
  },
  {
    mainCategory: 'gratings',
    label: 'Gratings',
    hasSubMenus: true,
    hasImage:true,
    
    activeImage:'gratingsactive.png',
    subMenus: [
      { label: 'MS Gratings', path: '/gratings/MS' },
      { label: 'SS Gratings', path: '/gratings/SS' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: 'storage',
    label: 'Storage Tanks',
    hasSubMenus: true,
    hasImage:true,
    activeImage:'storageactive.png',
    subMenus: [
      { label: 'Tanks', path: '/storage/tanks' },
      { label: 'Pressure Vessels', path: '/storage/pressurevessel' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: 'bulkmaterial',
    label: 'Bulk Movement',
    hasSubMenus: true,
    hasImage:true,
    activeImage:'bulkactive.png',
    subMenus: [
      { label: 'Conveyors', path: '/bulkmaterial/conveyors' },
      { label: 'Hoppers', path: '/bulkmaterial/hoppers' },
      { label: 'Bucket Elevators', path: '/bulkmaterial/bucketelevators' },
      // Add more submenus for Gratings
    ],
  },
  {
    mainCategory: 'prefab',
    label: 'Pre-Fabricated',
    hasSubMenus: true,
    hasImage:true,
    activeImage:'prefabactive.png',
    subMenus: [
      { label: 'Sheds', path: '/prefab/sheds' },
      { label: 'Warehouses', path: '/prefab/warehouse' },
      
      // Add more submenus for Gratings
    ],
  },
  
  {
    mainCategory: 'supplies',
    label: 'General Supplies',
    hasSubMenus: false, 
    hasImage:true,
    activeImage:'suppliesactive.png',// No submenus for this category
  },
  
  // Add more main categories
  // ...
];
const Sidebar = () => {
  const location =useLocation();
  const [activeCategory, setActiveCategory] = useState('');

  // Function to toggle submenu visibility
  const toggleSubMenu = (category) => {
    setActiveCategory(category === activeCategory ? '' : category);
  };
  React.useEffect(() => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[1]; // Assuming the path structure is "/products/category/subcategory"
    setActiveCategory(category);
  }, [location.pathname]);
  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.mainCategory}><div  className={`mainplussub ${activeCategory === item.mainCategory ? 'active' : ''}`}>
            <NavLink
              to={`/${item.mainCategory}`}
              activeClassName={`active main-category ${activeCategory === item.mainCategory ? 'active' : ''}`}
              className="main-category"
              onClick={() => toggleSubMenu(item.mainCategory)}
            >
            {item.hasImage && <img
    src={`/image/${item.activeImage}`}
    alt="Logo"
    className={`sidebar-image ${activeCategory === item.mainCategory ? 'active-image' : ''}`}
  />} {item.label} 
            </NavLink>
            {item.hasSubMenus && activeCategory === item.mainCategory && (
              <ul className="sub-menu">
                {item.subMenus.map((subMenu) => (
                  <li key={subMenu.label}>
                    <NavLink to={subMenu.path} activeClassName="active">{subMenu.label}</NavLink>
                  </li>
                ))}
              </ul>
            )}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
// return (
//   <div className="sidebar">
//     <ul>
//       {menuItems.map((item) => (
//         <li key={item.mainCategory}>
//           <NavLink
//             to={`/${item.mainCategory}`}
//             activeClassName={`active main-category ${activeCategory === item.mainCategory ? 'active' : ''}`}
//             className="main-category"
//             onClick={() => toggleSubMenu(item.mainCategory)}
//           >
//             {item.label} {item.hasSubMenus && (activeCategory === item.mainCategory ? <span>&#9650;</span> : <span>&#9660;</span>)}
//           </NavLink>
//           {item.hasSubMenus && activeCategory === item.mainCategory && (
//             <ul className="sub-menu">
//               {item.subMenus.map((subMenu) => (
//                 <li key={subMenu.label}>
//                   <NavLink to={subMenu.path} activeClassName="active">{subMenu.label}</NavLink>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// };

// export default Sidebar;

