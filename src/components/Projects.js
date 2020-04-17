import React from 'react'
import { Link, Route, Switch } from "react-router-dom";

import { Section } from '../styles'
import { Card } from '../styles'
import Sorts from './Sorts'



const ListOfProjects = [
  {
    title:"D8 Picker",
    github:"",
    url:"https://www.d8picker.com/",
    description:"PWA that creates and applies event templates to user calendars, focusing on irregularly reoccurring events"
  }/*,{
    title:"",
    github:"",
    url:"",
    description:""
  },{
    title:"",
    github:"",
    url:"",
    description:""
  },*/
]

const Project = props => {

  return (
    <Card href={props.url}>
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
      {ListOfProjects.map(p => (
        <Project
          title={p.title}
          github={p.github}
          url={p.url}
          description={p.description}
        />
        ))}
      <Route path="/sorts" component={Sorts} />
    </Section>
  )
}

export default Projects