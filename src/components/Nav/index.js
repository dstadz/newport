import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {Context} from '../../contexts/Context'
import * as x from './styles.js'
import logo from '../../assets/coin.png'







const Burger = ({ open, setOpen }) => { return (
  <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </x.StyledBurger>
)}

const Nav = ({ hue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <x.Nav hue={hue} open={open} setOpen={setOpen}>
      <div> <NavLink to='/'><img src={logo} /></NavLink> </div>
      <Burger open={open} setOpen={setOpen} />
      <ul open={open}>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      {
        window.innerWidth >= 768
          ?<div />
          :<h6>Lol I wasn't expecting you to use a tablet</h6>
      }
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