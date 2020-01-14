import React , { useState }from 'react'
import Slide from './Slide'
const Slideshow = () => {
  const [projects, setProjects] = useState([0,1,2])

  return (
    <div className='slideshow'>
      {projects.map(project => (
        <Slide
          title={project.title}
          />
      ))}    
    </div>
  )
}

export default Slideshow