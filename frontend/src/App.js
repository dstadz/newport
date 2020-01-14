import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
import './App.css'



const App = () => {
  return (
    <div className='App'>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>

      {/*<Slideshow />*/}

      <Footer />
    </div>
  );
}

export default App
