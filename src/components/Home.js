import React from 'react'
import { Section } from '../styles'
import * as x from '../styles'
import { Link } from 'react-router-dom'

const Home = props => {

  return (
    <Section>
      <x.H1> Hey there! I'm Daniel.</x.H1>
      <x.H2> I am a Full Stack Developer in the <a href={'https://www.google.com/maps/@37.8093428,-122.3334453,10z'}>SF Bay Area</a>.</x.H2>
      <x.H3> Checkout some of my things! </x.H3>
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