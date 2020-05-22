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
    question:'Why is web developement is important to me?',
    answer:'The internet is where everyone has a voice. It is the great equalizer in this era,  and I want to help spread meassages that are worthy of being heard.'
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
      <x.AboutTop>
        <img src={face} alt='my beautiful face'/>
        <div>
        <h2>Wanna to know more about me? </h2>
        <h3> All you have to do is ask! </h3>
        Here is a list of my skills:
        <x.Skills>
        { skills.map( s => ( <li> { s } </li> ) ) }
        </x.Skills>
        </div>
      </x.AboutTop>

      <p> I am new in the industry, but eagar to learn more to build new applications and contribute to the ever evoling tech world. My name is Daniel. I am a recent graduate from Lambda School, studying Full Stack Wed Development, after previously studying UX Design. The constant evolution of the industry calls to my perpetual love of learning and my <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a>
      </p>
      <x.CardDeck>
      {questions.map(q => (
        <Card question={q.question} answer={q.answer} />
        ))}
      </x.CardDeck>
    </Section>
  )
}

export default About