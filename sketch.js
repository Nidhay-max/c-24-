
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,hammer,rubber,stone,iron;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 plane=new Plane(500,500,1200,30);

 iron=new Iron(300,300);

 stone=new Stone(600,300,105,105);

 rubber=new Rubber(800,400,50);

 hammer=new Hammer(10,100);



	Engine.run(engine);
  

}


function draw() {
  background("lightBlue");
  Engine.update(engine);

  plane.display ();
  iron.display ();
  stone.display ();
  rubber.display ();
  hammer.display ();
  

  drawSprites();
 
}

