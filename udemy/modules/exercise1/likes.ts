export class socialInfo{
    constructor(private like? : number){
        this.like = 0;
    }

    likeAction(){
        this.like++;
    }

    displayLikes(){
        console.log("Number of likes: " + this.like);
    }

}