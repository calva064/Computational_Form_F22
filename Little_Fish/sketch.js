//establish variables
let img;
let canvasWidth=400;
let canvasHeight=400;

//load in fish image
function preload() {
  img = loadImage("Fish.png");
}

//create parameters
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  img.resize(img.width / 5, 0);
    //pick a color
  color_picker_text=createP("Pick a color for your fish");
  color_picker_text.position(0,400)
  color_picker = createInput("#ff0000", "color");
  color_picker.position(0, 440);
  //pick a direction
  direction_picker_text=createP("Pick a direction to swim in");
  direction_picker_text.position(0,460)
  direction_picker = createSlider(1,4,0)
  direction_picker.position(0, 500);
}

//draw fish
function draw() {
  background(173, 216, 230);
  noStroke();
  
  //move right
  if (direction_picker.value()==1){
  translate(((noise(frameCount*0.001)*200)),0);
    tint(color_picker.value());
    image(img, 0, 150);
  }
  
  //move left
  else if (direction_picker.value()==2){
    push();
    scale(-1, 1);
    tint(color_picker.value());
    translate(((noise(frameCount*0.001)*200)),0);
    image(img, -width, 150);
    pop();
  }
  
  //move up
  else if (direction_picker.value()==3){
    translate(0,((noise(frameCount*0.001)*-300)));
      tint(color_picker.value());
  tint(color_picker.value());
  image(img, 0, 150);
  }
  
  //move down
  else if (direction_picker.value()==4){
    translate(0,((noise(frameCount*0.001)*300)));
      tint(color_picker.value());
  image(img, 0, 150);
  }

}