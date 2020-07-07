import styled from 'styled-components'

// height: 5vh;
export const NavBar = styled.nav`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-between;
  font-family: 'Titillium Web';
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;

  * {
    box-sizing: border-box;
    transition: all .35s ease;
  }

  img {
    margin: 8px
    height: 75px;
    @media (min-width: 768px) { flex-grow: 1 }
  }

  h6 {
    background: ${({ hue }) => `hsl(${hue+240},100%,60%)`};
    flex-grow: 1;
    justify-content:center
    align-items:center

    @media (min-width: 768px) { display:flex }
    @media (max-width: 767px) { display:none }
  }

  ul{
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    list-style: none;
    padding:0

    @media (max-width: 767px) {
      flex-wrap:wrap;
      display: ${({ open }) => open ? 'flex' : 'none'};
      justify-content: space-evenly
    }

    li {
      display: inline-block;
      list-style: outside none none;
      margin: .5em 1em;
      padding: 0;

      }
      a{
        color: white;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
        padding: .5em .8em;
        position: relative;

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
          border-top: 3px solid ${({ hue }) => `hsl(${hue+60},100%,60%)`};
          border-right: 3px solid ${({ hue }) => `hsl(${hue+60},100%,30%)`};
          transform: translate(-100%, 50%);
        }

        :after {
          left: 0;
          bottom: 0;
          border-bottom: 3px solid ${({ hue }) => `hsl(${hue-60},100%,30%)`};
          border-left: 3px solid ${({ hue }) => `hsl(${hue-60},100%,60%)`};
          transform: translate(100%, -50%)
        }

        :hover {
          ::before, ::after{
            transform: translate(0,0);
            opacity: 1;
          }
        }
      }
    }

  }
  @media (max-width:767px){ flex-wrap:wrap; }
  `


export const StyledMenu = styled.ul`

  background: orange;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
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

  @media (min-width:768px) { display:none }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'red' : '#EFFFFA'};
    border-radius: 1rem;
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

export const Spacer = styled.div`
  font-size: 2rem;
  flex-grow: 3;

  ::before, ::after {
    content: '';

  @media (max-width:768px) { display:none }
`
