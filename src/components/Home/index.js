import React from 'react'
import { Section } from '../../styles'
import * as x from './styles'
const Home = props => {

  return (
    <Section>
      <x.H1> Hey there! I'm Daniel</x.H1>
      <x.H2> I am a Full Stack Developer in San Francisco.</x.H2>
      <x.H3> I can do UX designs too! </x.H3>
      <x.H4>Don't believe me?</x.H4>
      <x.Button onClick={() => props.handleButton()}>
        Check it out!
      </x.Button>
    </Section>
  )
}

export default Home