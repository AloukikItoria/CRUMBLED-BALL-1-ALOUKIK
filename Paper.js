class Paper{

    constructor(x,y,radius){
    
    var option = {
    
    restitution:0.8,
    friction:0.7,
    density:1
    
    }
    
    this.body = Bodies.circle(x,y,radius,option)
    this.radius = radius
    World.add(world,this.body)
    
    
    
    
    }
    
    
    display(){
    push();
    ellipseMode(RADIUS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    circle(0,0,this.radius)
    pop();
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }