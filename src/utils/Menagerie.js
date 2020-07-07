import React , { useState, useRef } from 'react'
//import Sketch from "react-p5";

import { Section } from '../styles'
import Canvas from '../components/Canvas'
//import utils from '../utils/CanvasUtils'



class Animal  {
  constructor(x,y,c,emoji) {
    this.x = x
    this.y = y

    this.dx = Math.cos(Math.random() * 2 * Math.PI)
    this.dy = Math.sqrt(1 - (this.dx * this.dx))

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
    //console.log("create",this.x,this.y, this.dx, this.dy)
    this.c.fillText(this.animal, this.x, this.y);  }
  log = () => { console.log(this.x, this.y)}
}

const Buttonbar = () => {
  return (
    <div>
      <button>click me</button>
    </div>
  )
}

const Menagerie = () => {
  const [animals, setAnimals] = useState([])
  const[loc, setLoc] = useState({x:200, y:400})

  // const canvasRef = useRef(null)
  let ref = useRef();


    return (
      <Section>
        <Buttonbar/>
        <Canvas Animal={Animal} loc={loc} setLoc={setLoc} animals={animals} setAnimals={setAnimals}/>
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
