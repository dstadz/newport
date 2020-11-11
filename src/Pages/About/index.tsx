import React, { FC } from 'react'

// import Card from './Card'
// import face from '../assets/face.png'
import { skills } from './textLists'
import { AboutMeContainer } from './styles'



const About: FC = () => {
  return (
    <AboutMeContainer>
      {/* <img className='face'  src={face} alt='my beautiful face'/> */}
        {/* skills travels through a card about bio, with some animation */}

      <p>

        I like getting people what they want, and love getting people what they need.
        <br/>
        1. What are you currently doing (in regard to your career) and how did you get there?
          I started my professional journey in retail, working my way up to Night Operations Manager. I qucikly learned and excelled at helping my clients with what ever problems they might have, but it wasnt enough for me. I knew I could do more, and have my work affect more than the person ditrectly in front of me.
          I entered Lambda School, and completed both the User Experience Design and Full Stack Web Developement courses, and am now looking for a career in Software Engineering where I can apply my new skills to get people what they need.
        <br/>
        2. In terms of the work you do, what aspects are you most passionate about and why?
          I love building software that is easy for the user while also standing out from the crowd in terms of design. The ever changing land scape of the industry is prefect for my constant need for stimulation and improvement.
        <br/>
        3. What do you consider some of your biggest professional and personal accomplishments?
        <br/>
        4. What are you looking for right now?
          I am new in the industry, but eagar to learn more to build new applications and contribute to the ever evoling tech world. The constant evolution of the industry calls to my perpetual love of learning and my <a href='https://en.wikipedia.org/wiki/Ikigai' rel="noopener noreferrer"target="_blank">ikigai</a>.
      </p>
      <ul>
        {skills.map( s => (
          <li key={s}> { s } </li>
        ))}
      </ul>
    </AboutMeContainer>
  )
}

export default About