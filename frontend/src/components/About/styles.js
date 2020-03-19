import styled from 'styled-components'
import * as x from '../../styles'

export const about = styled(x.Section)`
  `

export const words = styled.div`
  margin:auto;
`
export const H1 = styled.h1`
  font-size: 5vh;
`

export const H2 = styled.h2`
  font-size: 4vh;
`

export const H3 = styled.h3`
font-size: 3vh;
`

export const H4 = styled.h4`
font-size: 2vh;
`
export const cardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Card = styled.div`
  width:50%
  @media()
`

export const Button = styled.button`
  transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`