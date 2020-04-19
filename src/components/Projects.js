import React from 'react'
import { Link, Route, Switch } from "react-router-dom";

import { Section, Card } from '../styles'



const ListOfProjects = [
  {
    title:"D8 Picker",
    github:"",
    url:"https://www.d8picker.com/",
    description:"PWA that creates and applies event templates to user calendars, focusing on irregularly reoccurring events"
  },{
    title:"Soring algorithms",
    github:"",
    url:'/sortingAlgorithms',
    description:"A couple doodles to display some SA."
  },/*{
    title:"",
    github:"",
    url:"",
    description:""
  },*/
]

const Project = props => {
  const local = props.url[0] == '/'
  console.log(local)
  return (
    <Card target={local ? false :'_blank'} href={props.url}>
      <h1> {props.title} </h1>
      <div></div>
      {props.github}
      {props.description}
    </Card>
  )
}



const Projects = () => {

  return (
    <Section>
      <div>
      {ListOfProjects.map(p => (
        <Project
        title={p.title}
        github={p.github}
        url={p.url}
        description={p.description}
        />
        ))}
        </div>
    </Section>
  )
}

export default Projects