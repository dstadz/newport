import React , { useState, useEffect, useRef } from 'react'
import Sketch from "react-p5";

import * as x from '../styles/canvasStyles'
import { Section } from '../styles'
import utils from '../utils/CanvasUtils'


const HOOK_PATH = new Path2D(x.HOOK_SVG)
const SCALE = 0.3
const OFFSET = 80


let flock;



function Particle(x, y, radius, rgb, canvas) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: (Math.random() - 0.5) * 3,
    y: (Math.random() - 0.5) * 3
  };
  this.radius = radius;
  this.mass = 1;
  this.opacity = 0;
  this.r = rgb.r;
  this.g = rgb.g;
  this.b = rgb.b;

  this.update = particles => {
    this.draw();

    for (let i = 0; i < particles.length; i++) {
      const otherParticle = particles[i];
      if (this.x === otherParticle.x) continue;

      if (utils.distance(this.x, this.y, otherParticle.x, otherParticle.y) - this.radius * 2 < 0) {

        const res = {
          x: this.velocity.x - otherParticle.velocity.x,
          y: this.velocity.y - otherParticle.velocity.y
        };

        if (res.x * (otherParticle.x - this.x) + res.y * (otherParticle.y - this.y) >= 0) {

          const m1 = this.mass;
          const m2 = otherParticle.mass;
          const theta = -Math.atan2(otherParticle.y - this.y, otherParticle.x - this.x);

          const rotatedVelocity1 = utils.rotateVelocities(this.velocity, theta);
          const rotatedVelocity2 = utils.rotateVelocities(otherParticle.velocity, theta);

          const swapVelocity1 = { x: rotatedVelocity1.x * (m1 - m2) / (m1 + m2) + rotatedVelocity2.x * 2 * m2 / (m1 + m2), y: rotatedVelocity1.y };
          const swapVelocity2 = { x: rotatedVelocity2.x * (m1 - m2) / (m1 + m2) + rotatedVelocity1.x * 2 * m2 / (m1 + m2), y: rotatedVelocity2.y };

          const u1 = utils.rotateVelocities(swapVelocity1, -theta);
          const u2 = utils.rotateVelocities(swapVelocity2, -theta);

          this.velocity.x = u1.x;
          this.velocity.y = u1.y;
          otherParticle.velocity.x = u2.x;
          otherParticle.velocity.y = u2.y;
        }
      }
    }


    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.velocity.x = -this.velocity.x;

    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.velocity.y = -this.velocity.y;

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };

  this.draw = (c) => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b}, 1)`;
    c.stroke();
    c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity}`;
    c.fill();
    c.closePath();
  };
}





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

class App extends React.Component {
  render() {
    return <div>
      <Animation></Animation>
    </div>;
  }
}

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }
  
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  
  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  
  render() {
    return <Canvas angle={this.state.angle} />
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  
  componentDidUpdate() {
    const {angle} = this.props;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width/2, height/2 );
    ctx.rotate(angle * Math.PI / 180);
    ctx.fillStyle = '#4397AC';
    ctx.fillRect(-width/4, -height/4, width/2, height/2);
    ctx.restore();
  }
  
  render() {
    return <canvas width="300" height="300" ref={this.canvasRef}></canvas>;
  }
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
        console.log()
        
        
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        draw(ctx, { x: e.clientX, y: e.clientY })
        console.log(e.clientY, e.clientX)
        //utils.makePig(ctx, e.clientX, e.clientY )
      }}
    />

    </Section>
  )
}

export  default Menagerie
