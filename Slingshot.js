class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        bird.display();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(8);
            stroke(48,22,8);
            if(pointA.x<220){
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y+10);
                line(pointA.x-25,pointA.y,pointB.x+33,pointB.y+20);
                image(this.sling3,pointA.x-25,pointA.y-15,15,30);
           }else{
               line(pointA.x+25,pointA.y,pointB.x-10,pointB.y+10);
               line(pointA.x+25,pointA.y,pointB.x+33,pointB.y+20);
               image(this.sling3,pointA.x+25,pointA.y-15,15,30);
           }
            pop();
        }
    }
    
}