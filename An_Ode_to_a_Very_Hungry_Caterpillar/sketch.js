//inspiration: https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907

let xspacing = 8; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 50.0; // Height of wave
let period = 200.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(400, 400);
  w = 100;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  createP("Make the caterpillar move");
  speed_slider = createSlider(0, 0.1,0,0.01);
  createP("Move the caterpillar on the screen")
  move_slider = createSlider(0, 250,0,10);
}

function draw() {
  background(255);
  calcWave();
  translate(move_slider.value(),-20)
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += speed_slider.value();

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  
  for (let x = 0; x < (yvalues.length); x+=2) {

      //draw feet
    fill(139,69,19);
    rect(x * xspacing-1, height / 2 + yvalues[x]+22,3,8);
    ellipse(x * xspacing+4, height / 2 + yvalues[x]+30, 10, 5);
  }
  
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
   

    //draw body
    //fill body using noise
    fill(50,noise(x)*205,50);
    ellipse(x * xspacing, height / 2 + yvalues[x], 10, 50);

    
    //draw head
    push();
    fill(150,0,0)
    ellipse(12*xspacing+5,height/2+yvalues[11],20,50)
    pop();
    
    //draw eyes
    push();
    fill(255,255,0)
    noStroke();
    ellipse(12*xspacing+2,height/2+yvalues[11]-5,6,20)
    ellipse(12*xspacing+8,height/2+yvalues[11]-5,6,20)
    fill(50,noise(x)*205,50);
    ellipse(12*xspacing+2,height/2+yvalues[11]-5,4,12)
    ellipse(12*xspacing+8,height/2+yvalues[11]-5,4,12)
    pop();
    
    //draw nose
    fill(0,100,0)
    noStroke(); triangle(12*xspacing+2,height/2+yvalues[11]+12,12*xspacing+8,height/2+yvalues[11]+12,12*xspacing+5,height/2+yvalues[11]+6)
    ellipse(12*xspacing+5,height/2+yvalues[11]+12,6,6)
    
    //draw ears
    push();
    fill(139,69,19)
  triangle(12*xspacing+5,height/2+yvalues[11]-40,12*xspacing-5,height/2+yvalues[11]-40,12*xspacing,height/2+yvalues[11]-20)
    triangle(12*xspacing+17,height/2+yvalues[11]-40,12*xspacing+7,height/2+yvalues[11]-40,12*xspacing+11,height/2+yvalues[11]-20)
  ellipse(12*xspacing,height/2+yvalues[11]-40,10,10);
  ellipse(12*xspacing+12,height/2+yvalues[11]-40,10,10);
    pop();
    


    
    
  }
}