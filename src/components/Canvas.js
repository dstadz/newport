import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

const Canvas = (props = {}) => {
  const {
    width = 900,
    height = 600,
    pixelRatio = window.devicePixelRatio,
    x,
    setX
  } = props;

  // const {x, setX} = props
  const canvas = useRef();


  useEffect(() => {
    
    let ref = canvas.current;
    let ctx = ref.getContext('2d');
    ctx.clearRect(0,0,width, height)
    ctx.font = "15pt Roboto";
    ctx.strokeStyle = "red";
    console.log('useeffect x:',x,ctx)
    
    ctx.beginPath();
    ctx.arc(250, 500, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fill();


    
    let pig = new props.Animal(350,x,ctx, '🐺')
    pig.create()
    //setX(x+1)
  },[x]);
  
  let ref = canvas.current;

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const border = '2px solid black'
  const font = '100px Arial'
  const style = { width, height, border, font };
  return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default Canvas
