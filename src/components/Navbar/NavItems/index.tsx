import Button from '../../Button';
import NavItem from './NavItem';




const NavLinks = () => {
  return (
    <div className="xl:contents lg:contents hidden">
      <ul className="space-x-4 items-center flex">
        <NavItem path="/" item="home" />
        <NavItem path="/projects" item="projects" />
        <NavItem path="/experience" item="experience" />
      </ul>
      <div className="space-x-4">
        <Button text="say hello!" type="email" /> 
        <Button text="download cv" type="outline" />
      </div>
    </div>
  );
}

export default NavLinks;