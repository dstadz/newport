import styled from 'styled-components'
import { Section } from '../../styles'

export const about = styled(Section)`
  margin:auto;
  color: green
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