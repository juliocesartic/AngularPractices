export class LikeComponent {

    constructor(public likesCount: number, public isSelected :boolean){

    }

    onclick(){
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    }
}