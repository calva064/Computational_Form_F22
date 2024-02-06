const pane = new Tweakpane.Pane();

//establish variables
let canvasWidth=400
let canvasHeight=400
let half_width=canvasWidth/2
let half_height=canvasHeight/2

//establish parameters
const PARAMS = {
  background: "#D4F1F4",
  sealColor: "#FFFFFF",
  eyeColor: "#654321",
};


//set up parameters
function setup() {
  
  createCanvas(canvasWidth, canvasHeight);
   // add parameters
  pane.addInput(PARAMS, "background", {
    view: "color",
  });
  pane.addInput(PARAMS, "sealColor", {
    view: "color",
  });

  pane.addInput(PARAMS, "eyeColor", {
    view: "color",
  });

// redraw
  pane.on("change", function (ev) {
    redraw();
  });
}


//draw background and seal
function draw() {
  background(PARAMS.background);  
  seal(PARAMS.sealColor,PARAMS.eyeColor);
}

//seal
function seal(sealColor,eyeColor) {
  scale(0.5);
  translate(half_width,half_height)
  fill(sealColor)
  //seal
  push();
  noStroke();
ellipse(half_width,half_height,canvasWidth,canvasHeight)
  pop();

  //eyes
  fill(eyeColor)
  ellipse(155,180,30,30)
  ellipse(245,180,30,30)
   push();
  noStroke();

  pop();
  fill(255)
  ellipse(half_width-45,170,10,10)
  ellipse(half_width+45,170,10,10)
  
  //whiskers
  strokeWeight(2)
  
  //right whiskers
  line(half_width+20,half_height+20,half_width+70,half_height)
  line(half_width+20,half_height+20,half_width+70,half_height+20)
  line(half_width+20,half_height+20,half_width+70,half_height+40)
  
  //left whiskers
  line(half_width-20,half_height+20,half_width-70,half_height)
  line(half_width-20,half_height+20,half_width-70,half_height+20)
  line(half_width-20,half_height+20,half_width-70,half_height+40)
  
  //nose
  fill(0)
  ellipse(half_width,half_height+20,canvasWidth/8,30)

  //mouth
  noFill();
  push();
  strokeWeight(2)
  line(half_width,half_height+20,half_width,half_height+30)
  arc(225, 250, 50, 50, 2*PI,PI,OPEN)
  arc(175, 250, 50, 50,2*PI,PI,OPEN)
  fill(230,0,0)
  pop();
  
  //paws
  arc(120, 280, 40, 40, 2*PI,PI,OPEN)
  arc(280, 340, 40, 40,2*PI,PI,OPEN)
  arc(280, 280, 40, 40, 2*PI,PI,OPEN)
  arc(120, 340, 40, 40,2*PI,PI,OPEN)
  
}