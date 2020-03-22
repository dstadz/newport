import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {Context} from '../../contexts/Context'
import * as x from './styles.js'






const Menu = ({ open }) => { return (
  <x.StyledMenu open={open}>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/resume'>Resume</NavLink></li>
  <li><NavLink to='/projects'>Projects</NavLink></li>
  <li><NavLink to='/contact'>Contact</NavLink></li>
  </x.StyledMenu>
)}
  
const Burger = ({ open, setOpen }) => { return (
  <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </x.StyledBurger>
)}

const Nav = ({ hue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <x.Nav color={hue}>
        <span className='logo'><NavLink to='/'>LOGO</NavLink></span>
        <ul>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/resume'>Resume</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <h6>other thing</h6>
        <Burger open={open} setOpen={setOpen} />
      </x.Nav>
      <div>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
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