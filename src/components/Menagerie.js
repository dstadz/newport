import React , { useState, useEffect, useRef } from 'react'
import Sketch from "react-p5";

import {Canvas} from '../styles/canvasStyles'
import { Section } from '../styles'
import utils from '../utils/CanvasUtils'






const Menagerie = () => {
  const [locations, setLocations] = useState([])
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    console.log('canvas')
    let innerWidth = window.innerWidth
    let innerHeight = window.innerHeight
    
    canvas.width = innerWidth
    canvas.height = innerHeight
    
    let mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    }
    window.addEventListener('mousemove', function(e){
      mouse.x = e.clientX;
      mouse.y = e.clientY
    })
    
    window.addEventListener('resize', function(){
      canvas.width = this.innerWidth;
      canvas.height = this.innerHeight;
    
      init()
    })
    
    
    return(canvas)
  }, [])

  const Object = (x,y,r, c, color) => {
    this.x = x
    this.y = y
    this.r = r
    this.color = color
  
    this.update = () => { this.draw() }
  
    this.draw = () => {
      c.beginPath()
      c.arc(this.x, this.y, this.r,0, Math.PI*2)
      c.fillStyle = this.color
      c.fill()
      c.closePath()
    }
  }
  let c1;
  function init() {
    c1 = new Object(300,300,100,canvas, 'blue')
  }
  
  function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width, canvas.height)
    c.fillText("testing", mouse.x, mouse.y)
    c1.update()
  }
  
  init()
  animate()

  return (
    <Section>
{/*
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClear}>Clear</button>
      </div>
*/}
      <Canvas
        onClick={()=> console.log('click')}
      />
    </Section>
  )
}

export  default Menagerie
