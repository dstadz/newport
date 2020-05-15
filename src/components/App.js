import React , {useState, useContext} from "react";
//import ReactDOM from "react-dom";
import { HueContext } from '../utils/Context'
import { Route } from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'


import Routes from './Segments/Routes'
import { Body } from '../styles'




const App = () => {
  const { hue, setHue } = useContext(HueContext)
  const handleButton = e => {
    console.log("This proves I'm a good developer ;)")
  }
  const colorShift = () => { hue <= 359 ? setHue(hue+2) : setHue(0)}


  return (
    <HueContext.Provider>
      <Body hue={hue} onClick={() => colorShift()} >
        <Nav hue={hue}/>
        <Route exact path="/" render={props => {
          return <Home {...props}
          id='Home'
          handleButton={ handleButton }
          /> }}/>
        <Routes/>
        <Footer />
      </Body>
    </HueContext.Provider>
  );
}

export default App
