class Paper {
constructor(width,hieght,radius)
{
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

this.width = width;
this.hieght = hieght;
this.radius = radius;
this.body=Bodies.circle(this.width,this.hieght,this.radius/2,options)
}

display()

{
    var paperpos=this.body.position;

    push()
    translate(paperpos.width,paperpos.hieght);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.radius,this.radius);
    pop()   
  }
    }