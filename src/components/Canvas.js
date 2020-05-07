import React, { useRef, useEffect, useLayoutEffect } from "react";

const Canvas = (props = {}) => {
  const {
    width = 900,
    height = 600,
    pixelRatio = window.devicePixelRatio
  } = props;

  console.log(props)
  const canvas = useRef();

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(pixelRatio, pixelRatio);
    context.fillStyle = "hsl(0, 0%, 95%)";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "black";
    context.beginPath();
    context.arc(width / 2, height / 2, 40, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  });

  useEffect(() => {
    let ref = canvas.current;
    let context = ref.getContext('2d');
    context.beginPath();
    context.arc(50, 50, 50, 0, 2 * Math.PI);
    context.fill();

    let pig = new props.Animal(0,200,context, 'pig')
    pig.create()
  });

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const border = '2px solid black'
  const style = { width, height, border };
  return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default Canvas
