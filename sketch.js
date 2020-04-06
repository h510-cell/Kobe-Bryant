const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var box1;
var slider;

function setup(){
    var canvas = createCanvas(400,400);
    slider= createSlider(1,255,100);
    slider.position(200,450);
    slider.style('width','80px');
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    var value=slider.value();
    background(val);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}
