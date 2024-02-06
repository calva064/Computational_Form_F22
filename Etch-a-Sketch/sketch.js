//References: https://jbakse.github.io/livecode_19_sketchbook/sketchbook/sketchbook.html?sketch=/cf_challenges/03_noise/group_challenge_circle.js&

//establish variables
let x1=0;
let x2=0;
let y1=0;
let y2=0;
let canvasWidth=500;
let canvasHeight=350;
let t=0;

//set up canvas
window.setup = function () {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);
};

window.draw = function () {
  background(200);
  stroke(211);
  strokeWeight(4);
  circle_1();
  vertical_lines();
  horizontal_lines();

};

//draw circle
function circle_1() {
  background(209,200,189);
  stroke(40);
  strokeWeight(1);
  const steps = 20;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 60;
  const finalStep=map(millis(),0,10,0,steps,true);
  
  for (let step = 1; step <= finalStep; step++) {
    const a1 = map(step - 1, 0, steps, 0, 2 * PI);
    const a2 = map(step, 0, steps, 0, 2 * PI);
    const x1 = centerX + sin(a1) * radius*noise(t*frameCount);
    const x2 = centerX + sin(a2) * radius*noise(t+1);
    const y1 = centerY + cos(a1) * radius*noise(t);
    const y2 = centerY + cos(a2) * radius*noise(t+1);
    line(x1, y1, x2, y2);
  }
}

//draw vertical lines
function vertical_lines(){
    for (s=0;s<30;s++){
  stroke(0);
  strokeWeight(random(0.1))
  noLoop();
  line(x1,random(0,canvasHeight),x2,random(0,canvasHeight));
  x1+=20;
  x2+=20;
  } 
 
}

//draw horizontal lines
function horizontal_lines(){
      for (s=0;s<30;s++){
  stroke(0);
  strokeWeight(random(0.1))
  noLoop();
  line(random(0,canvasHeight),y1,random(0,canvasHeight),y2);
  y1+=20;
  y2+=20;
  } 
   
}