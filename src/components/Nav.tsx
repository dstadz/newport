import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import * as x from '../styles/navStyles.js'
import logo from '../assets/coin.png'
import { hueState } from '../utils/store'

interface Props {
  open: boolean,
  setOpen: (open:boolean) => void
}
const Burger: React.FC<Props> = ({open, setOpen}) => {
  return (
    <x.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div /> <div /> <div />
    </x.StyledBurger>
  )
}

const Nav: React.FC = () => {
  const hue = useRecoilValue(hueState)
  const [open, setOpen] = useState(false);

  return (
    <x.Nav hue={hue} open={open} setOpen={setOpen}>
      <div> <NavLink to='/'><img src={logo} alt='Return to home page'/></NavLink> </div>
      <x.Spacer/>
      {/* <Burger className='Navbar-Toggle' open={open} setOpen={setOpen} /> */}
      <ul>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </x.Nav>
  )
}

export default Nav