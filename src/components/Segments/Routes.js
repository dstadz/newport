import React  from "react";
// import { Route } from "react-router-dom";

import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Projects from '../../Pages/Projects'
import Contact from '../../Pages/Contact'
// import Resume from '../Resume'
// import SortingPage from '../SortingPage'

// const routes = ['/', 'about', 'contacts', 'projects', 'resume', 'sortingAlgorithms' ]


const routes = {
  '/': () => <Home />,
  '/about': () => <About />,
  '/projects': () => <Projects/>,
  '/contact': () => <Contact/>,
}
export default routes