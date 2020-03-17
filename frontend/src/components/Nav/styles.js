import styled from 'styled-components'
import * as x from '../../styles'


// height: 5vh;
export const Nav = styled.div`

  display: flex;
  justify-content: space-around;
  background: black;
  align-items: center;
`
export const logo = styled.span`
  background: red;
`
export const H6 = styled.h6`
background: red;
margin: 0
@media (min-width: 767px) {
  display:flex;
}
@media (max-width: 768px) {
  display:none;
  }
`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width:424px){
    display:none
  }
`
export const Li = styled.li`
  color:white
  margin: 0 5rem
`
export const StyledMenu = styled.nav`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background: orange;

  @media (min-width: 425) {
    display:none;
  }
  @media (max-width: 426px) {
      width: 100%;
    }

  a {
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
export const StyledBurger = styled.button`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width:425px){
    display:none
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`