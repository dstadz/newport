import React, {useState} from 'react'
import styled from 'styled-components'

const Question = styled.div`
  border: red 1px solid;
  width:300px;
  justify-content:space-between;
`
const Answer = styled.div`
  border: blue 1px solid;
  width:300px;

`

const Card = props => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div>
      <Question>
        {props.question}
        <button onClick={toggleOpen}>open</button>
      </Question>
      {open && <Answer> {props.answer} </Answer>}
    </div>
  )
}

export default Card
