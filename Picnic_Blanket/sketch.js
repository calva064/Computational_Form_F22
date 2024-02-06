//picnic blanket


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  img = createImage(10, 10);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      if (x%2==0){   
      let c = color(206, 81, 86)
      img.set(x, y, c)
      }
      
      if(x%2!=0){
      let c = color(237, 223, 228)
      img.set(x, y, c)
      }
      
      if (y%2==0){
      let c = color(177, 7, 27);
      img.set(x, y, c);
      }


    

    }
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}
