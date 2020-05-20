import React from 'react'
import Card from './Segments/Card'
import face from '../assets/face.png'
import { Section } from '../styles/'
import * as x from '../styles/'

//import Slideshow from './Slideshow'
//      { skills.map( s => ( <li> { s } </li> ) ) }
const skills = [
  'React (+Hooks)','Node','Javascript','HTML','CSS','Figma','Python','GitHub','Agile','REST'
]
const questions = [
  {
    question:'What can I tell you about myself?',
    answer:'I am amazing and super good at things'
  },{
    question:'Why did I get into Software Development?',
    answer:'Shortly after I started learning UXD, I grew an interest in code, which quickly took over my studies and has had me captivated ever since. '
  },{
    question:'What did I do before I got into tech?',
    answer:'I worked as a Safeway Night Operations Manager for over 4 years learning various leadership skills and '
  },{
    question:'Where do I see myself in 5 years?',
    answer:'A senior level engineer at your company, working on a project that will improve upon the lives of our customers'
  },{
    question:'',
    answer:''
  },{
    question:'',
    answer:''
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
    <Section>
    <img src={face} />

      <h2>Wanna to know more about me? </h2>
      <h3> All you have to do is ask! </h3>
      Here is a list of my skills:
      { skills.map( s => ( <li> { s } </li> ) ) }

      <x.CardDeck>
      {questions.map(q => (
        <Card question={q.question} answer={q.answer} />
        ))}
      </x.CardDeck>
      <div>
        <p> I am new in the industry, but eagar to learn more to build new applications and contribute to the ever evoling tech world. </p>
        <p>
        My name is Daniel. I am currently enrolled in Lambda School, studying Full Stack Wed Development, after previously studying UX Design. Web developement is important to me becuase the internet is where everyone has a voice, and I want to help spread meassages that are worthy of being heard. The constant evolution of the industry calls to my perpetual love of learning and my <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a>
        </p>
      </div>
    </Section>
  )
}

export default About