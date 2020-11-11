import styled from 'styled-components'
import { borderRadius } from '../../styles'

export const AboutMeContainer = styled.div`
  margin: auto;
  max-width: 800px;
  background: silver;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
  ${'' /* border: 1px blue solid; */}
  ${borderRadius};

  padding: 2rem;

  p {
    font-size: 20px;
  }

  ul {
    columns: 100px 5;
    padding: 0;
    list-style:none;
  }
`
export const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`
