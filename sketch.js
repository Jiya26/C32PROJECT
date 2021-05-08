
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;
var ground,ground2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var polygon,polygonImg;
var slingShot;

function preload(){
     polygonImg=loadImage("polygonImg.png")
}

function setup() {
  var canvas = createCanvas(1200,1000);

  
	engine = Engine.create();
  world = engine.world;
  
  polygon = Bodies.circle(100,400,25,{density:1.5});
  World.add(world,polygon);
  
  
  ground = new Ground(400,600,249,15);
  block1 = new BoxClass(430,580,35,50);
  block2 = new BoxClass(420,580,35,50);
  block3 = new BoxClass(410,580,35,50);
  block4 = new BoxClass(400,580,35,50);
  block5 = new BoxClass(390,580,35,50);
  block6 = new BoxClass(380,580,35,50);
  block7 = new BoxClass(370,580,35,50);
  block8 = new BoxClass(420,550,35,50);
  block9 = new BoxClass(410,550,35,50);
  block10 = new BoxClass(400,550,35,50);
  block11 = new BoxClass(390,550,35,50);
  block12 = new BoxClass(380,550,35,50);
  block13 = new BoxClass(410,520,35,50);
  block14 = new BoxClass(400,520,35,50);
  block15 = new BoxClass(390,520,35,50);
  block16 = new BoxClass(400,490,35,50);

  ground2 = new Ground(800,400,180,15);
  box1 = new BoxClass(820,380,35,50);
  box2 = new BoxClass(810,380,35,50);
  box3 = new BoxClass(800,380,35,50);
  box4 = new BoxClass(790,380,35,50);
  box5 = new BoxClass(780,380,35,50);
  box6 = new BoxClass(810,350,35,50);
  box7 = new BoxClass(800,350,35,50);
  box8 = new BoxClass(790,350,35,50);
  box9 = new BoxClass(800,320,35,50)


 slingShot = new SlingShot(polygon,{x:100,y:350});
  Engine.run(engine);


}

function draw() {
  background(0);  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  slingShot.display();
  fill("white");
  text("Drag The Polygon To Destroy The Blocks",200,20);
  text("Press Space for second chance",1000,500);

  image(polygonImg,polygon.position.x,polygon.position.y,50,50)
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:100,y:350});
    slingShot.attach(polygon);
    
  }
}