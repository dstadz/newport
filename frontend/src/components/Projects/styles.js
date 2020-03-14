import styled from 'styled-components'
import * as x from '../../styles'

export const projects = styled(x.Section)`
  background: darkgoldenrod;
  `

export const words = styled.div`
  margin:auto;
`
export const H1 = styled.h1`
  font-size: 5vh;
`

export const H2 = styled.h2`
  font-size: 4vh;
`

export const H3 = styled.h3`
font-size: 3vh;
margin: .1vh;
`

export const H4 = styled.h4`
font-size: 2vh;
`
export const cardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
`
export const Card = styled.div`
  border: 1px blue solid;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;

  @media(max-width:768px){
    width: 75vw;
  };  @media(min-width:768px){
    width: 25vw;
    color:red;
  };
`
export const link = styled.div`
margin: auto;
  width:80%;
  height: 15vh;
  background: silver;
`

export const Button = styled.button`
  background:blue;
  transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`