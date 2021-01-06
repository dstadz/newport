import React, { useState, FC} from 'react'
import { useRecoilValue } from 'recoil'
import { A } from 'hookrouter'
import { NavBar, Spacer, StyledBurger} from './styles'
import logo from '../../assets/coin.png'
import { hueState } from '../../utils/store'


const navLinks = ['about','projects','contact']

interface Props {
  open: boolean,
  setOpen: (open:boolean) => void
}

const Burger: FC<Props> = ({open, setOpen}) => { return (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div /> <div /> <div />
  </StyledBurger>
)}


const Nav: FC = () => {
  const hue = useRecoilValue(hueState)
  const [open, setOpen] = useState(false);

  return (
    <NavBar hue={hue} open={open}>
      <div>
        <A href='/'>
          <img src={logo} alt='Return to home page'/>
        </A>
      </div>

      <Spacer/>
      <Burger open={open} setOpen={setOpen} />

      <ul>
        {navLinks.map(n => (
          <li key={n}>
            <A
              href={`/${n}`}
              onClick={()=> setOpen(false)}
            >{n}</A>
          </li>
        ))}
      </ul>
    </NavBar>
  )
}

export default Nav
