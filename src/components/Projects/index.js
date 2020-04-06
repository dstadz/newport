import React from 'react'
import { Card, Container } from './styles'


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
    <Container>
      {ListOfProjects.map(p => (
        <Project
          title={p.title}
          github={p.github}
          url={p.url}
          description={p.description}
        />
      ))}
    </Container>
  )
}

export default Projects