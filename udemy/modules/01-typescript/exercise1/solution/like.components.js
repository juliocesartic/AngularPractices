"use strict";
exports.__esModule = true;
var LikeComponent = (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onclick = function () {
        this.likesCount += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
