class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 500
        }
        this.rope = Matter.Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.rope)

    }
    display() {
        if(this.rope.bodyA)
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.y)
    }

    detach() {
        this.rope.bodyA = null
    }

    reattach(body){
        this.rope.bodyA=body
    }
}