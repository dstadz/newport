import React from 'react'
// import pdf from '../../src/assets/resume.pdf'
import { Section, Skills, Projects, Education, Employment, Interests } from '../styles'
//import styled from 'styled-components'


// const PDF = styled.iframe`
//   width:800px
//   height:800px
// `

const Resume = () => {

  return (
    <Section>
    <Skills>
    React || Hooks || Node || Javascript || HTML || CSS || Figma
    Python || GitHub || Agile || REST
    </Skills>
    SKILLS
    
    PROJECTS
    D8 Picker												            GitHub
    Progressive Web App that creates and stores event templates to apply to your calendar for irregularly repeating events. 
    React | Node | MongoDB
    Used OAuth to connect to Google Cal API
    Developed Front End Components, testing for Front and Back End
    Crafted interface for users to interact with the calendar
    Organized PVD through AGILE workflow
    Foodie Fun Six											            GitHub
    Yelp clone to store and review visited restaurants and meals
    Node | Knex
    Handled server-side routing by using Knex, which led to data transfer across Front & Back end
    Managed data persistence across the app
    Used HTTP Protocol methods to access user data
    Key Conservation												Figma
    Mobile app designed to allow conservation efforts to communicate directly to followers
    Figma
    Designed & Integrated comment section to text and video posts
    Graphical overhaul & UI redesign
    Worked with a group of 5 developers
    
    EDUCATION
    Lambda School										    April 2019 - Present
    Full Stack Web Development & Computer Science
    9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.
    Additional UX Design program focused on Principles of design and aesthetics
    
    Case Western Reserve University      						         August 2012 - May 2014
    Mechanical Engineering
    Completed 64 credits including: 
    Multivariable Calculus, Newtonian Classical Mechanics &Thermodynamics
    
    EMPLOYMENT
    Safeway, ​Oakland, CA								           April 2015 - April 2019 
    Night Operations Manager
    Oversaw and directed ~20-30 employees in a fast-paced commercial environment.
    Handled customer engagement ensuring high satisfaction & loyalty
    Maintaining visual and service standards by delegating tasks to sales associates
    Defusing customer complaints through the use of conflict resolution skills
    
    
    INTERESTS
    Art (3d modeling) || Boardgames  || Traveling || Local Meetups
        </Section>
  )
}

export default Resume