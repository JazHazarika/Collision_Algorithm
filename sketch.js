var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "pink";
  movingRect = createSprite(200,200,50,80);
  movingRect.shapeColor = "pink";

}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  drawSprites();
}