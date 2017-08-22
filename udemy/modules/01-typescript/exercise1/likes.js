"use strict";
exports.__esModule = true;
var socialInfo = (function () {
    function socialInfo(like) {
        this.like = like;
        this.like = 0;
    }
    socialInfo.prototype.likeAction = function () {
        this.like++;
    };
    socialInfo.prototype.displayLikes = function () {
        console.log("Number of likes: " + this.like);
    };
    return socialInfo;
}());
exports.socialInfo = socialInfo;
