//references: https://www.youtube.com/watch?v=YcdldZ1E9gU&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=6

//establish variables
let s=0
let y=0
let z=0

//set up function
function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}

//
function draw() {
  background(255, 221, 244);
  fill(180, 230, 252);
  noStroke();
  //eye generated with randomness
  let y=random(0,401);
  ellipse(200,y,20,20);
  
  //eye generated with noise
  let x = map(noise(s),0,1,0,400);
  ellipse(x,200,20,20);
  s+=0.01;
  
  //draw curve
  stroke(0);
  noFill();
  translate(150,200)
  curve(5, 26, noise(s)*200, 24, noise(s)*200, 61, 15, 65);
}