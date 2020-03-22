import styled from 'styled-components'
import * as x from '../../styles'

// height: 5vh;
export const Nav = styled.nav`
  height: 10vh;
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-around;
  font-family: 'Titillium Web';
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  @media (max-width: 767px) { justify-content: space-between }
  * {
    box-sizing: border-box;
    transition: all .35s ease;
  }
`
export const logo = styled.span`
  background: cyan`
export const H6 = styled.h6`
  background: cyan;
  @media (min-width: 767px) { display:flex }
  @media (max-width: 767px) { display:none }
`
export const Ul = styled.ul`
  display: flex;
  justify-content:space-around
  list-style-type: none;
  @media (max-width:767px){ display:none }
  li {
    display: inline-block;
    list-style: outside none none;
    margin: .5em 1em;
    paddin: 0;
    a{
      color: ${props => `hsl(${props.color},50%,60%)` || "white"};
      text-decoration: none;
      font-size: 2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      padding: .5em .8em;
      position: relative;
      text-decoration: none;
      font-size: 20px;
      ::before, ::after {
        content: '';
        height: 14px;
        width: 14px;
        position: absolute;
        transition: all .35s ease;
        opacity: 0;
      }
      ::before {
        right: 0;
        top: 0;
        border-top: 3px solid #3E8914;
        border-right: 3px solid #2E640F;
        transform: translate(-100%, 50%);
      }
      :after {
        left: 0;
        bottom: 0;
        border-bottom: 3px solid #2E640F;
        border-left: 3px solid #3E8914;
        transform: translate(100%, -50%)
      }
      :hover:before, :hover:after{
        transform: translate(0,0);
        opacity: 1;
      }
    }
`
export const StyledMenu = styled.nav`

  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background: orange;
  @media (min-width: 768px) { display:none }
  @media (max-width: 767px) { width: 100% }
  a {
    transition: color 0.3s linear;
    &:hover { color: #343078 }
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
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
  &:focus { outline: none }
  @media (min-width:767px) { display:none }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'red' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child { transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'} }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) { transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'} }
  }
`