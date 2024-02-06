//establish variables
let partnerImage;

//load image from partner
function preload() {
  partnerImage = loadImage("partner.png");
  //noLoop();
}

//set up canvas
function setup() {
  // create a place to draw
  createCanvas(400,400);
  // load up the pixel[] array so we can read colors out of it later
  partnerImage.loadPixels();
}

function draw() {

  // loop over every x,y pixel coordinate in the image
  for (let x = 0; x < 400; x++) {
    for (let y = 0; y < 400; y++) {
      const pixelRed = getQuick(partnerImage, x, y)[0];//gets the r value at every pixel in the partner image
    
  strokeWeight(0.1)//changed
  stroke(getQuick(partnerImage, x, y)[0],getQuick(partnerImage, x, y)[1],noise(x,y)*256,100);

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

  noLoop();
}

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
