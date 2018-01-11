var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var UIResult = (function (_super) {
    __extends(UIResult, _super);
    function UIResult() {
        var _this = _super.call(this) || this;
        _this.skinName = "UIResult_eui";
        return _this;
    }
    UIResult.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    UIResult.prototype.reStarGame = function (e) {
        SceneUtil.getInstance().goGame();
    };
    UIResult.prototype.setResultData = function (resultData) {
        this.mData = resultData;
    };
    UIResult.prototype.playGroup = function () {
        this.againImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reStarGame, this);
        if (null != this.mData) {
            this.scoreLabel.text = this.mData.score + "";
            if (this.mData.state) {
                this.currentState = "win";
            }
            else {
                this.currentState = "lose";
            }
        }
        this.heightScoreLabel.text = 0 + "";
        var temp = egret.localStorage.getItem("WinStep");
        if (temp) {
            var winStep = parseInt(temp);
            if (winStep != 0 && winStep != NaN) {
                this.heightScoreLabel.text = 100 - winStep + "";
            }
        }
    };
    UIResult.prototype.disponse = function () {
        this.againImage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reStarGame, this);
    };
    return UIResult;
}(Widget));
__reflect(UIResult.prototype, "UIResult");
//# sourceMappingURL=UIResult.js.map