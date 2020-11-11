import React from 'react'
import { FooterContainer } from './styles'


// const Icons8 = "https://icons8.com/icon/44019/linkedin"
const Footer: React.FC = () => {


  return (
    <FooterContainer>
      { /*
      match && <a
        href={ Icons8 }
        target="_blank"
        rel="noopener noreferrer"
      >Icons by Icons8</a>
      */}
      <p> 2020 Daniel Stadler. All rights reserved. </p>
    </FooterContainer>
  )
}
export default Footer
