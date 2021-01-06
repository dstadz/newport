import styled from 'styled-components'

export const borderRadius = `
border-radius: 15px;
border: solid 2px black;
:hover {
  border: solid 2px hsl(${Math.floor(Math.random()*359)},100%,60%);
}
`

export const cornerFloat = (hue:number) =>`
  ::before, ::after {
    content: 'X';
    height: 20px;
    width: 20px;
    position: absolute;
    transition: all .35s ease;
    opacity: 0;
  }



  :hover {
    ::before, ::after{
      transform: translate(0,0);
      opacity: 1;
    }
`

export const Body = styled.div<{hue:number}>`
  margin: auto;
  padding:0;
  min-height:100vh;
  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({hue}) =>`
    linear-gradient(120deg,
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

  h1 {
    font-size: 5vh;
    margin:0;
  }
  
`


export const Button = styled.button<{open:boolean}>`
  transform: ${({ open }) => open
  ? 'rotate(0deg)'
  : 'rotate(180deg)'};
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
  border: 1px solid white;
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


