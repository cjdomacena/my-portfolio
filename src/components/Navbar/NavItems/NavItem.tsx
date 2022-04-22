import React from 'react'
import { NavLink } from 'react-router-dom';

type Props =  {
  path:string,
  item: string | React.ReactNode,
}

const NavItem = ({path, item}:Props) => {
  return (
    <NavLink to={path} className={({ isActive }) => `${isActive ? 'font-black' : ''} transition-colors`}>
      {item}
    </NavLink>
  );
}

export default NavItem;