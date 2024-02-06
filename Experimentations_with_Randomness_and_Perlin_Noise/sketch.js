//references:https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=6

//establish variables
let y1=0
let x1=0

//set up function
function setup() {
  createCanvas(400, 400);
  noLoop();
}

//
function draw() {
  background(noise(x1)*250,noise(x1)*150,noise(x1)*250);
  noFill();
  beginShape();
  for (var x=0;x<width;x++){
    stroke(random(255),random(255),random(255));
    let y=map(noise(x1),0,1,0,400);
    vertex(x,y);
    vertex(x-100,y-100);
    vertex(x+100,y)
    x1+=0.01
    
  }
  endShape();

}