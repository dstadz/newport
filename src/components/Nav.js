import React from 'react'
import { NavLink } from 'react-router-dom'
import * as x from '../styles/navStyles.js'
import logo from '../assets/coin.png'







const Burger = ({ open, setOpen }) => { return (
  <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </x.StyledBurger>
)}

const Nav = ({ hue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <x.Nav hue={hue} open={open} setOpen={setOpen}>
      <div> <NavLink to='/'><img src={logo} alt='Return to home page'/></NavLink> </div>
      <x.Spacer/>
      <Burger className='Navbar-Toggle'open={open} setOpen={setOpen} />
      <ul open={open}>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/resume'>Resume</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </x.Nav>
  )
}



    const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {return}
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => { document.removeEventListener('mousedown', listener) };
  }, [ref, handler]);
};

export default Nav