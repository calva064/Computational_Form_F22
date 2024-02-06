//Establish variables and create an array to hold possible values
var place = 0;//holds current position in the array
let PicnicArray = [0,1,2];
let a2= [];

//load images
function preload(){
  PicnicArray[0] = loadImage("red.png");
  PicnicArray[1] = loadImage("light red.png");
  PicnicArray[2] = loadImage("white.png");
}

//assign value from picnic array to a2 array
function setup() {
  createCanvas(450, 450);
  for (let i = 0; i < 3; i++) {
    a2[i] = valueFromDeck();
  }
}

//get images and resize 
function draw() {
  
  for(j=0;j<10;j++){
    if(j%2==0){
  for (i=0;i<5;i++){
      image(a2[0],i*90,j*45);
      image(a2[1],45+i*90,j*45);
      PicnicArray[0].resize(45,45)
      PicnicArray[1].resize(45,45)
  }
  for(i=0;i<6;i++){
      image(a2[1],i*90, 45+j*45);
      PicnicArray[1].resize(45,45)
      
    }
  }
    else{
      for(i=0;i<6;i++){
image(a2[2],i*90+45,45+(j-1)*45);
 PicnicArray[2].resize(45,45)
    }
    }
    
  
    
    
    


  }
  
    
  
}

//return the value in the PicnicArray
function valueFromDeck() {
  var v = PicnicArray[place];
  place++;
  return v;
}
