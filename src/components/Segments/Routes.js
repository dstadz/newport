import React  from "react";
import { Route } from "react-router-dom";

import Home from '../Home.tsx'
import About from '../About'
import Contact from '../Contact'
import Projects from '../Projects.tsx'
import Resume from '../Resume'
import SortingPage from '../SortingPage'


const Routes = () => { return (
  <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/sortingAlgorithms" component={SortingPage} />
  </>
)}

export default Routes