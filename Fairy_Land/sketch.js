//references: https://www.youtube.com/watch?v=VtpF-m3KyEk
//map code
//Set colors
let map = null;
let noiseScale = 1/180;
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#ffcef2";
let land = "#800080";
let stone = "#676767";
let snow = "#fffafa";


//Set up the canvas
function setup()
{
  createCanvas(500, 500);
  noStroke();
  noiseDetail(5, 0.5);
  makeMap();
  drawMap();
}

//Create a two layer array that assigns a color to each pixel
function makeMap()
{
  map = [];
  for(let i = 0; i < width; i++)
  {
    map[i] = [];
    for(let j = 0; j < height; j++)
    {
      map[i][j] = pickColor(i, j);
    }
  }
}

//pick color based on map location 
function pickColor(i, j)
{
  //declare a height value using noise function
  let h = noise((i)*noiseScale,
               (j)*noiseScale);
  
  if(h < 0.2)
  {
    c = ocean;
  } 
  else if(h < 0.3)
  {
    c = shore;
    
  }
  else if(h < 0.4)
  {
      c = sand;

  }
  else if(h < 0.5)
  {
      c = land;

  }
  else if(h < 0.6)
  {
      c = stone;
  }
  else if (h < 0.7)
  {
      c = snow;
  }
  else
  {
    c = snow;
  }
  
  return color(c);
}

function drawMap()
{
  for(let i = 0; i < width; i++)
  {
    for(let j = 0; j < height; j++)
    {
      set(i, j, map[i][j])//set(pixel x value, pixel y value, color value)
    }
  }
  updatePixels();
}


//code for entire image
//Establish variables and create an array to hold possible values
var pic;
var place = 0;//holds current position in the array
let fairyArray = [0];
let a2= [];

//load images
function preload(){
  fairyArray[0] = loadImage("fairy.png");
  pic = loadImage("map.png")
}

//assign value from accessory array to a2 array
function setup() {
  createCanvas(450, 600);
  fairyArray = shuffle(fairyArray);
  for (let i = 0; i < 1; i++) {
    a2[i] = valueFromDeck();
  }
}

//get images and resize 
function draw() {
  image(pic,0,0)
  pic.resize(450, 600);
  let xpos = 0
  let ypos = 0
  for(i=0; i<a2.length; i++){ 
    xpos = noise((frameCount+100)*0.002)*200;
    ypos = noise((frameCount+100)*0.002)*600;       image(a2[i],xpos,ypos);
  a2[i].resize(190,215);
       
  }
  //mark the treasure
  noStroke()
  fill(200,0,255)
  push();
  translate(400,108)
  rotate(PI/4)
  rect(0,0,30,2)
  pop();
  translate(400,130)
  rotate(-PI/4)
  rect(0,0,30,2)
}

//return the value in the accessory array and re-shuffle the array
function valueFromDeck() {
  var v = fairyArray[place];
  place++;
  if (place == fairyArray.length) {
    fairyArray = shuffle(fairyArray);
    place = 0;
  }
  return v;
}