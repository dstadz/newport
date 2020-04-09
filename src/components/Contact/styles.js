import styled from 'styled-components'
import * as x from '../../styles'


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
