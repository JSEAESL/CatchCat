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
var UIWayPoint = (function (_super) {
    __extends(UIWayPoint, _super);
    function UIWayPoint() {
        var _this = _super.call(this) || this;
        _this.skinName = "UIWayPoint_eui";
        return _this;
    }
    UIWayPoint.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
    };
    UIWayPoint.prototype.pointClick = function (e) {
        GlobalDispatcher.Ins.dispatchEvent(new CommonEvent(UIWayPoint.POINT_CLICK, this.thisData));
    };
    UIWayPoint.prototype.upData = function (data) {
        this.thisData = data;
        this.currentState = data.state;
        this.tt.text = "x:" + this.thisData.i + "   y:" + this.thisData.j;
    };
    UIWayPoint.POINT_CLICK = "UIWayPoint_POINT_CLICK";
    return UIWayPoint;
}(Widget));
__reflect(UIWayPoint.prototype, "UIWayPoint");
var WayPointItemRenderer = (function (_super) {
    __extends(WayPointItemRenderer, _super);
    function WayPointItemRenderer() {
        var _this = _super.call(this) || this;
        _this.skinName = "UIWayPoint_eui";
        return _this;
    }
    WayPointItemRenderer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    WayPointItemRenderer.prototype.pointClick = function (e) {
        GlobalDispatcher.Ins.dispatchEvent(new CommonEvent(UIWayPoint.POINT_CLICK, this.mData));
    };
    WayPointItemRenderer.prototype.onRemove = function (e) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    WayPointItemRenderer.prototype.dataChanged = function () {
        if (this.data) {
            this.mData = this.data;
            this.currentState = this.mData.state;
            this.tt.text = "x:" + this.mData.i + "   y:" + this.mData.j;
        }
    };
    return WayPointItemRenderer;
}(eui.ItemRenderer));
__reflect(WayPointItemRenderer.prototype, "WayPointItemRenderer");
//# sourceMappingURL=UIWayPoint.js.map