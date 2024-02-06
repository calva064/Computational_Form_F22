// Turtle
// Basic turtle graphics implementation:
// https://en.wikipedia.org/wiki/Turtle_graphics
// For more info on Javascript OOP:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
//
// The turtle's coordinate system uses pixels for distance and degrees for rotations
// 0 degrees is straight right (east); positive degrees are clockwise

// Turtle constructor
// takes optional x, y starting coordinates (default is center of sketch)
function Turtle(x, y) {
  // assign default values to x and y if they were not passed
  if (typeof x === "undefined") {
    x = width * 0.5;
  }
  if (typeof y === "undefined") {
    y = height * 0.5;
  }
  this.x = x;
  this.y = y;
  this.bearingRadians = 0;
  this.isPenDown = true;
  this._stateStack = [];
}

// moveTo instantly transports the turtle to the provided x, y location, drawing a line if pen is down
Turtle.prototype.moveTo = function (newX, newY) {
  if (this.isPenDown) {
    line(this.x, this.y, newX, newY);
  }
  this.x = newX;
  this.y = newY;
};

// moveForward moves the turtle along its current bearing, drawing a line if pen is down
Turtle.prototype.moveForward = function (distance) {
  var newX = this.x + cos(this.bearingRadians) * distance;
  var newY = this.y + sin(this.bearingRadians) * distance;
  this.moveTo(newX, newY);
};

// moveBackward moves the turtle backward from its current bearing, drawing a line if pen is down
Turtle.prototype.moveBackward = function (distance) {
  this.moveForward(-distance);
};

// turnTo changes the turtle's bearing to the provided angle in degrees
Turtle.prototype.turnTo = function (angleDegrees) {
  this.bearingRadians = radians(angleDegrees);
};

// turnRight rotates the turtle's bearing clockwise by the provided angle in degrees
Turtle.prototype.turnRight = function (amountDegrees) {
  this.bearingRadians += radians(amountDegrees);
};

// turnLeft rotates the turtle's bearing counter-clockwise by the provided angle in degrees
Turtle.prototype.turnLeft = function (amountDegrees) {
  this.bearingRadians -= radians(amountDegrees);
};

// penUp tells the turtle to move without drawing
Turtle.prototype.penUp = function () {
  this.isPenDown = false;
};

// penDown tells the turtle to draw a line when it moves
Turtle.prototype.penDown = function () {
  this.isPenDown = true;
};

// pushState records the turtle's current state (position, bearing, etc.) to a stack so that changes can be undone easily
Turtle.prototype.pushState = function () {
  this._stateStack.push({
    x: this.x,
    y: this.y,
    bearingRadians: this.bearingRadians,
    isPenDown: this.isPenDown,
  });
};

// popState restores the turtle's state to the top recorded state on the stack
Turtle.prototype.popState = function () {
  if (this._stateStack.length === 0) {
    console.error(
      "Turtle: No states left on stack. Make sure your calls to .pushState and .popState are balanced."
    );
    return;
  }
  var state = this._stateStack.pop();
  this.x = state.x;
  this.y = state.y;
  this.bearingRadians = state.bearingRadians;
  this.isPenDown = state.isPenDown;
};

// image draws and image centered on the turtle's current location and alligned with the turtle's rotation (forward = up)
Turtle.prototype.image = function (i, w, h) {
  // w, h are optional parameters to this function and to p5's image
  // p5's image function will draw the image at its "normal" size if w and h are undefined

  push();
  translate(this.x, this.y);
  rotate(this.bearingRadians + PI * 0.5);
  imageMode(CENTER);
  image(i, 0, 0, w, h);
  pop();
};

//Turtle code begins

let myTurtle;

function setup() {
  createCanvas(500, 500);
  myTurtle = new Turtle();
}

