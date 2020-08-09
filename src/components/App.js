import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState, useRecoilValue } from 'recoil';

import Nav from './Nav.tsx'
import Footer from './Footer'
import routes from './Segments/Routes'

import { Body } from '../styles'
import { hueState, belowFoldState } from '../utils/store'



const App = () => {
  let match = useRoutes(routes)
  console.log(match)
  const [hue, setHue] = useRecoilState(hueState)
  const belowFold = useRecoilValue(belowFoldState)
  const colorShift = () => { setHue(hue%360 + 3) }







  // let title = match.type.name || ''
  // console.log(match.type.name)
  return (
    <Body hue={hue} belowFold={belowFold} onClick={() => colorShift()} >
      <Nav/>
      {/* {title && <h1>{title.toUpperCase()}</h1>} */}
      { match }
      <Footer />
    </Body>
  );
}

export default App
