//set up the canvas
function setup() {
 createCanvas(500, 500);
  noStroke();
  fill(255, 255, 255);
  noLoop();
}
 
function draw() {
//color the background
background(255,150,200);

//pick lowest of three “rolls” to strongly bias towards smaller petals
const petalLength = min(random(20,100),random(20,100),random(20,100))
 
  //draw four daisies
  for (let x=0;x<4;x++){
  translate(x+100,100)
  noStroke();
  
//draw the daisy petals
  fill(random(0,256),random(0,256),random(0,256))
  for (let i = 0; i < 8; i ++) {
    ellipse(0, 0, 20, petalLength);
    rotate(PI/4);
    }

//draw the daisy pistils
  fill(200,30,200);
  ellipse(0,0,20,20);
  }
}

//references
//https://p5js.org/examples/hello-p5-simple-shapes.html
//Justin Bakse' grass code