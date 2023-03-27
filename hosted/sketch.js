const socket = io();

const rectPos = {x: 200, y: 200};


socket.on('inputFromController', msg => {
  switch(msg) {
    case 'down':
      rectPos.y += 5;
      break;
    case 'up':
      rectPos.y -= 5;
      break;
    default: break;
  }
});

function setup() {
  socketFunctions();  
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(rectPos.x, rectPos.y, 50, 50);
}

const socketFunctions = () => {

}