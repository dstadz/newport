import React from 'react'
import { Card } from '../../styles'
import { Title, ButtonBar, Code, CompTable } from './sortstyles'


const SortCard = props => {
  console.log(props)

  return (
    <Card>
      <canvas />
      <Title>{props.title}</Title>
      <ButtonBar />
      <Code />
      <CompTable />
    </Card>
  )
}

export default SortCard