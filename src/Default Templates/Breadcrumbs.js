import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumbs">
      <NavLink to="/">Home</NavLink>
      {pathnames.map((name, index) => (
        <span key={name}>
          &gt;
          <NavLink to={`/${pathnames.slice(0, index + 1).join('/')}`}>{name}</NavLink>
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;