function draw() {
  background(132, 81, 50);
  noFill();
  stroke(190, 148, 103);
  strokeWeight(2);

  // move to starting position (without drawing)
  myTurtle.penUp();
  myTurtle.moveTo(100, 200);
  
  //draw head
  myTurtle.penDown();
  myTurtle.turnLeft(80);
  myTurtle.moveForward(50);
  myTurtle.turnRight(20)
  myTurtle.moveForward(10)
  myTurtle.turnLeft(40)
  myTurtle.moveForward(30)
  for(i=0;i<12;i++){
  myTurtle.turnRight(10)
  myTurtle.moveForward(2)
  }
  myTurtle.turnRight(50)
  myTurtle.moveForward(20)
  myTurtle.turnRight(5)
  myTurtle.moveForward(55)
  myTurtle.turnLeft(5)
  myTurtle.moveForward(5)
  for(i=0;i<12;i++){
  myTurtle.turnLeft(3)
  myTurtle.moveForward(2)
  }
  
  myTurtle.turnLeft(40)
  myTurtle.moveForward(20)
  for(i=0;i<20;i++){
  myTurtle.turnRight(1)
  myTurtle.moveForward(2)
  }
  myTurtle.turnLeft(2)
  myTurtle.moveForward(10)
  myTurtle.turnLeft(85)
  myTurtle.moveForward(30)
  myTurtle.turnLeft(5)
  myTurtle.moveForward(30)
   myTurtle.moveForward(30)
  for(i=0;i<14;i++){
  myTurtle.turnRight(10)
  myTurtle.moveForward(2)
  }
  myTurtle.moveForward(5)
  myTurtle.turnRight(15)
  myTurtle.moveForward(10)
  myTurtle.turnRight(10)
  myTurtle.moveForward(15)
  myTurtle.turnLeft(2)
  myTurtle.moveForward(35)
  myTurtle.turnRight(15)
  myTurtle.moveForward(10)
  myTurtle.turnLeft(20)
  myTurtle.moveForward(20)
  for(i=1;i<4;i++){
  myTurtle.turnRight(i*8)
  myTurtle.moveForward(30)
  }
  myTurtle.turnRight(25)
  myTurtle.moveForward(70)
  for(i=1;i<8;i++){
  myTurtle.turnRight(i*2)
  myTurtle.moveForward(2)
  }
  myTurtle.moveForward(50)
  myTurtle.turnLeft(5)
  myTurtle.moveForward(10)
  myTurtle.turnRight(40)
  myTurtle.moveForward(40)
  myTurtle.turnLeft(10)
  myTurtle.moveForward(10)
  myTurtle.turnRight(30)
  myTurtle.moveForward(20)
  myTurtle.turnLeft(7)
  myTurtle.moveForward(28)
  
  //draw eyes

  strokeWeight(3);
  stroke(0);
  myTurtle.pushState();
  myTurtle.penUp();
  myTurtle.moveTo(200, 235);
  myTurtle.penDown();
  myTurtle.turnRight(60)
  myTurtle.moveForward(15)
  myTurtle.turnRight(35)
  myTurtle.moveForward(25)
  myTurtle.popState();
  
  myTurtle.pushState();
  myTurtle.penUp();
  myTurtle.moveTo(142, 235);
  myTurtle.penDown();
  myTurtle.turnLeft(30)
  myTurtle.moveForward(15)
  myTurtle.turnLeft(35)
  myTurtle.moveForward(25)
  myTurtle.popState();

  
  
  //draw nose
  myTurtle.pushState();
  myTurtle.penUp();
  myTurtle.moveTo(175, 280);
  myTurtle.penDown();
  myTurtle.turnRight(40)
  myTurtle.moveForward(10)
  myTurtle.turnLeft(40)
  myTurtle.moveForward(5)
  myTurtle.turnRight(40)
  myTurtle.moveForward(5)
  myTurtle.turnRight(40)
  myTurtle.moveForward(5)
  myTurtle.turnLeft(30)
  myTurtle.moveForward(5)
  myTurtle.turnLeft(120)
  myTurtle.moveForward(10)
   myTurtle.turnLeft(20)
  myTurtle.moveForward(10)
  
 myTurtle.penUp();
  myTurtle.moveTo(175, 280);
  myTurtle.penDown();
  myTurtle.turnLeft(-60)
  myTurtle.moveForward(10)
  myTurtle.turnRight(40)
  myTurtle.moveForward(5)
  myTurtle.turnLeft(40)
  myTurtle.moveForward(5)
  myTurtle.turnLeft(40)
  myTurtle.moveForward(5)
  myTurtle.turnRight(30)
  myTurtle.moveForward(5)
  myTurtle.turnRight(120)
  myTurtle.moveForward(10)
   myTurtle.turnRight(20)
  myTurtle.moveForward(10)
  myTurtle.popState();
  
  //draw mouth
  myTurtle.penUp();
  myTurtle.moveTo(175, 280);
  myTurtle.penDown();
  myTurtle.turnRight(185)
  myTurtle.moveForward(10)
  myTurtle.pushState();
  myTurtle.turnLeft(70);
  myTurtle.moveForward(20)
  for(i=0;i<3;i++){
  myTurtle.turnLeft(15)
  myTurtle.moveForward(10)
  }
  myTurtle.popState();
  myTurtle.turnRight(70);
  myTurtle.moveForward(20)

  
  //draw whiskers
  strokeWeight(1)
  stroke(200,200,200,40)
  myTurtle.penUp();
  myTurtle.moveTo(200, 280);
  myTurtle.penDown();
  myTurtle.turnRight(200)
  
  myTurtle.pushState();
  for(i=0;i<8;i++){
  myTurtle.turnRight(2)
  myTurtle.moveForward(10)
  }
  myTurtle.popState();
  
  myTurtle.pushState();
  myTurtle.penUp();
  myTurtle.moveTo(200, 275);
  myTurtle.penDown();
  for(i=0;i<8;i++){
  myTurtle.turnLeft(1)
  myTurtle.moveForward(11)
  }
  myTurtle.popState();
  
myTurtle.pushState();
  myTurtle.penUp();
  myTurtle.moveTo(200, 275);
  myTurtle.penDown()
  for(i=0;i<8;i++){
  myTurtle.turnRight(1)
  myTurtle.moveForward(12)
  }
  myTurtle.popState();
  
  myTurtle.pushState();
  for(i=0;i<8;i++){
  myTurtle.turnRight(3)
  myTurtle.moveForward(12)
  }
  myTurtle.popState();



  noLoop();
    
    


}


