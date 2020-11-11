import styled from 'styled-components'

export const borderRadius = `border-radius: 15px`

export const Body = styled.div`
  margin: auto;
  padding:0;
  min-height:100vh;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({hue}) =>`
    linear-gradient(${(Math.floor(Math.random()*6)*60)}deg,
    hsl(${hue+90}, 75%, 60%),
    hsl(${hue}, 75%, 60%)
  `});

  h1{ margin-bottom: 0 }

`

export const Section = styled.section`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .face {
    height:250px;
    width:250px;
    margin:auto;
  }

  .buttonRow {
    justify-content: space-around;

    a img {
      height:64px;
      width:64px;
      background: rgba(100,100,100,.5);
      border-radius: 50%
    }
  }
`


export const Button = styled.button`
  transform: ${({ open }) => open
  ? 'rotate(0deg)'
  : 'rotate(180deg)'};
`
export const H1 = styled.h1`
  font-size: 5vh;
  margin:0;
`
export const H2 = styled.h2`
  font-size: 4vh;
  margin:0;
`
export const H3 = styled.h3`
  font-size: 3vh;
  margin:0;
`
export const Button2 = styled.button`
  border: 1px red solid;
  ${borderRadius};
  width: 100px;
  margin: auto;
`

export const Form = styled.form`
  margin:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2vh;

  @media(max-width:768px){ width: 75vw; };
  @media(min-width:768px){ width: 50vw; };
  @media(min-width:1024px){ width: 33vw; }

  & > * {
    margin: auto;
    ${borderRadius};
    border: 1px solid black;
    font-size: 1rem;
    padding: .375rem .75rem;
  }

  label {
    align-self: flex-start;
    margin: 15px 0 0;
    border: 0;
    padding-left: 0;
    padding-bottom: 0;
  }

  input {
    width: calc(100% - 1.5rem);
    height: calc(1em + .5rem + 2px);
    line-height: 1.25;
  }

  textarea {
    width: calc(100% - 1.5rem);
    height: calc(2em + 3rem + 2px);
    justify-content: flex-start;
    line-height: 1.5;

  }

  button {
    align-self: flex-start;
    margin: 1rem 0;
    padding: .375rem .75rem;
  }
`


const Link = styled.a``
export const Card = styled(Link)`
  width: 300px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  background: blue;
  align-items: center;
  justify-content: space-between;
  color:white;
  text-decoration: none;
  border: 3px solid green;
`
export const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  align-items: center;
  justify-content: space-around;
  `

export const SortBase = styled.div`
  border: 1px solid white;
  margin: auto;
`

export const Question = styled.div`
  border: black 1px solid;
  ${borderRadius};
  background: white;
  width:350px;
  justify-content: space-between;
  margin: 15px auto;
  padding: 5px 10px;

  button {
    background:none;
    border:none
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  align-items: center;
  height: 8vh;
  color: white;
  `

