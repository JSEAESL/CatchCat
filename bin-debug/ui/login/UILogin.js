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
var UILogin = (function (_super) {
    __extends(UILogin, _super);
    function UILogin() {
        var _this = _super.call(this) || this;
        _this.skinName = "UILogin_eui";
        return _this;
    }
    UILogin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.GameStart, this);
    };
    UILogin.prototype.GameStart = function (e) {
        SceneUtil.getInstance().goGame();
    };
    UILogin.prototype.disponse = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.GameStart, this);
    };
    return UILogin;
}(Widget));
__reflect(UILogin.prototype, "UILogin");
//# sourceMappingURL=UILogin.js.map