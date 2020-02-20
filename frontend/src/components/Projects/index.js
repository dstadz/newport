import React from 'react'


const ListOfProjects = [
  {
    title:"D8 Picker",
    github:"",
    url:"https://www.d8picker.com/",
    description:"PWA that creates and applies event templates to user calendars, focusing on irregularly reoccurring events"
  },{
    title:"",
    github:"",
    url:"",
    description:""
  },{
    title:"",
    github:"",
    url:"",
    description:""
  },
]

const Project = props => {

  return (
    <div>
      {props.title}
      {props.github}
      {props.url}
      {props.description}
    </div>
  )
}


const Projects = () => {

  return (
    <div>
      this is the list things Ive done:
      {ListOfProjects.map(p => (
        <Project 
          title={p.title}
          github={p.github}
          url={p.url}
          description={p.description}
        />
      ))}
    </div>
  )
}

export default Projects