import React from 'react'
//import { Link, Route, Switch } from "react-router-dom";

import { Section, ResSec } from '../styles'
import cal from '../assets/cal.png'
import food from '../assets/food.jpeg'
import key from '../assets/key.png'

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
    ],
    pic:cal
  }, {
    title:'Foodie Fun Six',
    github:'https://github.com/dstadz/foodie-fun6-server',
    desc:'Yelp clone made to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ],
    pic:food
  }, {
    title:'Key Conservation',
    github:'',
    desc:'Mobile app designed to allow conservation efforts to communicate directly to followers',
    stack:['Figma'],
    duties:[
      'Designed & Integrated comment section to text and video posts',
      'Graphical overhaul & UI redesign',
      'Worked with a group of 5 developers'
    ],
    pic:key
  }
]


const Project = ({props}) => {
  const {title, github, desc, stack, duties, pic} = props

  return (
  <div>
    <img src={pic} />
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
    <Section style={{width:'100%'}}>
      <ResSec>
        { projectList.map( s => ( <Project props={s} /> ) ) }
      </ResSec>
    </Section>
  )
}

export default Projects
