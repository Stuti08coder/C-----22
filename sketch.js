const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,obj1;
var obj2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
world = engine.world;

var obj1opt = {
  isStatic : true
}

obj1 = Bodies.rectangle(10,390,700,10,obj1opt);

World.add(world,obj1)

var obj2opt = {
  restitution : 0.8 , density : 0.4 , friction : 0.3
}


obj2 = Bodies.rectangle(200,100,50,50,obj2opt)

World.add(world,obj2)


console.log(obj1)


}

function draw() {
    background("yellow");  
    Engine.update(engine);
    rect(obj1.position.x,obj1.position.y,790,10)  

    rect(obj2.position.x,obj2.position.y,50,50)  






}