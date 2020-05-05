import React from 'react'
import { Section } from '../styles'
import * as x from '../styles'
import { Link } from 'react-router-dom'

const Home = props => {

  return (
    <Section>
      <x.H1> Hey there! I'm Daniel</x.H1>
      <x.H2> I am a Full Stack Developer in San Francisco.</x.H2>
      <x.H3> I can do UX designs too! </x.H3>
      <x.H4>Don't believe me?</x.H4>
      <Link to='/menagerie'>
        <x.Button2 onClick={() => props.handleButton()}>
        Check it out!
        </x.Button2>
      </Link>
    </Section>
  )
}

export default Home