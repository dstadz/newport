import styled, { keyframes } from 'styled-components'


const rotation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`

export const ResSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ProjectCard = styled.div`
  margin: 3em auto;
  width: 350px;
  border: solid 2px black;
  border-radius: 25px;
  background: ${({hue}) => `
    linear-gradient(${hue+180}deg,
    hsl(${hue-90}, 75%, 60%),
    hsl(${hue}, 75%, 60%)
  `});

  :hover {
    border: solid 2px white;


  }

  a{ text-decoration:none; }
  span {
    font-size: 5em;
    :hover {

      ::before{
        content: '⭐';
        -webkit-animation: rotation 2s infinite linear;
        }
      ::after{ content: '⭐' }
    }
  }

  div {
    border-radius: 0 0 25px 25px;
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

