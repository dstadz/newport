import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/'
import Home from './components/Home/'
import About from './components/About/'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact/'
import Footer from './components/Footer/Footer'
import * as x from './styles'

import styled from 'styled-components'
//import './App.css'



const App = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))

  const handleButton = e => {
    //e.preventDefault();
    console.log("This proves I'm a good developer ;)")
  }
  const colorShift = () => { hue <= 359 ? setHue(hue+2) : setHue(0)}


  //background: linear-gradient(to right top, `hsl(${hue}, 75%, 40%)`, #004d7a);
  //background: `hsl(${hue}, 75%, 40%)`
  return (
    <x.Body
      hue={hue}
      onClick={() => colorShift()}
    >
      <Nav hue = {hue}/>
      <Route exact path="/" render={props => {
        return <Home {...props}
          id='Home'
          handleButton={ handleButton }
      /> }}/>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />

      <Footer />
    </x.Body>
  );
}

export default App
