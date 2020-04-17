import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Body } from './styles'




const App = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))

  const handleButton = e => {
    console.log("This proves I'm a good developer ;)")
  }
  const colorShift = () => { hue <= 359 ? setHue(hue+2) : setHue(0)}


  return (
    <Body
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
    </Body>
  );
}

export default App