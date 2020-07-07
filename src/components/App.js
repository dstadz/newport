import React from "react";
import { Route, useLocation } from "react-router-dom";
import { useRecoilState } from 'recoil';

import Nav from './Nav.tsx'
import Footer from './Footer'
import Routes from './Segments/Routes'
import { Body } from '../styles'
import { hueState } from '../utils/store'



const App = () => {
  const [hue, setHue] = useRecoilState(hueState)

  // const handleButton = e => { console.log("This proves I'm a good developer ;)") }
  const colorShift = () => { setHue(hue%360 + 3) }

  let { pathname } = useLocation()
  let title = pathname.substr(1)
  return (
    <Body hue={hue} onClick={() => colorShift()} >
      <Nav/>
        {title && <h1>{title.toUpperCase()}</h1> }
        <Routes/>
        <Footer />
    </Body>
  );
}

export default App
