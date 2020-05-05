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

const Object = (x,y,r, color) => {
  this.x = x
  this.y = y
  this.r = r
  this.color = color

  this.update = () => {
    this.draw()
  }

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
  c1 = new Object(300,300,100, 'blue')
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width, canvas.height)
  c.fillText("testing", mouse.x, mouse.y)
}

init()
animate()