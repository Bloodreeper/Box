
var box

function setup() {
  createCanvas(800,800);
  box = createSprite(400,400,50,50);
}

function draw() 
{
  background(30);

  if (keyDown(LEFT_ARROW)){
    box.x = box.x - 1
  }
  if (keyDown(RIGHT_ARROW)){
    box.x = box.x + 1
  }
 drawSprites();
}




