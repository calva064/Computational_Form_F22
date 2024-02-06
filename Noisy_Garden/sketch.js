// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

//create empty points array
const points = [];

//add points to the array
function setup() {
  createCanvas(500, 500);
  noLoop();

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      points.push({
        x: x * 50 + 25,
        y: y * 50 + 25,
      });
    }
  }
}

function draw() {
  background(0,100,0);
  fill(200);
  noStroke();
  
//use x and y values from each point in the array to create x_1 and y_1 values
//place points using noise
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    let x_1=noise(p.x)*500
    let y_1=noise(p.y)*500
    
   
    //use HSB color mode
    //fill flower petals using noise
    if (x_1>200 & y_1>200){
      colorMode(HSB);

//draw flowers
  for (let x=0;x<4;x++){
  noStroke();
  //draw the flower stems
  fill(120,100,100)
  rect(x_1+2, y_1-10,2,10)
  //draw the petals
  fill((x_1+y_1)/2,100,100)
  ellipse(x_1+3, y_1-13,5,5)
  ellipse(x_1+4, y_1-11,5,5)
  ellipse(x_1+2, y_1-11,5,5)
  } 
      
  
    }

  }
}