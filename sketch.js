
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine,world;
var dustBin1,ground,Ball1;
var dustBin2,dustBin3;


function setup() {
    // Setup the canvas, the ground the, dustBin, the shooting ball and the bubble balls.
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world=engine.world;
    dustBin1 =  new DustBin(390,330,15,100);
    dustBin2 =  new DustBin(300,330,15,100);
    dustBin3 =  new DustBin(345,375,80,15);
    ground   =  new Ground(200,390,400,20);
    Ball1    =  new Ball(200,200,10,10);

}

function draw() {
// Remember to update the Matter Engine and set the background.
 background(255);
    Matter.Engine.update(engine);
    dustBin1.display();
    dustBin2.display();
    dustBin3.display();
    ground.display();
    Ball1.display();   
}


function keyReleased() {
    
}