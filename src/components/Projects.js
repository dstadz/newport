import React from 'react'
//import { Link, Route, Switch } from "react-router-dom";

import { Section, ResSec } from '../styles'



const projectList = [
  {
    title:'D8 Picker',
    github:'https://github.com/Lambda-School-Labs/school-calendar-fe',
    desc:'PWA calendar extension to handle irregularly repeating events.',
    stack:['React','Node','MongoDB'],
    duties:[
      'Used OAuth to connect to Google Cal API',
      'Developed Front End Components',
      'Crafted user interface for interaction with calendar',
    ]
  }, {
    title:'Foodie Fun Six',
    github:'',
    desc:'Yelp clone made to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ]
  }, {
    title:'Key Conservation',
    github:'',
    desc:'Mobile app designed to allow conservation efforts to communicate directly to followers',
    stack:['Figma'],
    duties:[
      'Designed & Integrated comment section to text and video posts',
      'Graphical overhaul & UI redesign',
      'Worked with a group of 5 developers'
    ]
  }
]


const Project = ({props}) => {
  const {title, github, desc, stack, duties} = props

  return (
  <div>
    <h3> <a href={github} target='_blank'>{title}</a> </h3>
    <p>{desc}</p>
    <ol>
      {stack.map( s => ( <li> { s } </li> ) ) }
    </ol>
    <ul>
      {duties.map( d => ( <li> { d } </li> ) ) }
    </ul>
  </div>
)}



const Projects = () => {

  return (
    <Section style={{width:'75%'}}>
      <ResSec>
        { projectList.map( s => ( <Project props={s} /> ) ) }
      </ResSec>
    </Section>
  )
}

export default Projects