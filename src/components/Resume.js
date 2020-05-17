import React from 'react'
// import pdf from '../../src/assets/resume.pdf'
import { Section, Skills, Projects, Education, Employment, Interests } from '../styles'
//import styled from 'styled-components'


// const PDF = styled.iframe`
//   width:800px
//   height:800px
// `
const skills = ['React','Hooks','Node','Javascript','HTML','CSS','Figma','Python','GitHub','Agile','REST']
const projects = [
  {
    title:'D8 Picker',
    github:'',
    desc:'Progressive Web App that creates and stores event templates to apply to your calendar for irregularly repeating events.',
    stack:['React','Node','MongoDB'],
    duties:['Used OAuth to connect to Google Cal API','Developed Front End Components, testing for Front and Back End','Crafted interface for users to interact with the calendar','Organized PVD through AGILE workflow']
  },  {
    title:'Foodie Fun Six',
    github:'',
    desc:'Yelp clone to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    duties:['Handled server-side routing by using Knex, which led to data transfer across Front & Back end','Managed data persistence across the app','Used HTTP Protocol methods to access user data']
  },  {
    title:'Key Conservation',
    github:'',
    desc:'Mobile app designed to allow conservation efforts to communicate directly to followers',
    stack:['figma'],
    duties:['Designed & Integrated comment section to text and video posts','Graphical overhaul & UI redesign','Worked with a group of 5 developers']
  }
]

const Project = ({props}) => {
  const {title, github, desc, stack, duties} = props
  
  return (
  <div>
  {title}, {github},{desc}, {stack}, {duties}
  </div>
)}



const Resume = () => { return (
  <Section>
    SKILLS
    <Skills>
      {skills.map(s => ( <li> {s} </li> ))}
    </Skills>
      <Projects>
    { projects.map( s => (<Project props={s} />) ) }
    </Projects>
    <Education>
    EDUCATION
    Lambda School										    April 2019 - Present
    Full Stack Web Development & Computer Science
    9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.
    Additional UX Design program focused on Principles of design and aesthetics
    
    Case Western Reserve University      						         August 2012 - May 2014
    Mechanical Engineering
    Completed 64 credits including:
    Multivariable Calculus, Newtonian Classical Mechanics &Thermodynamics
    </Education>
    <Employment>
    EMPLOYMENT
    Safeway, ​Oakland, CA								           April 2015 - April 2019
    Night Operations Manager
    Oversaw and directed ~20-30 employees in a fast-paced commercial environment.
    Handled customer engagement ensuring high satisfaction & loyalty
    Maintaining visual and service standards by delegating tasks to sales associates
    Defusing customer complaints through the use of conflict resolution skills
    </Employment>
    
    <Interests>
    INTERESTS
    'Art (3d modeling)','Boardgames ','Traveling','Local Meetups'
    </Interests>
  </Section>
)}

export default Resume