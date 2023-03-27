const socket = io();

const controllerState = {};

socket.on('inputFromController', msg => { 
  const breakdown = msg.split('-');

  if(breakdown[1] === 'on') {
    controllerState[breakdown[0]] = true;
  }
  else if(breakdown[1] === 'off') {
    controllerState[breakdown[0]] = false;
  }
});

const rectPos = {x: 200, y: 200};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(controllerState.up) { rectPos.y--; }
  if(controllerState.down) { rectPos.y++; }
  if(controllerState.left) { rectPos.x--; }
  if(controllerState.right) {rectPos.x ++};
  
  rect(rectPos.x, rectPos.y, 50, 50);
}