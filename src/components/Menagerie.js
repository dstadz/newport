import React , { useState, useEffect, useRef } from 'react'
import Sketch from "react-p5";

import * as x from '../styles/canvasStyles'
import { Section } from '../styles'
import utils from './CanvasUtils'


const HOOK_PATH = new Path2D(x.HOOK_SVG)
const SCALE = 0.3
const OFFSET = 80


let flock;








const draw = (ctx, location) => {
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
  const [locations, setLocations] = useState([])
  const canvasRef = useRef(null)

  // useEffect(() => {
  //   initCanvas()
  // }, [])
  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas.getContext('2d')
    c.clearRect(0, 0, window.innerHeight, window.innerWidth)
    locations.forEach(location => draw(c, location))
    c.beginPath()
    c.arc(300,300,30, 0, Math.PI*2,false)
    c.fillStyle = 'blue'
    c.fill()

    c.font = "30px Arial";
    c.fillText("🐷", 0, window.innerHeight);
  })



  function handleCanvasClick(e) {
    console.log(locations)
    const newLocation = { x: e.clientX, y: e.clientY }
    setLocations([...locations, newLocation])
    const c = canvasRef
    c.beginPath()
    c.arc(300,300,30,0,Math.PI*2, false)
    c.strokeStyle = 'blue'
    c.stroke()
  }
  function handleClear() {
    setLocations([])
  }
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
      <x.Canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={e => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        draw(ctx, { x: e.clientX, y: e.clientY })
        console.log(e.clientY, e.clientX)
        utils.log()
      }}
    />

    </Section>
  )
}

export  default Menagerie
