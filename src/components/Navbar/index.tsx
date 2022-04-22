import React from 'react'
import Logo from './Logo';
import NavLinks from './NavItems';

const Navbar:React.FC = () => {
  return (
	<header className='text-white mt-8'>
		<nav className='container mx-auto flex justify-between items-center'>
			<Logo />
			<NavLinks />
		</nav>
	</header>
  )
}

export default Navbar;