import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/'
import Home from './components/Home/'
import About from './components/About/'
import Projects from './components/Projects'
import Contact from './components/Contact/'
//import Slideshow from './components/Slideshow'
import Footer from './components/Footer/Footer'

import styled from 'styled-components'
//import './App.css'



const App = () => {
  const [state, setState] = useState('state')
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background:red;
    height: 100%


  `

  const handleButton = e => {
    //e.preventDefault();
    console.log('it fires')
  }
  return (
    <Body>
      <Nav />
      <Route
        path="/"
        render={props => {
          return <Home {...props} 
          id='Home'
          handleButton={ handleButton }
          />;
        }}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />

      <Footer />
    </Body>
  );
}

export default App
