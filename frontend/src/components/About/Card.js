import React from 'react'

const Card = props => {
  return (
    <div>
      {props.prompt}
      {props.answer}
    </div>
  )
}

export default Card
