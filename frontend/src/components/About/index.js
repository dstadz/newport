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
    <x.H2>So you want to know more about me? </x.H2>
    <x.H3> All you have to do is ask! </x.H3>
    
    <x.cardDeck>
    {questions.map(q => (
      <Card question={q.question} answer={q.answer} />
      ))}
    </x.cardDeck>

      <div className='cards'>
        <p> I am new in the industry, but am eagar to learn more to build new applications and contribute to the ever evoling tech world. </p>
        <p> My name is Daniel. 
        I am currently enrolled in Lambda School, studying Full Stack Wed Development, after previously studying UX Design. 
        
        Web developement is important to me becuase the internet is where everyone has a voice, and I want to help spread meassages that are worthy of being heard.
        
        The constant evolution of the industry calls to my perpetual love of learning and my <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a>
        </p>
      </div>

    </x.about>
  )
}

export default About