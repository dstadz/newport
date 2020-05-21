import React, {useState} from 'react'
import styled from 'styled-components'

const Question = styled.div`
  border: red 1px solid;
  width:360px;
  justify-content:space-between;
  margin: 15px auto;
`
const Answer = styled.div`
  border: blue 1px solid;
`

const Card = props => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => { setOpen(!open) }

  return (
    <div>
      <Question onClick={toggleOpen} >
        <span>{props.question}</span>
        <button style={{background:"none", border:'none'}} > { open ? '🔺' : '🔻' } </button>
        {open && <Answer> {props.answer} </Answer>}
      </Question>
    </div>
  )
}

export default Card
