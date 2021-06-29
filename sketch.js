var bullet,wall
var speed,weight,thickness



function setup() {
  createCanvas(1000,400);

speed=random(55,90)
weight=random(400,1500)

bullet=createSprite(50,200,50,30)
bullet.shapeColor = "green";
bullet.velocityX = speed;

wall=createSprite(800,200,thickness,height/2)
wall.shapeColor = "red"

thickness=random(22,83)
speed=random(233,321)
weight=random(50,52)
}

function draw() {
  background(0);  

if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5 * weight * speedd* speed/(thickness *thickness *thickness)

  if(damage>10){
    wall.shapeColour=color(255,0,0)
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }

}



  drawSprites();
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
