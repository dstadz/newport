import React, { FC, useState } from 'react'
import { Question } from '../../styles'

interface CardInterface {
  props : {
    question:string,
    answer:string
  }
}


const Card: FC<CardInterface> = ({props}) => {
  const { question, answer } = props
  const [open, setOpen] = useState(false)

  const toggleOpen = () => { setOpen(!open) }

  return (
    <Question onClick={toggleOpen} >
      <span>{question}</span>
      <button> { open ? '🔺' : '🔻' } </button>
      <br/>
      {open && <span> {answer} </span>}
    </Question>
  )
}

export default Card
