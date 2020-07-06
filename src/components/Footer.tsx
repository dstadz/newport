import React from 'react'
import { Div } from '../styles'

import { useRouteMatch } from 'react-router-dom'
declare module 'react-router-dom';


const Footer: React.FC = () => {

  let match = useRouteMatch({
    path: '/contact',
    strict: true,
    sensitive: true
  })



  return (
    <Div>
      {match
        ? <a href="https://icons8.com/icon/44019/linkedin" target="_blank">Icons by Icons8</a>
        : '' }

      <p> 2020 Daniel Stadler. All rights reserved. </p>
    </Div>
  )
}
export default Footer