import React from 'react'

// import Card from './Card'
// import face from '../assets/face.png'
import { questions, skills } from './textLists'
import { AboutMeContainer } from './styles'

const About = () => {
  return (
    <AboutMeContainer>
      {questions.map( q => (
        <div key={q.question}>
          <h2> {q.question} </h2>
          <p> {q.answer} </p>
        </div>
      ))}
      <ul>
        {skills.map( s => (
          <li key={s}> { s } </li>
        ))}
      </ul>
    </AboutMeContainer>
  )
}

export default About