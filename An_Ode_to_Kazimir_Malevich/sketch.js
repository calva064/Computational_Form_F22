//inspiration: Kazimir Malevich

//set up the canvas
function setup() {
  createCanvas(400, 600);
  noLoop();
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(236,235,224);

  //draw squares
   for (let i=0;i<2;i++){
  fill(145,random(150,180),150)
  square(i*100,i*100+375,100*i+80)
  }
  
  //draw rectangles
  for (let i=0;i<4;i++){
  fill(215,random(190,200),random(180,200))
  rect(i*5+200,i*25+100,i*25+50,10*i+15)
  rotate(PI/i+4);
  }
  
  //draw cross
  fill(59,87,54)
  translate(-190,-30)
  rect(200,400,120,5)
  rect(210,370,5,60)

  //draw circles
  fill(80)
  translate(90,30)
  ellipse(40, 120, 140, 140)
  ellipse(-200,500,150,150)
}