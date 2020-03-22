import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {Context} from '../../contexts/Context'
import * as x from './styles.js'






const Menu = ({ open }) => { return (
  <x.StyledMenu open={open}>
    <a href="/"> <span role="img" aria-label="about us">💁🏻‍♂️</span> Home </a>
    <a href="/"> <span role="img" aria-label="price">💸</span> About </a>
    <a href="/"> <span role="img" aria-label="contact">📩</span> Resume </a>
    <a href="/"> <span role="img" aria-label="contact">📩</span> Contact </a>
  </x.StyledMenu>
)}
  
const Burger = ({ open, setOpen }) => { return (
  <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </x.StyledBurger>
)}

const Nav = ({ hue }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <>
      <x.Nav>
        <x.logo><NavLink to='/'>LOGO</NavLink></x.logo>
        <x.Ul color={hue}>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/resume'>Resume</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </x.Ul>

        <x.H6>other thing</x.H6>
        <Burger open={open} setOpen={setOpen} />
      </x.Nav>
      <div ref={node}>
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