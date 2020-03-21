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
}

@media (max-width: 767px) {
  justify-content: space-between;
}
* {
  box-sizing: border-box;
  transition: all .35s ease;
}

li {
  display: inline-block;
  list-style: outside none none;
  margin: .5em 1em;
  paddin: 0;
}
  
a {
  padding: .5em .8em;
  color: rgba(255,255,255,.5);
  position: relative;
  text-decoration: none;
  font-size: 20px;
}
a::before,
a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #3E8914;
  border-right: 3px solid #2E640F;
  transform: translate(-100%, 50%);
}

a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #2E640F;
  border-left: 3px solid #3E8914;
  transform: translate(100%, -50%)
}

a:hover:before,
a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

a:hover {
  color: #3DA35D;
}
  
  
  
  
  
  }
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
@media (max-width: 767px) {
  display:none;
  }
`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width:767px){
    display:none
  }
`
export const Li = styled.li`
  margin: 0 5rem;

   a{
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

  }
`
export const StyledMenu = styled.nav`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  background: orange;

  @media (min-width: 768px) {
    display:none;
  }
  @media (max-width: 767px) {
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

  @media (min-width:767px){
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