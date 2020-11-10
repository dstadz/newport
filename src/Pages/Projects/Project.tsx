import React, { FC } from 'react'
import { useRecoilValue } from 'recoil';
import { ProjectInterface } from './projectList'
import { hueState } from '../../utils/store'
import { ProjectCard } from './styles.js'
import share from '../../assets/share.png'
import notionPic from '../../assets/notion.png'
import GitMark from '../../assets/GitHub-Mark-32px.png'







const Project: FC<ProjectInterface> = ({props}) => {
  const hue = useRecoilValue(hueState)
  const {
    link,
    emoji,
    title,
    stack,
    desc,
    github,
    notion,
    duties,
  } = props
  const links = [
    [github, GitMark],
    [notion, notionPic],
    [link,share]
  ]

  return (
    <ProjectCard hue={hue}>
      <a target='_blank' href={link} rel="noopener noreferrer"><span role='img'>
        {emoji}
      </span></a>
      <div>
        <h2> {title} </h2>
        <ul>
          {stack.map(s => (
            <li key={s}> { s } </li>
          ))}
        </ul>
        <p>{desc}</p>
        <div>
          {links.map(l => (
            <a target='_blank' href={l[0]} rel="noopener noreferrer">
              <img alt='github' src={l[1]} />
            </a>
          ))}
        </div>
      </div>
    </ProjectCard>
  )
}

export default Project

