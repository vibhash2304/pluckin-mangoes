
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeImage,groundImage,boyImage,stoneImage,mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundImage=new ground(50,635,1300,20);
	treeImage = new tree(600,400);
	boyImage = new boy(200,550);
	stoneImage = new stone(170,475);
	
	mango1 = new mango(600,400,10);
	/*mango2 = new mango(530,290);
	mango3 = new mango(630,250);
	mango4 = new mango(600,200);
	mango5 = new mango(680,400);*/
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  groundImage.display();
  treeImage.display();
  boyImage.display();
  stoneImage.display();
  mango1.display();
  /*mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();*/

  drawSprites();
 
}



