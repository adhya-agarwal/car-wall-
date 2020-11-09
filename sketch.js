var car,wall;
var speed, weight;




function setup() {
  createCanvas(1000,400);
  speed = random(55,90);
  weight = random (400,900);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor="lightpink";
  car.velocityX = speed;

  wall = createSprite (950,200,60,height/2);
  wall.shapeColor="powderblue"

  
}

function draw() {
  background("black");  
  
  

  if (wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;

  if (deformation>180){
  car.shapeColor="aquamarine";
  }
  
  if (deformation<180 && deformation>100){
  car.shapeColor="beige";
  }

  if (deformation<100){
  car.shapeColor="lightpurple"

  }
  }

  drawSprites();
}