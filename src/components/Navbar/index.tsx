import React from 'react'
import Logo from './Logo';
import NavLinks from './NavItems';
import MobileMenu from './NavItems/MobileMenu';

const Navbar:React.FC = () => {
  return (
	<header className='text-white p-6'>
		<nav className='container mx-auto flex justify-between items-center flex-wrap'>
			<Logo />
			<NavLinks />
			<MobileMenu />
		</nav>
	</header>
  )
}

export default Navbar;