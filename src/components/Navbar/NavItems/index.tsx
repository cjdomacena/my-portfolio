import React from 'react'
import Button from '../../Button';
import NavItem from './NavItem';

const NavLinks:React.FC = () => {
  return (
    <ul className="flex space-x-4 items-center">
      <NavItem path="/" item="home" />
      <NavItem path="/experience" item="experience" />
      <NavItem path="/projects" item="projects" />
      <li>
        {' '}
        <Button text="say hello!" />{' '}
      </li>
      <NavItem path="/something" item={<Button text="download cv" type="outline" />} />
    </ul>
  );
}

export default NavLinks;