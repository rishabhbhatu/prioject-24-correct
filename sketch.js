
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);
    Matter.Bodies.circle(50,25,1/2);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Box(400,650,200,20)
	box2=new Box(300,550,20,200)
	box3=new Box(500,550,20,200)
	paper=new Paper(-400,-650,25,1/2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();    
  box2.display();
  box3.display();
  paper.display();


}

function keyPressed (){
if(keyCode === UP_ARROW){

 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	
}
}

