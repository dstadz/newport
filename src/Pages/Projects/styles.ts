import styled from 'styled-components'
import { borderRadius, cornerFloat } from '../../styles'



// const rotation = keyframes`
//   from {
//     -webkit-transform: rotate(0deg);
//   }
//   to {
//     -webkit-transform: rotate(359deg);
//   }
// `

export const ProjectsContainer = styled.div<{hue:number}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ProjectCard = styled.div<{hue:number}>`
  margin: 3em auto;
  width: 350px;
  ${borderRadius};
  background: ${({hue}) => `
    linear-gradient(${hue+180}deg,
    hsl(${hue-90}, 75%, 60%),
    hsl(${hue}, 75%, 60%)
  `});



  ::before {
    right: 0;
    top: 0;
    border-right: 3px solid ${({ hue }) => `hsl(${hue+60},100%,30%)`};
    transform: translate(-100%, 50%);
  }

  :after {
    left: 0;
    bottom: 0;
    border-bottom: 3px solid ${({ hue }) => `hsl(${hue-60},100%,30%)`};
    border-left: 3px solid ${({ hue }) => `hsl(${hue-60},100%,60%)`};
    transform: translate(100%, -50%)
  }


  a{ text-decoration:none; }
  span {
    font-size: 5em;
    :hover {
      ::before{ content: '⭐'; }
      ::after{ content: '⭐'; }
    }
  }

  div {
    border-radius: 0 0 15px 15px;
    > * {
      background: silver;
      margin: 0;
    }
    h2 {}
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
    p { padding: 0 1em; }
    div {
      display: flex;
      justify-content: space-around;
    }
  }
`

