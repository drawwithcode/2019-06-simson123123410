
var sliderSz;
var sliderSp;
var sliderR;
var sliderG;
var sliderB;

function setup(){
  // noCanvas();
  createCanvas(windowWidth,windowHeight);
  background('red');


// size createConvolver(
createP('Size');
  sliderSz = createSlider(10, 300, 50, 10);


// shape controll
createP('shape');
sliderSp=createSlider(0, 1, 0.7, 0);

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

}



// access to draw mode of instance
function draw(){
   // fill background, draw ellipse
   rectMode(CENTER);
   fill(100,100,124);
   // ellipse(width/2,height/2,100);
   // rect(mouseX,mouseY,30,100,37.5);
      rect(mouseX,mouseY,sliderSz,sliderSz,sliderSp*sliderSz/2);
}
