import React from 'react'
//import face from '../assets/face.jpg'
import * as x from './styles'
const Home = props => {

  return (
    <x.hero>
      {/*<img src={face} style={{width:"80%"}}/> */}
      <x.words>
        <x.H1> Hey there! I'm Daniel</x.H1>
        <x.H2> I am a Full Stack Developer in San Francisco.</x.H2>
        <x.H3> I can do UX designs too! </x.H3>
        <x.H4>Don't believe me?</x.H4>
        <button onClick={() =>
          props.handleButton()}>Check it out!</button>
      </x.words>

      <div></div>
    </x.hero>
  )
}

export default Home