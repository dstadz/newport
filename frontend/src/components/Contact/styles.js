import styled from 'styled-components'
import * as x from '../../styles'


export const contact = styled(x.Section)`
  display:flex;
  `

export const words = styled.div`
  margin:auto;
`
export const H1 = styled.h1`
  color:red;
`

export const H2 = styled.h2`
  color:green;
`

export const cardDeck = styled.div`
  color:gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Label = styled.label`
  color: green;
  align-self: flex-start
`

export const Input = styled.input`
  border: 1px solid red;
  width:100%;
`

export const MSGBox = styled.textarea`
  border: 1px solid blue;
  height: 100px;
  justify-content: flex-start;
  width: 100%;

`

export const Form = styled.form`
  border: purple 1px solid;


`

export const Slot = styled.div`
  border: purple 1px solid;

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
