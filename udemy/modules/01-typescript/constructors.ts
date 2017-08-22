class Point{

    x: number;    
    y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log("Drawing : X: " + this.x + " , Y: " + this.y);
    }

}

let point : Point = new Point(1, 2);
point.draw();

