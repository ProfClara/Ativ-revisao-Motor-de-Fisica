// Namespacing para Engine World e Bodies


let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function preload(){
  // carregar  imagens
 }

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  //criar um segundo botao
  
  /*var paredes_options = {
    isStatic: true
  }
  
  
  ground = Bodies.rectangle(200,390,400,20, paredes_options);
  right = Bodies.rectangle(390,200,20,400, paredes_options);
  left = Bodies.rectangle(10,200,20,400,paredes_options);
  top_wall = Bodies.rectangle(200,10,400,20,paredes_options);
  
  World.add(world,ground);
  World.add(world,right);
  World.add(world,left);
  World.add(world,top_wall);
  
  var ball_options = {
    restitution: 0.95
  }
  
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  */
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  
  
  ellipse(ball.position.x,ball.position.y,50,50);

  push()
  fill('black')
  rect(ground.position.x,ground.position.y,400,20);
  rect(right.position.x,right.position.y,20,400);
  rect(left.position.x,left.position.y,20,400);
  rect(top_wall.position.x,top_wall.position.y,400,20);
  pop()
  Engine.update(engine);
}


function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
