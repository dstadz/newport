import React from 'react'
// import { A } from 'hookrouter'
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
        <p>
          I take ideas from our world, and translate them into the digital one.
        </p>
    </Section>
  )
}

export default Home
