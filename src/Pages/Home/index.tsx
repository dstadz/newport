import React from 'react'
// import { A } from 'hookrouter'
import face from '../../assets/face.png'


const Home: React.FC = () => {

  return (
    <div>
      <img className='face' src={face} alt='my beautiful face'/>
      <h1>
        Hey there! <span role="img" aria-label='wave'>👋</span> I'm Daniel Stadler
      </h1>
      <h2>
        I take ideas from our world, and translate them into the digital one.
      </h2>
      {/* <a href={`/canvas`}> Canvas</a> */}
    </div>
  )
}

export default Home
