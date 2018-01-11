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
var Widget = (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        return _super.call(this) || this;
    }
    Widget.prototype.disponse = function () {
    };
    Widget.prototype.setParent = function (parent) {
        parent.addChild(this);
        return this;
    };
    Widget.prototype.setPosition = function (px, py) {
        this.x = px;
        this.y = py;
        return this;
    };
    Widget.prototype.playGroup = function () {
    };
    Widget.prototype.update = function (timeStamp) {
    };
    return Widget;
}(eui.Component));
__reflect(Widget.prototype, "Widget");
//# sourceMappingURL=Widget.js.map