import React, { FC } from 'react'
import { useRecoilValue } from 'recoil';


import { hueState } from '../../utils/store'

import { Section } from '../../styles'
import { ResSec, ProjectCard } from './styles.js'
import cal from '../../assets/cal.png'
import food from '../../assets/food.jpeg'
import life from '../../assets/life.jpg'
import GitMark from '../../assets/GitHub-Mark-32px.png'
import notionPic from '../../assets/notion.png'
import share from '../../assets/share.png'


const projectList = [
  {
    title:'Goal Getter',
    github:'https://github.com/dstadz/GoalsFE',
    link:'https://goalgetter.netlify.app/',
    desc:'Todo List App that tracks goals and habits over a lifetime',
    stack:['React','Node','Express','Knex'],
    emoji:'🥇',
    duties:[
      'Created 15+ CRUD endpoints to connect Front and Back Ends',
      'Designed & built 12+ React components, styled to fit theme of app',
      'Implemented State management with Recoil, new experimental  SM library'
    ],
    pic:life
  },{
    title:'D8 Picker',
    github:'https://github.com/Labs20-D8Picker/DatePickerFE',
    link:'https://labs20d8picker.netlify.app/',
    desc:'PWA calendar extension to handle irregularly repeating events.',
    notion: 'https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1',
    stack:['React','Node','MongoDB'],
    emoji:'📅',
    duties:[
      'Used OAuth to connect to Google Cal API',
      'Developed Front End Components',
      'Crafted user interface for interaction with calendar',
    ],
    pic:cal
  }, {
    title:'Foodie Fun Six',
    github:'https://github.com/dstadz/foodie-fun6-server',
    link:'',
    desc:'Yelp clone made to store and review visited restaurants and meals',
    stack:['Node','Knex'],
    emoji:'🍲',
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ],
    pic:food
  }
]

interface Project {
  props: {
    title:string,
    github:string,
    link:string,
    desc:string,
    emoji?:string,
    notion?:string,
    stack:string[],
    duties:string[],
    pic:string
  }
}

const Project: FC<Project> = ({props}) => {
  const {title, github, desc, link, stack, duties, emoji, notion} = props
  const hue = useRecoilValue(hueState)

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
