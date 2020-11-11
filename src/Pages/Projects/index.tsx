import React from 'react'
import Project from './Project'
import { projectList } from './projectList'
import { ProjectsContainer } from './styles.js'

const Projects = () => {
  return (
    <ProjectsContainer>
      {projectList.map( p => (
        <Project key={p.title} props={p} />
      ))}
    </ProjectsContainer>
  )
}

export default Projects
