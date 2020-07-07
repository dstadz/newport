import React, { useState, FC} from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { NavBar, Spacer, StyledBurger} from '../styles/navStyles.js'
import logo from '../assets/coin.png'
import { hueState } from '../utils/store'

interface Props {
  open: boolean,
  setOpen: (open:boolean) => void
}

const Burger: FC<Props> = ({open, setOpen}) => { return (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </StyledBurger>
  )}

const navLinks = ['about','projects','contact']

const Nav: FC = () => {
  const hue = useRecoilValue(hueState)
  const [open, setOpen] = useState(false);

  return (
    <NavBar hue={hue} open={open} setOpen={setOpen}>
      <div> <NavLink to='/'><img src={logo} alt='Return to home page'/></NavLink> </div>
      <Spacer/>
      <Burger open={open} setOpen={setOpen} />
      <ul>
        {navLinks.map(n => (
          <li><NavLink to={`/${n}`}
          onClick={()=> setOpen(false)}
          >{n}</NavLink></li>))}
      </ul>
    </NavBar>
  )
}

export default Nav
