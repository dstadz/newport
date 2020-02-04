import styled from 'styled-components'


export const Nav = styled.nav`
height: 5vh;
width: 100%;
display: flex;
justify-content: space-between;
background: orange;
position: fixed;
top: 0;
`
export const logo = styled.p`
background: blue;
height: 3vh;
margin: auto;
margin-left: 3vh;
`
export const Ul = styled.ul`
display: flex;
background: red;
list-style-type: none;
height: 100%;
margin: 0 5vh;
@media (max-width:424px){
  display:none
}
`
export const Li = styled.li`
background:yellow;
padding: 1vh;
margin:auto;
`
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  position: absolute;
  top: 0;
  right: 0%;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
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
position: absolute;
top: 15%;
right: 6%;
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