//establish variables
let teaImage;

//load image 
function preload() {
  teaImage = loadImage("tea.png");
  noLoop();
}

//set up canvas
function setup() {
  // create a place to draw
  createCanvas(500,331);
  // load up the pixel[] array so we can read colors out of it later
  teaImage.loadPixels();
}

function draw() {

  // loop over every x,y pixel coordinate in the image
  //top left quadrant
  for (let x = 0; x < 250; x++) {
    for (let y = 0; y < 220; y++) {
      const pixelRed = getQuick(teaImage, x, y)[0];//gets the r value at every pixel in the  image
  strokeWeight(0.1)
  stroke(getQuick(teaImage, x, y)[0],getQuick(teaImage, x, y)[1],noise(x,y)*256,100);//determines color of strokes

      // pick a random value and compare it pixelRed
      // for example:
      // if pixelRed is 0, we'll never draw
      // if pixelRed is 255, we'll always draw
      // if pixelRed is 127, we'll draw 50% of the time
      if (random(255) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }
  
  //top right quadrant
   for (let x = 250; x < 501; x++) {
    for (let y = 0; y < 220; y++) {
      const pixelRed = getQuick(teaImage, x, y)[0];//gets the r value at every pixel in the  image
  strokeWeight(0.5)
  stroke(getQuick(teaImage, x, y)[1],getQuick(teaImage, x, y)[2],noise(x,y)*256,50);//determines color of strokes

      // pick a random value and compare it pixelRed
      // for example:
      // if pixelRed is 0, we'll never draw
      // if pixelRed is 255, we'll always draw
      // if pixelRed is 127, we'll draw 50% of the time
      if (random(255) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }
  
   //bottom left quadrant
   for (let x = 0; x < 250; x++) {
    for (let y = 220; y < 332; y++) {
      const pixelRed = getQuick(teaImage, x, y)[0];//gets the r value at every pixel in the  image
  strokeWeight(0.3)
  stroke(getQuick(teaImage, x, y)[2],getQuick(teaImage, x, y)[0],noise(x,y)*256,50);//determines color of strokes

      // pick a random value and compare it pixelRed
      // for example:
      // if pixelRed is 0, we'll never draw
      // if pixelRed is 255, we'll always draw
      // if pixelRed is 127, we'll draw 50% of the time
      if (random(255) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }
  
     //bottom right quadrant
   for (let x = 250; x < 501; x++) {
    for (let y = 220; y < 332; y++) {
      const pixelRed = getQuick(teaImage, x, y)[0];//gets the r value at every pixel in the  image
  strokeWeight(0.7)
  stroke(noise(x,y)*256,getQuick(teaImage, x, y)[1],getQuick(teaImage, x, y)[0],50);//determines color of strokes

      // pick a random value and compare it pixelRed
      // for example:
      // if pixelRed is 0, we'll never draw
      // if pixelRed is 255, we'll always draw
      // if pixelRed is 127, we'll draw 50% of the time
      if (random(255) < pixelRed) {
        drawGrassBlade(x, y);
      }
    }
  }
  
  
  
  
  
}

//draw blades of grass, bias towards taller blades
function drawGrassBlade(x, y) {
  const bladeHeight = max(
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60),
    random(1, 60)
  );

  let bladeLean = random(-0.3, 0.3);
  bladeLean *= bladeHeight;
  line(x, y, x + bladeLean, y - bladeHeight);

}

// find the RGBA values of the pixel at x, y in the img.pixels array
function getQuick(img, x, y) {
  const i = (y * img.width + x) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3],
  ];
}