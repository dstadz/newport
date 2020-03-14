import React/*, { useContext } */from 'react'
import { NavLink } from 'react-router-dom'
//import {Context} from '../../contexts/Context'
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

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <x.Nav>
      <x.logo>LOGO</x.logo>
      <x.Ul className='navlinks'>
        <x.Li><NavLink to='/'>Home</NavLink></x.Li>
        <x.Li><NavLink to='/about'>About</NavLink></x.Li>
        <x.Li><NavLink to='/resume'>Resume</NavLink></x.Li>
        <x.Li><NavLink to='/contact'>Contact</NavLink></x.Li>
      </x.Ul>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </x.Nav>
  )  
}



//     const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {return}
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);
    
//     return () => { document.removeEventListener('mousedown', listener) };
//   }, [ref, handler]);
// };

export default Nav