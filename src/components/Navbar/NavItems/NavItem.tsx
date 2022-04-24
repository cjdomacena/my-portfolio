import React, {  MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom';

type Props = {
  path: string;
  item: string | React.ReactNode;
  setIsOpen?: MouseEventHandler<HTMLAnchorElement>;
};

const NavItem = ({path, item,setIsOpen}:Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `${isActive ? 'font-black' : ''} transition-colors`}
      onClick={setIsOpen}>
      {item}
    </NavLink>
  );
}

export default NavItem;