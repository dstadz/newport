import React , { useState, useEffect, useRef } from 'react'

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
    </Section>
  )
}
export  default Menagerie