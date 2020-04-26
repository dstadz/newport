import React from 'react'
import { SortBase } from '../../styles'
import { Title, ButtonBar, Code, CompTable } from './sortstyles'


const SortCard = props => {
  console.log(props)

  return (
    <SortBase>
      <canvas />
      <Title>{props.title}</Title>
      <ButtonBar />
      <Code />
      <CompTable />
    </SortBase>
  )
}

export default SortCard