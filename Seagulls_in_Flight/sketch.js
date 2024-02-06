
//background code
let inc = 0.01;

function setup() {
  createCanvas(450, 600);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff*(frameCount)*0.005, yoff*(frameCount)*0.001) * 255
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r*50;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}



//whole code for layered image
//Establish variables and create an array to hold possible values
var pic;
var bird;
var place = 0;//holds current position in the array
let birdArray = [0,1,2];
let a2= [];

//load images
function preload(){
  birdArray[0] = loadImage("bird.png");
  birdArray[1] = loadImage("bird.png");
  birdArray[2] = loadImage("bird.png");
  pic = loadImage("sky.png")
}

//assign value from accessory array to a2 array
function setup() {
  createCanvas(450, 600);
  birdArray = shuffle(birdArray);
  for (let i = 0; i < 3; i++) {
    a2[i] = valueFromDeck();
  }
}

//get images and resize 
function draw() {
  image(pic,0,0)
  pic.resize(450, 600);
  for(i=0; i<a2.length; i++){
  image(a2[i],20+150*i,50+30*i);
  a2[i].resize(130,75)
  }
}

//return the value in the accessory array and re-shuffle the array
function valueFromDeck() {
  var v = birdArray[place];
  place++;
  if (place == birdArray.length) {
    birdArray = shuffle(birdArray);
    place = 0;
  }
  return v;
}