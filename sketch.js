
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;



function setup() {
	createCanvas(5000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
    paper = new Paper(200,580,20);

    ground = new Ground(800,600,5000,25);

	leftSide = new Dustbin(880,510,20,150);
	bottom = new Dustbin(1000,580,250,20);
	rightSide = new Dustbin(1130,510,20,150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();


  drawSprites();
 
}


function keyPressed() {

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body, paper.body.position, {x:43 , y:-43})



}

}








