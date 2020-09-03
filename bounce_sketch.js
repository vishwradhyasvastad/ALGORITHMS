
var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(0, 200, 50, 30);
  fixedRect = createSprite(800, 200, 30, 60);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;
}

function draw() {
  background(255,255,255);  

  if(movingRect.x - fixedRect.x < (movingRect.width/2)+(fixedRect.width/2)
  && fixedRect.x - movingRect.x < (movingRect.width/2)+(fixedRect.width/2))
 {
     movingRect.velocityX =  movingRect.velocityX * (-1);
     fixedRect.velocityX =  fixedRect.velocityX * (-1);
}
  drawSprites();
}