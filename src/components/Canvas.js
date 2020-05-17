import React, { useRef, useEffect } from "react";
//import utils from '../utils/CanvasUtils'
const Canvas = (props = {}) => {
  const {
    width = 900,
    height = 600,
    pixelRatio = window.devicePixelRatio,
    loc,
    /*setLoc,
    animals,
    setAnimals*/
  } = props;

  // const {x, setX} = props
  const canvas = useRef();


  useEffect(() => {
    let ref = canvas.current;
    let ctx = ref.getContext('2d');
    ctx.clearRect(0,0,width, height)

    ctx.font = "32px Roboto";
    ctx.textAlign = 'center';


    console.log('useeffect x:',loc.x,ctx)




    let wolf = new props.Animal(loc.x,loc.y,ctx, '🐺')

    wolf.create()
    //setLoc({x:wolf.x+wolf.dx,y:wolf.y+wolf.dy})
  },[]);
  
  //let ref = canvas.current;

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const border = '2px solid black'
  const font = '100px Arial'
  const style = { width, height, border, font };
  return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default Canvas
