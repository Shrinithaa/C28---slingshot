class Slingshot{
    constructor(body1,point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length:10
    
        }
        this.pointB = point2;
    
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling); 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var start = this.sling.bodyA.position
            var end = this.pointB
            strokeWeight(4);
            line(start.x, start.y, end.x, end.y);
        }
        

       
    }


    
}