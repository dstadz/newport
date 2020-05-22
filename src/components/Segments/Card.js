import React, {useState} from 'react'
import styled from 'styled-components'

const Question = styled.div`
  border: black 1px solid;
  background: white
  width:360px;
  justify-content: space-between;
  margin: 15px auto;
  padding: 5px 10px
`

const Card = props => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => { setOpen(!open) }

  return (
    <div>
      <Question onClick={toggleOpen} >
        <span>{props.question}</span>
        <button style={{background:"none", border:'none'}} > { open ? '🔺' : '🔻' } </button>
        <br/>
        {open && <span> {props.answer} </span>}
      </Question>
    </div>
  )
}

export default Card
