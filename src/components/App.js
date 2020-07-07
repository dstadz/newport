import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';

import Nav from './Nav.tsx'
import Footer from './Footer'
import Routes from './Segments/Routes'
import { Body } from '../styles'
import { hueState, belowFoldState } from '../utils/store'



const App = () => {
  const [hue, setHue] = useRecoilState(hueState)
  const belowFold = useRecoilValue(belowFoldState)

  // const handleButton = e => { console.log("This proves I'm a good developer ;)") }
  const colorShift = () => { setHue(hue%360 + 3) }

  let { pathname } = useLocation()
  let title = pathname.substr(1)
  return (
    <Body hue={hue} belowFold={belowFold} onClick={() => colorShift()} >
      <Nav/>
        {title && <h1>{title.toUpperCase()}</h1> }
        <Routes/>
        <Footer />
    </Body>
  );
}

export default App
