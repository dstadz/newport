import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;

`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  margin:0
  padding:0
  background: ${props => ` linear-gradient(${props.hue/8}deg, hsl(${props.hue+60}, 75%, 40%), hsl(${props.hue}, 75%, 40%)`});
`


export const cardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Button = styled.button`
  transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`
export const H1 = styled.h1`
  font-size: 5vh;
  margin:0
`
export const H2 = styled.h2`
  font-size: 4vh;
`
export const H3 = styled.h3`
font-size: 3vh;
`
export const H4 = styled.h4`
font-size: 2vh;
`
export const Button2 = styled.button`
  border: 1px red solid
  border-radius: 30px
  width: 100px
  margin: auto
`


export const Label = styled.label`
  align-self: flex-start
`
export const Input = styled.input`
  width:100%;
`
export const MSGBox = styled.textarea`
  height: 100px;
  justify-content: flex-start;
  width: 100%;
`
export const Form = styled.form`
`
export const Slot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vh;
  @media(max-width:768px){
    width: 75vw;
  };  @media(min-width:768px){
    width: 50vw;
  };
  @media(min-width:1024px){
    width: 33vw;
  }
`
export const Div = styled.div`
  display: inline-flex column;
  align-items:center;
  justify-content: center;
  height: 10vh;
  width: 100%
  background: black;
  color: white
  `
const Link = styled.a``
export const Card = styled(Link)`
width: 300px;
margin: 30px;
display: flex;
flex-direction: column;
background: blue;
align-items: center;
justify-content: space-between;
color:white;
text-decoration: none;
border: 3px solid green
`
export const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  align-items: center;
  justify-content: space-around;
  `

export const SortBase = styled.div`
  border: 1px solid white
  margin: auto
`

export const Skills = styled.ul`
`
export const Projects = styled.div`
`
export const Education = styled.div`
`
export const Employment = styled.div`
`
export const Interests = styled.div`
`