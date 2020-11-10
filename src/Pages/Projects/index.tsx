import React from 'react'
import Project from './Project'
import { projectList } from './projectList'
import { Section } from '../../styles'
import { ResSec } from './styles.js'

const Projects = () => {
  return (
    <Section>
      <ResSec>
        {projectList.map( p => (
          <Project key={p.title} props={p} />
        ))}
      </ResSec>
    </Section>
  )
}

export default Projects
