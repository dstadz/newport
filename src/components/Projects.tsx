import React, { FC, useEffect } from 'react'
//import { Link, Route, Switch } from "react-router-dom";

import { Section, ResSec } from '../styles'
import cal from '../assets/cal.png'
import food from '../assets/food.jpeg'
import check from '../assets/check.jpg'
import { useSetRecoilState } from 'recoil';

import { belowFoldState } from '../utils/store'

const projectList = [
  {
    title:'Goal Getter',
    github:'https://github.com/dstadz/GoalsFE',
    link:'https://goalgetter.netlify.app/',
    desc:'Todo List App that tracks goals and habits over a lifetime',
    stack:['React','Node','Express','Knex'],
    duties:[
      'Created 15+ CRUD endpoints to connect Front and Back Ends',
      'Designed & built 12+ React components, styled to fit theme of app',
      'Implemented State management with Recoil, new experimental  SM library'
    ],
    pic:check
  },{
    title:'D8 Picker',
    github:'https://github.com/Lambda-School-Labs/school-calendar-fe',
    link:'',
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
    link:'',
    desc:'Yelp clone made to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ],
    pic:food
  }
]

interface Props {
  props: {
    title:string,
    github:string,
    link:string,
    desc:string,
    stack:string[],
    duties:string[],
    pic:string
  }
}


const Project: FC<Props> = ({props}) => {
  const {title, github, desc, link, stack, duties, pic} = props
  const setBelowFold = useSetRecoilState(belowFoldState)

  useEffect(() => { setBelowFold(false) }, [])

  return (
  <div>
    <a href={link} > <img style={{borderRadius:'0'}}src={pic} /> </a>
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
