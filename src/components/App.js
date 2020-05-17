import React , {useState} from "react";
//import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'


import Routes from './Segments/Routes'
import { Body } from '../styles'




const App = () => {
  //const { hue, setHue } = useContext(HueContext)
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const handleButton = e => {
    console.log("This proves I'm a good developer ;)")
  }
  const colorShift = () => { hue <= 359 ? setHue(hue+2) : setHue(0)}


  return (
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
  );
}

export default App
