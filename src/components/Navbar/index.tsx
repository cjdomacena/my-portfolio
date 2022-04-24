import React, { useState } from 'react'
import Button from '../Button';
import Logo from './Logo';
import NavLinks from './NavItems';
import MobileMenu from './NavItems/MobileMenu';
import NavItem from './NavItems/NavItem';

const Navbar:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="text-white p-6">
      <nav className="container mx-auto flex justify-between items-center flex-wrap">
        <Logo />
        <NavLinks />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`w-screen h-screen absolute left-0 bg-primary p-2 justify-center ${
            isOpen ? 'top-0' : '-top-[100%]'
          } transition-all grid place-items-center`}>
          <ul className="items-center flex flex-col gap-12 text-lg">
            <NavItem path="/" item="home" setIsOpen={() => setIsOpen(false)} />
            <NavItem path="/projects" item="projects" setIsOpen={() => setIsOpen(false)} />
            <NavItem path="/experience" item="experience" setIsOpen={() => setIsOpen(false)} />
            <Button text="say hello!" /> <Button text="download cv" type="outline" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;