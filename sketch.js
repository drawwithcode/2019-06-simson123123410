var gui;
var size = 50,sizeMin=10,sizeMax=100,sizeStep=5;
var shape = 0.5,shapeMin=0,shapeMax=1,shapeStep=0.01;
// var colour = color(100,180,200);
var fillColor = [180, 255, 255];

function setup(){
  // noCanvas();
  createCanvas(windowWidth,windowHeight);
  background('blue');

  gui = createGui('Modify the brush!!');
  gui.addGlobals('size','shape','fillColor');


// gui.addGlobals('size','shape','color');

// size createConvolver(
/*createP('Size');
  sliderSz = createSlider(10, 300, 50, 50);


// shape controll
createP('shape');
sliderSp=createSlider(0, 1, 0.5, 0);

// color controll
createP('Color');
  sliderR = createSlider(0, 255, 125);
  // sliderR.position(50, windowHeight / 2 + 75);
createP();
  sliderG = createSlider(0, 255, 125);
  // sliderG.position(50, windowHeight / 2 + 125);
createP();
  sliderB = createSlider(0, 255, 125);
  // sliderB.position(50, windowHeight / 2 + 175);
*/
}



// access to draw mode of instance
function draw(){
   // fill background, draw ellipse
   rectMode(CENTER);
   fill(fillColor);
   // fill(255);
   // ellipse(mouseX,mouseY,size);
   rect(mouseX,mouseY,size,size,shape*size/2);
      // rect(mouseX,mouseY,sliderSz,sliderSz,sliderSp*sliderSz/2);
}
