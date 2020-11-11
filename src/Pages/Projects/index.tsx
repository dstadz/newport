import React from 'react'
import { useRecoilValue } from 'recoil'
import { hueState } from '../../utils/store'

import Project from './Project'
import { projectList } from './projectList'
import { ProjectsContainer } from './styles.js'

const Projects = () => {
  const hue = useRecoilValue(hueState)

  return (
    <ProjectsContainer hue={hue}>
      {projectList.map( p => (
        <Project key={p.title} props={p} />
      ))}
    </ProjectsContainer>
  )
}

export default Projects
