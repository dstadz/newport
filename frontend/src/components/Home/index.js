import React from 'react'
//import face from '../assets/face.jpg'
import Styles, * as x from './Styles.js'
const Home = props => {

  return (
    <div className='Home section'>
      {/*<img src={face} style={{width:"80%"}}/> */}
      <div className='words'>
        <x.H1> Hi there! I'm Daniel</x.H1>
        <x.H2> I am a Full Stack Developer in San Francisco.</x.H2>
        <h3> I can do UX designs too! </h3>
        <h4>Don't believe me?</h4>
        <button onClick={() => 
        props.handleButton()}>Check it out!</button>
      </div>

      <div></div>
    </div>
  )
}

export default Home