//references: https://compform.net/parameters/
//Define variables
let img;
let color_picker;

//Load image
function preload(){
img=loadImage('faces.png');

}

//set up canvas
function setup() {
  createCanvas(480,520);
  fill(100);
  noStroke();
  //pick a color
  color_picker_text=createP("Pick a color");
  color_picker_text.position(0,90)
  color_picker = createInput("#648EDE", "color");
  color_picker.position(0, 125);
  //pick a mouth
  mouth_picker_text=createP("Select a mouth");
  mouth_picker_text.position(0,145);
  mouth_slider=createSlider(0,4,0);
  mouth_slider.position(0,180);
  //pick eyes
  eye_picker_text=createP("Select eyes");
  eye_picker_text.position(0,190);
  eye_slider=createSlider(0,1,0);
  eye_slider.position(0,225);
  //pick a nose
  nose_picker_text=createP("Select a nose");
  nose_picker_text.position(0,235);
  nose_slider=createSlider(0,1,0);
  nose_slider.position(0,270);
  
}

//draw face
function draw() {
  let eyesArray=[];
  let noseArray=[];
  let MouthArray=[];

  let nose1=img.get(0,10,img.width,img.height/20)
  let nose2=img.get(0,50,img.width,img.height/20)
  let mouth1=img.get(0,85,img.width,img.height/20)
  let mouth2=img.get(0,110,img.width,img.height/15)
  let mouth3=img.get(0,160,img.width,img.height/20)
  let mouth4=img.get(0,195,img.width,img.height/20)
  let mouth5=img.get(0,355,img.width,img.height/15)
  let eyes1=img.get(0,395,img.width,img.height/10)
  let eyes2=img.get(0,520,img.width,img.height/10)
  
  //mouth array
  MouthArray[0] = mouth1
  MouthArray[1] = mouth2
  MouthArray[2] = mouth3
  MouthArray[3] = mouth4
  MouthArray[4] = mouth5
  //nose array
  noseArray[0]=nose1
  noseArray[1]=nose2
  //eyes array
  eyesArray[0]=eyes1
  eyesArray[1]=eyes2
  
  background(250);
  fill(color_picker.value());
  tint(color_picker.value())
  
  let mouth_selection=mouth_slider.value();
  let eye_selection= eye_slider.value();
  let nose_selection=nose_slider.value();
  img.resize(500,560)

  image(eyesArray[eye_selection],0,2)
  image(noseArray[nose_selection],-5,40)
  image(MouthArray[mouth_selection],0,60)
}