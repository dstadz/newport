import React , { useState, useEffect, useRef } from 'react'
//import Sketch from "react-p5";

import { Section } from '../styles'
import Canvas from './Canvas'
//import utils from '../utils/CanvasUtils'



class Animal  {
  constructor(x,y,c,emoji) {
    this.x = x
    this.y = y
    this.c = c
    this.animal = emoji
  }
  draw = () => {
    this.c.beginPath()
    this.c.arc(this.x, this.y, this.r,0, Math.PI*2)
    this.c.fillStyle = this.color
    this.c.fill()
    this.c.closePath()
  }
  create = () => {
    console.log("create",this.x,this.y)
    this.c.fillText(this.animal, this.x, this.y);  }
  log = () => { console.log(this.x, this.y)}
}


const Menagerie = () => {
  const [animals, setAnimals] = useState([])
  const[x,setX] = useState(200)

  // const canvasRef = useRef(null)
  let ref = useRef();


    return (
      <Section>
        <Canvas Animal={Animal} x={x} setX={setX}/>
      </Section>
    )
  //   window.addEventListener('mousemove', function(e){
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY
  //   })

  //   window.addEventListener('resize', function(){
  //     canvas.width = this.innerWidth;
  //     canvas.height = this.innerHeight;

  //     //init()

  //     c.fillText("Hello World",500,500);

  //   })
  // }, [])


  // const handleClick = e => {
  //   console.log(e.clientX, e.clientY)
  //   //draw(ctx, { x: e.clientX, y: e.clientY })

  // }
}

export  default Menagerie
