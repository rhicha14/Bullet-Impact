var wall, thickness;
var bullet,speed, weight,bulletImg;


function preload(){
	bulletImg = loadImage("bullet.png");
}
function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)

 
	bullet=createSprite(50, 200, 50,5);
    bullet.addImage(bulletImg);
    bullet.scale =.25;
    bullet.velocityX = speed;
    

 
  	
    
    wall=createSprite(1200, 200, thickness, height);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(220);  
  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
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