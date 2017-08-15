
class Point{
    
        constructor(private x?: number, private y?: number){
            this.x = x;
            this.y = y;
        }
    
        public draw(){
            console.log("Drawing : X: " + this.x + " , Y: " + this.y);
        }

         get X(){
            return this.x;
        }

        set X(value){
            if(value < 0){
                throw new Error('Value can not be less than 0.');
            }
            this.x = value;
        } 

        /* getX(){
            return this.x;
        }

        setX(value){
            if(value < 0){
                throw new Error('Value can not be less than 0.');
            }
            this.x = value;
        } */


    
 }
        
        let point  = new Point(1, 2);
        let x = point.X;
        point.X = 10;
        //let x = point.getX();
        //point.setX(10);
        point.draw();
        
        