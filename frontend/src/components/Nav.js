import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {Context} from '../contexts/Context'


const Nav = () => {
  const context = useContext(Context)
  return (
    <div className='Navbar'>
      <p className='logo'>LOGO</p>
      <ul className='navlinks'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  )
}
export default Nav