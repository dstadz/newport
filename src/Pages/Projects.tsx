import React, { FC, useEffect } from 'react'
import { Section, ResSec, ProjectContainer } from '../styles'
import cal from '../assets/cal.png'
import food from '../assets/food.jpeg'
import life from '../assets/life.jpg'
import GitMark from '../assets/GitHub-Mark-32px.png'
import share from '../assets/share.png'
import { useSetRecoilState } from 'recoil';


const projectList = [
  {
    title:'Goal Getter',
    github:'https://github.com/dstadz/GoalsFE',
    link:'https://goalgetter.netlify.app/',
    desc:'Todo List App that tracks goals and habits over a lifetime',
    stack:['React','Node','Express','Knex'],
    duties:[
      'Created 15+ CRUD endpoints to connect Front and Back Ends',
      'Designed & built 12+ React components, styled to fit theme of app',
      'Implemented State management with Recoil, new experimental  SM library'
    ],
    pic:life
  },{
    title:'D8 Picker',
    github:'https://github.com/Lambda-School-Labs/school-calendar-fe',
    link:'',
    desc:'PWA calendar extension to handle irregularly repeating events.',
    stack:['React','Node','MongoDB'],
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
    duties:[
      'Handled server-side routing with Knex',
      'Managed data persistence across the app',
      'Used HTTP Protocol methods to access user data'
    ],
    pic:food
  }
]

interface Props {
  props: {
    title:string,
    github:string,
    link:string,
    desc:string,
    stack:string[],
    duties:string[],
    pic:string
  }
}



const Project: FC<Props> = ({props}) => {
  const {title, github, desc, link, stack, duties, pic} = props
  return (
    <ProjectContainer>
      <h3> {title} </h3>
      <img src={pic} alt={title} />
      <p> {desc} </p>

      <div className='techStack'>
        <ol>
          {stack.map(s => ( <li key={s}> { s } </li> ))}
        </ol>
      </div>

      <div>
        <a target='_blank' href={github} > <img src={GitMark} /> </a>
        <a target='_blank' href={link} > <img src={share} /> </a>
      </div>
    </ProjectContainer>
  )
}


const Projects = () => {

  return (
    <Section style={{width:'100%'}}>
      <ResSec>
        { projectList.map( s => ( <Project key={s.title} props={s} /> ) ) }
      </ResSec>
    </Section>
  )
}

export default Projects
