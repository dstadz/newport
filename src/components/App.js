import React , {useState} from "react";
import { Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'


import Routes from './Segments/Routes'
import { Body } from '../styles'


export const hueState = atom({
  key: 'hueState',
  default: Math.floor(Math.random() * 360)
});

const App = () => {
  const [hue, setHue] = useRecoilState(hueState)
  const handleButton = e => {
    console.log("This proves I'm a good developer ;)")
  }
  const colorShift = () => { hue <= 359 ? setHue(hue+2) : setHue(0)}


  return (
    <Body hue={hue} onClick={() => colorShift()} >
      <Nav/>
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
