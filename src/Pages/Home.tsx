import React from 'react'
import { A } from 'hookrouter'
import face from '../assets/face.png'

import { Section, H1 } from '../styles'

const Home: React.FC = () => {

  return (
    <Section>
      <img className='face' src={face} alt='my beautiful face'/>
      <H1>
        Hey there! <span role="img">👋</span> I'm Daniel Stadler
      </H1>
        <br/>
        I analyze the behavior and thoughts of humans and use that data to optimize
        Checkout some of my  <A href='/projects'>Projects</A>!
    </Section>
  )
}

export default Home
