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
    console.log(this.x)
    this.c.fillText("Animal", this.x, this.y);  }
  log = () => { console.log(this.x, this.y)}
}


const Menagerie = () => {
  // const [locations, setLocations] = useState([])
  // const canvasRef = useRef(null)

  // useEffect(() => {
  //   const canvas = document.querySelector('canvas')
  //   const c = canvas.getContext('2d')
  //   c.font = "50px Arial";
  //   let innerWidth = window.innerWidth
  //   let innerHeight = window.innerHeight


  //   let middle = new Animal (innerWidth / 2, innerHeight / 2, c, "pig")
  //   middle.create()
  //   middle.log()
  //   canvas.width = innerWidth
  //   canvas.height = innerHeight
  //   let mouse = {
  //     x: innerWidth / 2,
  //     y: innerHeight / 2
  //   }
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
  return (
    <Section>
      <Canvas/>
    </Section>
  )
}

export  default Menagerie
