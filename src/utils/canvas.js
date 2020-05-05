const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let mouse = {
  x: innerWidth / 2,
  y = innerHeight / 2
}
addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY
})

addEventListener('resize', function(){
  canvas.width = this.innerWidth;
  canvas.height = this.innerHeight;

  init()
})