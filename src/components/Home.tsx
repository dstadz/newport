import React from 'react'
import { Link } from 'react-router-dom'

import { Section, H1 } from '../styles'
import * as x from '../styles'
//import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <Section style={{width:'100%'}}>
      <H1>
        Hey there! My name is Daniel Stadler.
        <br/>
        I'm a Software Engineer in the <a href={'https://www.google.com/maps/@37.8093428,-122.3334453,10z'}>SF Bay Area</a>.
        <br/>
        Checkout some of my <Link to='/projects'>Projects</Link>!
      </H1>
      {/*}
      <x.H4>Don'tbelieve me?</x.H4>
        <Link to='/menagerie'>
        <x.Button2 onClick={() => props.handleButton()}>
        Check it out!
        </x.Button2>
      </Link> */}
    </Section>
  )
}

export default Home