class Drop{
    constructor(x,y){
        var options={
            friction:0.001,
            restitution:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        this.x=this.body.position.x;
        this.y=this.body.position.y;
        this.radius=5;
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)});
        }
    }
    display(){
        fill("blue");
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}