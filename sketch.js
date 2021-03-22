var fixedRect,movingRect

function setup() {
  createCanvas(1200,800 );
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "black"
  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "black"
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  console.log(movingRect.x - fixedRect.x) 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect. height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect. height/2+movingRect.height/2){
    fixedRect.shapeColor = "hotpink"
    movingRect.shapeColor = "blue"
  } 
  else{
    fixedRect.shapeColor = "black"
    movingRect.shapeColor = "black" 
  }
  drawSprites();
}