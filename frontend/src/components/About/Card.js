import React, {useState} from 'react'
import styled from 'styled-components'

const Question = styled.div`
  border: red 1px solid;
  width:300px;
  justify-content:space-between;
  margin: 15px;
`
const Answer = styled.div`
  border: blue 1px solid;
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
        {open && <Answer> {props.answer} </Answer>}
      </Question>
    </div>
  )
}

export default Card
