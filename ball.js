class Ball{
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:0.005,
            restitution:0.8

        }
        
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=r
        World.add(world,this.body)
    }
    show(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()

        
    }
    
    
}