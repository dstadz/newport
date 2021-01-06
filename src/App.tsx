import React from "react";
import { useRoutes } from 'hookrouter';
import { useRecoilState } from 'recoil';

import Nav from './components/Nav'
import Footer from './components/Footer'

import { Body, Section } from './styles'
import { hueState } from './utils/store'
import routes from './Routes'


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

