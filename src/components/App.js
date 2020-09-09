import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState, useRecoilValue } from 'recoil';

import Nav from './Nav.tsx'
import Footer from './Footer'
// import routes from './Segments/Routes'



import Home from '../Pages/Home'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact.js'


import { Body } from '../styles'
import { hueState, belowFoldState } from '../utils/store'

const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/projects': () => <Projects/>,
  '/contact': () => <Contact/>,
}

const App = () => {
  let match = useRoutes(routes)
  const [hue, setHue] = useRecoilState(hueState)
  const belowFold = useRecoilValue(belowFoldState)
  const colorShift = () => { setHue(hue%360 + 3) }

  let title = match.type.name
  // console.log(title)
  // console.log(match.type.name)
  // console.log(match.type)
  // console.log(match)
  return (
    <Body hue={hue} belowFold={belowFold} onClick={() => colorShift()} >
      <Nav/>
      {/* {title !== 'Home' && <h1>{title.toUpperCase()}</h1>} */}
      { match }
      <Footer />
    </Body>
  );
}

export default App
