import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import * as x from '../styles/navStyles.js'
import logo from '../assets/coin.png'
import { hueState } from '../utils/store'

const Burger = ({ open, setOpen }) => { return (
  <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </x.StyledBurger>
)}

const Nav = () => {
  const hue = useRecoilValue(hueState)
  const [open, setOpen] = useState(false);

  return (
    <x.Nav hue={hue} open={open} setOpen={setOpen}>
      <div> <NavLink to='/'><img src={logo} alt='Return to home page'/></NavLink> </div>
      <x.Spacer/>
      <Burger className='Navbar-Toggle'open={open} setOpen={setOpen} />
      <ul open={open}>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </x.Nav>
  )
}

export default Nav