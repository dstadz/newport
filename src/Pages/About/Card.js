import React, { useState } from 'react'
import { Question } from '../../styles'

const Card = props => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => { setOpen(!open) }

  return (
    <Question onClick={toggleOpen} >
      <span>{props.question}</span>
      <button> { open ? '🔺' : '🔻' } </button>
      <br/>
      {open && <span> {props.answer} </span>}
    </Question>
  )
}

export default Card
