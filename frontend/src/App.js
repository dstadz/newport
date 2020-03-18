import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/'
import Home from './components/Home/'
import About from './components/About/'
import Projects from './components/Projects'
import Contact from './components/Contact/'
import Footer from './components/Footer/Footer'
import * as x from './styles'

import styled from 'styled-components'
//import './App.css'



const App = () => {
  const [hue, setHue] = useState(30)

  const handleButton = e => {
    //e.preventDefault();
    console.log('it fires')
  } 
  return (
    <x.Body>
      <Nav />
      <Route exact path="/" render={props => {
        return <Home {...props} 
          id='Home'
          handleButton={ handleButton }
      /> }}/>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />

      <Footer />
    </x.Body>
  );
}

export default App
