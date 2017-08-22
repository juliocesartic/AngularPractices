class Point{

    x: number;    
    y: number;

    draw(){
        console.log("Drawing : X: " + this.x + " , Y: " + this.y);
    }

    getDistance(another: Point){
        //..
    }
}

let point : Point = new Point();
point.x = 1;
point.y = 2;
point.draw();

