
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(100 , 600 , 7.5 , {restitution:0.5, isStatic:false, density:1.5,friction:1});
	World.add(world, paperBody);
	console.log(paperBody);

	baseBody = Bodies.rectangle(700,655,150,15,{isStatic:true})
	World.add(world,baseBody);
	leftBody = Bodies.rectangle(625,610,10,85,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(775,610,10,85,{isStatic:true})
	World.add(world,rightBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	console.log(baseBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  fill("grey");
  rect(baseBody.position.x,baseBody.position.y,150,15)
  rect(leftBody.position.x,leftBody.position.y,10,85)
  rect(rightBody.position.x,rightBody.position.y,10,85)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(paperBody.position.x,paperBody.position.y,15,15)
  drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(paperBody,paperBody.position,{x:30,y:-50})
    
  }
}



