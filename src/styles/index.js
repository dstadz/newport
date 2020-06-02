import styled from 'styled-components'

export const Section = styled.section`

  @media(min-width: 1024px){
    width: 50%
  }
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;

  img{
    height:250px
    width:250px
    margin:auto;
  }

  a img {
    height:64px
    width:64px
    background: rgba(100,100,100,.5);
    border-radius:32px

  }
`
export const Body = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin:0
  padding:0
  background: ${props => `linear-gradient(${props.hue/8}deg, hsl(${props.hue+90}, 75%, 60%), hsl(${props.hue}, 75%, 60%)`});
  height: 100vh;

  h1{
    margin-bottom: 0
  }

  @media(max-width:750px){
    height: 100%;
`
export const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Button = styled.button`
  transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`
export const H1 = styled.h1`
  font-size: 5vh;
  margin:0
`
export const H2 = styled.h2`
  font-size: 4vh;
  margin:0
`
export const H3 = styled.h3`
font-size: 3vh;
margin:0
`
export const Button2 = styled.button`
  border: 1px red solid
  border-radius: 30px
  width: 100px
  margin: auto
`

export const Form = styled.form`
  margin:auto
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2vh;

  @media(max-width:768px){ width: 75vw; };
  @media(min-width:768px){ width: 50vw; };
  @media(min-width:1024px){ width: 33vw; }

  & > * {
    margin: auto
    border-radius:.5rem;
    border: 1px solid black;
    font-size: 1rem;
    padding: .375rem .75rem;
  }

  label{
    align-self: flex-start;
    margin: 15px 0 0;
    border: 0
    padding-left: 0
    padding-bottom: 0
  }

  input{
    width: calc(100% - 1.5rem);
    height: calc(1em + .5rem + 2px);
    line-height: 1.25;
  }

  textarea{
    width: calc(100% - 1.5rem);
    height: calc(2em + 3rem + 2px);
    justify-content: flex-start;
    line-height: 1.5;

  }

  button {
    align-self: flex-start;
    margin: 1rem 0
    padding: .375rem .75rem
  }
`
export const Div = styled.div`
  display: flex
  flex-direction: column
  justify-content: center;
  background: black;
  align-items: center
  height: 10vh;
  width: 100%
  color: white
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
border: 3px solid green
`
export const SortContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  align-items: center;
  justify-content: space-around;
  `

export const SortBase = styled.div`
  border: 1px solid white
  margin: auto
`

export const Skills = styled.ul`
  columns: 100px 2;
  padding: 0;
  list-style:none;
`

export const ResSec = styled.div`
  display: flex
  flex-wrap: wrap
  justify-content: center

  div {

    img {
      display: block;
      max-width:230px;
      max-height:95px;
      width: auto;
      height: auto;
    }

    width: 25%
    @media(max-width:768px){ width: 90vw; }
    border: 1px solid black
    margin:.5em auto
    background: white;
    padding:.5em

    ol{
      border: 1px solid black

      padding: 5px 10px;
      display: inline

      li{
        display: inline
      }
    }

    ul{
      padding-left: 20px
      li{
        text-align: left
      }
    }
  }
`

export const AboutTop = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around
  div{
    margin:auto
  }
`