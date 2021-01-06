import styled from 'styled-components'
import { borderRadius } from '../../styles'

export const AboutMeContainer = styled.div`
  margin: auto;
  max-width:60%;
  background: silver;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
  ${borderRadius};

  padding: 1rem;

  div{
    text-align:start;
    width: 100%;
  }
  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
    margin:0;
  }

  ul {
    display:flex;
    flex-wrap: wrap;
    ${'' /* columns: 100px 5; */}
    ${'' /* padding: 0; */}
    ${'' /* list-style:none; */}
    li {
      margin: .5rem 1rem
    }
  }
`
export const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`
