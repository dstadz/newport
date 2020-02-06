import React from 'react'
import Card from './Card'
import * as x from './styles.js'

//import Slideshow from './Slideshow'

const questions = [
  {
    question:'What can I tell you about myself?',
    answer:'I am amazing and super good at things'
  },{
    question:'Why did I get into Software Development?',
    answer:'Shortly after I started learning UXD, I grew an interest in code, which quickly took over my studies and has had me captivated ever since. '
  },{
    question:'',
    answer:''
  },{
    question:'',
    answer:''
  }
]



const About = () => {

  return (
    <x.about>
      <x.H1>So you want to know more about me? </x.H1>
      <h2> All you have to do is ask! </h2>

      <div className='card-holder'>
          {questions.map(q => (
            <Card question={q.question} answer={q.answer} />
          ))}





        <div className='cards'>
          <p> I am new in the industry, but am eagar to learn more to build new applications and contribute to the ever evoling tech world. </p>
          <p> My name is Daniel. 
          I am currently enrolled in Lambda School, studying Full Stack Wed Development, after previously studying UX Design. 
          
          Web developement is important to me becuase the internet is where everyone has a voice, and I want to help spread meassages that are worthy of being heard.
          
          The constant evolution of the industry calls to my perpetual love of learning and my <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a>
          </p>
        </div>
        <div className='cards'>
          <p className='notWork'>
          Outside of webdev, I find myself working on a creative project, the details of which are not yet ready to be divulged... Honestly I why I'm talking about it in such a public medium now...
          </p>
        </div>
        <div className='cards'>
          I ma baller
        </div>
      </div>
    </x.about>
  )
}

export default About