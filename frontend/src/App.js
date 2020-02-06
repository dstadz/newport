import React , {useState} from "react";
/*import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
*/import Nav from './components/Nav/'
import Home from './components/Home/'
import About from './components/About/'
import Projects from './components/Projects'
import Contact from './components/Contact/ContactForm'
//import Slideshow from './components/Slideshow'
import Footer from './components/Footer'

import styled from 'styled-components'
//import './App.css'



const App = () => {
  const [state, setState] = useState('state')
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `

  const handleButton = e => {
    //e.preventDefault();
    console.log('it fires')
  }
  return (
    <Body>
      {/*<Home 
      id='Home'
      handleButton = { handleButton } 
      <Nav />
    />*/}
      <About id='About'/>
      <Projects id='Project'/>
      <Contact id='Contact'/>
      <Footer />
    </Body>
  );
}

export default App
