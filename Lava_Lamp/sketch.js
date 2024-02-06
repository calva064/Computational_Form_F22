//Inspiration and references
//https://p5js.org/reference/#/p5/directionalLight
//https://p5js.org/reference/#/p5/ambientLight
//https://p5js.org/examples/3d-multiple-lights.html
//https://www.youtube.com/watch?v=xB5FUYNXt9c


//Establish variables
let canvasWidth=600;
let canvasHeight=600;
let n;

//Set up the canvas in WEBGL mode
function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  noStroke();
}

//draw spheres
function draw() {
  background(150,7,100);

  //dark pink ambient light and directional light
  ambientLight(196,7,90);
  directionalLight(99, 66, 23, 0, -1, 0);

  translate(-canvasWidth/3+20,canvasHeight/3)
  for (let i=0;i<6;i++){
    push();
    translate(120, 0, 0);
    let y = map(noise((i+1)*frameCount*0.0003),0,1,0,600);
    translate(0,-y,0)
    sphere(150/(i+2));
    pop();
  }
}