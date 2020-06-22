class Ball {
  constructor(x,y,width,height) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image = loadImage("assets/paper.png");

    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    
    if (keyIsDown(UP_ARROW)) {  
      Matter.Body.setvelocity(ball.body,5);
    }
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
 }
}