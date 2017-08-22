class Point{

        constructor(private x?: number, private y?: number){
            this.x = x;
            this.y = y;
        }
    
        public draw(){
            console.log("Drawing : X: " + this.x + " , Y: " + this.y);
        }
    
    }
    
    let point : Point = new Point(1, 2);
    point.draw();
    
    