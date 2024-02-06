// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
//inspiration: https://en.wikipedia.org/wiki/This_Is_All_Yours

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  img = createImage(10, 10);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      //row 0
      if (y==0){
        if (x==1||x==2||x==3||x==4||x==6||x==7||x==8){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else {
        let c = color(255); 
        img.set(x, y, c);
        }
      }
      //row 1
      else if (y==1){
        if (x==0||x==1||x==2||x==7||x==8){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else {
          let c = color(255); 
        img.set(x, y, c);
        }
      }
      //row 2
      else if (y==2){
        if (x==0||x==1||x==8||x==9){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==3||x==5||x==6){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else{
          let c = color(255); 
        img.set(x, y, c);
        }
      }
      //row 3
      else if (y==3){
        if (x==0||x==1){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==3||x==4||x==5||x==6||x==7||x==8){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else{
          let c = color(255); 
        img.set(x, y, c);
        }
      }
      //row 4
      else if (y==4){
        if (x==0){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==2||x==3||x==4||x==5||x==6){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else if (x==7||x==8){
          let c = color(255,0,0); 
        img.set(x, y, c);
        }
         else if (x==9){
          let c = color(239, 238, 244); 
        img.set(x, y, c);
        } 
        
      else {
          let c = color(255); 
        img.set(x, y, c);
        }
      }   
        //row 5
        else if (y==5){
        if (x==0){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==2||x==3){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else if (x==5){
          let c = color(219, 223, 66); 
        img.set(x, y, c);
        }
         else if (x==6){
          let c = color(98, 191, 56); 
        img.set(x, y, c);
        } 
          else if (x==7||x==8||x==9){
          let c = color(255,0,0); 
        img.set(x, y, c);
        } 
          else {
          let c = color(255); 
        img.set(x, y, c);
        }
      }
      //row 6
      else if (y==6){
          if (x==0){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==1||x==2||x==3){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else if (x==5){
          let c = color(219, 223, 66); 
        img.set(x, y, c);
        }
        else if (x==6||x==7){
          let c = color(98, 191, 56); 
        img.set(x, y, c);
        } 

         else if (x==9){
          let c = color(239, 238, 244); 
        img.set(x, y, c);
        } 
        
      else {
          let c = color(255); 
        img.set(x, y, c);
        }
        
      }
       //row 7
      else if (y==7){
        if (x==0){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==2||x==4){
        let c = color(21, 94, 178); 
        img.set(x, y, c);
        }
        else if (x==5){
          let c = color(219, 223, 66); 
        img.set(x, y, c);
        }
        else if (x==6||x==7||x==8){
          let c = color(98, 191, 56); 
        img.set(x, y, c);
        } 
        else if (x==9){
          let c = color(239, 238, 244); 
        img.set(x, y, c);
        } 
        
      else {
          let c = color(255); 
        img.set(x, y, c);
        }
       
    }
      //row 8
      else if (y==8){
        if (x==0||x==1||x==2||x==3){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
        else if (x==4){
          let c = color(219, 223, 66); 
        img.set(x, y, c);
        }
        else if (x==5||x==6||x==7||x==8){
          let c = color(98, 191, 56); 
        img.set(x, y, c);
        } 
        else {
          let c = color(239, 238, 244); 
        img.set(x, y, c);
          }
      }
      //row 9
      else if (y==9){
        if (x==0||x==1||x==2||x==3){
        let c = color(216,191,216); 
        img.set(x, y, c);
        }
      else if (x==4){
          let c = color(219, 223, 66); 
        img.set(x, y, c);
        }
        else if (x==5||x==6||x==7||x==8){
          let c = color(98, 191, 56); 
        img.set(x, y, c);
        } 
        else {
          let c = color(239, 238, 244); 
        img.set(x, y, c);
          }
      
      }
      
   }
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}