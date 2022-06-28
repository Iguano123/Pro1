var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,10,10);
}

function draw() 
{
  background("black");

  if(keyIsDown("w")){
    box.position.y=box.position.y -20;
  }
  if(keyIsDown("s")){
    box.position.y=box.position.y +20;
  }
  if(keyIsDown("a")){
    box.position.x=box.position.x -20;
  }
  if(keyIsDown('D')){
    box.position.x=box.position.x +20;
  }
  drawSprites();
}




