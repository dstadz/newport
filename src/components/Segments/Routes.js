import React , {useState} from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";

import About from '../About'
import Contact from '../Contact'
import Projects from '../Projects'
import Resume from '../Resume'
import SortingPage from '../SortingPage'


const Routes = () => { return (
  <>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/sortingAlgorithms" component={SortingPage} />
  </>
)}

export default Routes