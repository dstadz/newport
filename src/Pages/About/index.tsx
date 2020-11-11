import React from 'react'

// import Card from './Card'
// import face from '../assets/face.png'
import { questions, skills } from './textLists'
import { AboutMeContainer } from './styles'

const About = () => {
  return (
    <AboutMeContainer>
      {questions.map( q => (
        <div>
          <h4> {q.question} </h4>
          <p> {q.answer} </p>
        </div>
      ))}
      {/* <p> I'm good getting people what they want, and great at getting people what they need.</p>
      <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a> */}
      <ul>
        {skills.map( s => (
          <li key={s}> { s } </li>
        ))}
      </ul>
    </AboutMeContainer>
  )
}

export default About