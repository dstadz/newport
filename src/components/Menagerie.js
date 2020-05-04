import React , { useState, useEffect, useRef } from 'react'
import Sketch from "react-p5";

import * as x from '../styles/canvasStyles'
import { Section } from '../styles'


const HOOK_PATH = new Path2D(x.HOOK_SVG)
const SCALE = 0.3
const OFFSET = 80


function draw(ctx, location) {
  ctx.fillStyle = 'deepskyblue'
  ctx.shadowColor = 'dodgerblue'
  ctx.shadowBlur = 20
  ctx.save()
  ctx.scale(SCALE, SCALE)
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
  ctx.fill(HOOK_PATH)
  ctx.restore()
}




const Menagerie = () => {
  let y = 0
  let dir= '^'
  const [locations, setLocations] = useState([])
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
    locations.forEach(location => draw(ctx, location))
  })
  function handleCanvasClick(e) {
    console.log(locations)
    const newLocation = { x: e.clientX, y: e.clientY }
    setLocations([...locations, newLocation])
  }
  function handleClear() {
    setLocations([])
  }
  return (
    <Section>
      <button onClick={handleClear}>Clear</button>
      <x.Canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
      />

      <Sketch
        setup={(p5, parentRef) => {
          p5.createCanvas(200, 200).parent(parentRef);
        }}
        draw={p5 => {
          p5.background(0);
          p5.fill(255, y*1.3, 0);
          p5.ellipse(p5.width / 2, y, 50);
          if (y > p5.height) dir = '';
          if (y < 0) dir = '^';
          if (dir === '^') y = y+8
          else y = y-4;
        }}
      />
    </Section>
  )
}




export  default Menagerie