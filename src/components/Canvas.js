import React, { useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

const Canvas = (props = {}) => {
  const {
    width = 900,
    height = 600,
    pixelRatio = window.devicePixelRatio
  } = props;

  const canvas = useRef(null);

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

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const style = { width, height };
  return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default Canvas
