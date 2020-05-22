import React from 'react'
import { Section } from '../styles'
import * as x from '../styles'
//import { Link } from 'react-router-dom'

const Home = props => {

  return (
    <Section style={{width:'100%'}}>
      <x.H1> Hey there! My name is Daniel Stadler.
      <br/>
      I'm a Full Stack Developer in the <a href={'https://www.google.com/maps/@37.8093428,-122.3334453,10z'}>SF Bay Area</a>.
      <br/>
      Checkout some of my things in the navbar!
      </x.H1>
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