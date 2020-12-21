var fixedrect,movingrect;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(100, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;

  movingrect = createSprite(500, 200, 50, 50);
  movingrect.shapeColor = "green";
  movingrect.debug = true;

  fixedrect.velocityX=5;
  movingrect.velocityX = -5
}
 
function draw() {
  background(0,0,0);  
  // movingrect.x = World.mouseX;
  // movingrect.y = World.mouseY;
  // if(isTouching(object1,movingrect)){
  //   object1.shapeColor = "red";
  //   movingrect.shapeColor = "red";
  // }
  // else{
  //   object1.shapeColor = "green";
  //   movingrect.shapeColor = "green";
  //   }
  bounceOff(movingrect,fixedrect);
  drawSprites();
}
