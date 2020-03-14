import React from 'react'
import * as x from './styles.js'



const ListOfProjects = [
  {
    title:"D8 Picker",
    github:"",
    url:"https://www.d8picker.com/",
    description:"PWA that creates and applies event templates to user calendars, focusing on irregularly reoccurring events"
  },{
    title:"Food Mood",
    github:"",
    url:"",
    description:"Ever hungry but have no idea what to eat? FoodMood will help dispell your undecisiveness"
  },{
    title:"",
    github:"",
    url:"",
    description:""
  },
]

const Project = ({props}) => {
  const { title, url, github, description} = props
  return (
    <x.Card>
      <x.H3>{title}</x.H3>
      <a href={url} target="_blank"> <x.link /> </a>
      {github}
      {description}
    </x.Card>
  )
}


const Projects = () => {

  return (
    <x.projects>
      <h2> This is the list things Ive done: </h2>
      <x.cardDeck>
      {ListOfProjects.map(p => (
        <Project 
        title={p.title}
        github={p.github}
        url={p.url}
        description={p.description}
        />
        ))}
      </x.cardDeck>
    </x.projects>
    
  )
}

export default Projects