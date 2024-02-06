//Establish variables and create an array to hold possible values
var pic;
var flower;
var place = 0;//holds current position in the array
let AccessoryArray = [0,1,2];
let a2= [];

//load images
function preload(){
  AccessoryArray[0] = loadImage("2.png");
  AccessoryArray[1] = loadImage("3.png");
  AccessoryArray[2] = loadImage("4.png");
  pic = loadImage("1.png")
}

//assign value from accessory array to a2 array
function setup() {
  createCanvas(450, 600);
  AccessoryArray = shuffle(AccessoryArray);
  for (let i = 0; i < 3; i++) {
    a2[i] = valueFromDeck();
  }
}

//get images and resize 
function draw() {
  image(pic,0,0)
  pic.resize(450, 600);
  for(i=0; i<a2.length; i++){
  image(a2[i],50+150*i,50+30*i);
  a2[i].resize(100,75)
  }
}

//return the value in the accessory array and re-shuffle the array
function valueFromDeck() {
  var v = AccessoryArray[place];
  place++;
  if (place == AccessoryArray.length) {
    AccessoryArray = shuffle(AccessoryArray);
    place = 0;
  }
  return v;
}

