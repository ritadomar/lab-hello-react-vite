import logo from '../assets/ironhack-logo-xs.png';
import menuIcon from '../assets/menu-top-xs.png';

function Navbar() {
  return (
    <nav id="top-nav">
      <img src={logo} alt="Ironhack Logo" />
      <img src={menuIcon} alt="Hamburger menu icon" />
    </nav>
  );
}

export default Navbar;
