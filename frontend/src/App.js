import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home/'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact/ContactForm'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
//import './App.css'



const App = () => {
  //const [state, setState] = useState(state)


  const handleButton = e => {
    //e.preventDefault();
    console.log('it fires')
  }
  return (
    <div className='App'>
    <Home 
      handleButton = { handleButton } 
      />
    <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
