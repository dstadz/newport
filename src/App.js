import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';

import Nav from './components/Nav.tsx'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact.js'
import Footer from './components/Footer'

import { Body, Section } from './styles'
import { hueState } from './utils/store'

const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/projects': () => <Projects/>,
  '/contact': () => <Contact/>,
}

const App = () => {
  let match = useRoutes(routes)
  const [hue, setHue] = useRecoilState(hueState)
  const colorShift = () => { setHue(hue % 360 + 3) }


  return (
    <Body hue={hue} onClick={() => colorShift()} >
      <Nav/>
      <Section>
        {match}
      </Section>
      <Footer />
    </Body>
  );
}

export default App
